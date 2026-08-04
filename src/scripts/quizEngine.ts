import {
  getBookmarkedQuestionIds,
  getStoragePersistenceState,
  listQuizAttempts,
  requestPersistentStorage,
  saveQuizAttempt,
  setQuestionBookmark
} from './localDatabase';
import type { AttemptAnswer, ConfidenceLevel, QuizAttempt, RuntimeQuestion } from '../types/quiz';

const requireElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Quiz engine could not find #${id}.`);
  }
  return element as T;
};

const createAttemptId = () =>
  typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID()
    : `attempt-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const formatAttemptDate = (value: string) =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));

const parseQuestionData = (): RuntimeQuestion[] => {
  const dataElement = requireElement<HTMLScriptElement>('komadrona-quiz-data');
  const parsed: unknown = JSON.parse(dataElement.textContent ?? '[]');
  if (!Array.isArray(parsed)) {
    throw new Error('Quiz data is not an array.');
  }
  return parsed as RuntimeQuestion[];
};

export const initQuizEngine = async () => {
  const questions = parseQuestionData();

  const startButton = requireElement<HTMLButtonElement>('quiz-start');
  const quizPanel = requireElement<HTMLElement>('quiz-panel');
  const questionNumber = requireElement<HTMLElement>('quiz-question-number');
  const progressText = requireElement<HTMLElement>('quiz-progress');
  const stem = requireElement<HTMLElement>('quiz-stem');
  const choices = requireElement<HTMLElement>('quiz-choices');
  const confidence = requireElement<HTMLSelectElement>('quiz-confidence');
  const flagged = requireElement<HTMLInputElement>('quiz-flagged');
  const bookmarkButton = requireElement<HTMLButtonElement>('quiz-bookmark');
  const checkButton = requireElement<HTMLButtonElement>('quiz-check');
  const nextButton = requireElement<HTMLButtonElement>('quiz-next');
  const feedback = requireElement<HTMLElement>('quiz-feedback');
  const result = requireElement<HTMLElement>('quiz-result');
  const history = requireElement<HTMLElement>('quiz-history');
  const storageStatus = requireElement<HTMLElement>('storage-status');
  const persistenceButton = requireElement<HTMLButtonElement>('request-persistence');
  const engineStatus = requireElement<HTMLElement>('quiz-engine-status');

  let currentIndex = 0;
  let startedAt = '';
  let answers: AttemptAnswer[] = [];
  let checkedCurrentQuestion = false;
  let bookmarkedIds = new Set<string>();

  const setEngineStatus = (message: string, tone: 'normal' | 'error' = 'normal') => {
    engineStatus.textContent = message;
    engineStatus.dataset.tone = tone;
  };

  const renderHistory = async () => {
    try {
      const attempts = await listQuizAttempts(5);
      history.replaceChildren();

      if (attempts.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'small-print';
        empty.textContent = 'No completed in-app attempts are stored in this browser yet.';
        history.append(empty);
        return;
      }

      const list = document.createElement('ol');
      list.className = 'attempt-history-list';
      for (const attempt of attempts) {
        const item = document.createElement('li');
        const score = document.createElement('strong');
        score.textContent = `${attempt.score ?? 0}/${attempt.totalQuestions}`;
        const meta = document.createElement('span');
        meta.textContent = `${formatAttemptDate(attempt.startedAt)} · ${attempt.elapsedSeconds}s`;
        item.append(score, meta);
        list.append(item);
      }
      history.append(list);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to read local attempt history.';
      history.textContent = message;
    }
  };

  const renderPersistenceState = async () => {
    try {
      const state = await getStoragePersistenceState();
      if (state === 'granted') {
        storageStatus.textContent = 'Persistent storage is granted for this browser profile.';
        persistenceButton.hidden = true;
      } else if (state === 'available') {
        storageStatus.textContent = 'Storage is currently best-effort. The browser may grant persistent storage.';
        persistenceButton.hidden = false;
      } else {
        storageStatus.textContent = 'This browser does not expose the persistent-storage request API.';
        persistenceButton.hidden = true;
      }
    } catch {
      storageStatus.textContent = 'Storage-persistence status could not be determined.';
      persistenceButton.hidden = true;
    }
  };

  const updateBookmarkButton = () => {
    const question = questions[currentIndex];
    const bookmarked = bookmarkedIds.has(question.questionId);
    bookmarkButton.textContent = bookmarked ? 'Remove bookmark' : 'Bookmark question';
    bookmarkButton.setAttribute('aria-pressed', String(bookmarked));
  };

  const renderQuestion = () => {
    const question = questions[currentIndex];
    checkedCurrentQuestion = false;
    questionNumber.textContent = `Question ${currentIndex + 1}`;
    progressText.textContent = `${currentIndex + 1} of ${questions.length}`;
    stem.textContent = question.stem;
    choices.replaceChildren();
    feedback.replaceChildren();
    feedback.hidden = true;
    nextButton.hidden = true;
    checkButton.hidden = false;
    checkButton.disabled = true;
    confidence.value = 'medium';
    flagged.checked = false;

    for (const choice of question.choices) {
      const label = document.createElement('label');
      label.className = 'quiz-choice';
      label.dataset.choiceId = choice.id;

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-choice';
      input.value = choice.id;
      input.addEventListener('change', () => {
        if (!checkedCurrentQuestion) {
          checkButton.disabled = false;
        }
      });

      const text = document.createElement('span');
      text.textContent = choice.text;
      label.append(input, text);
      choices.append(label);
    }

    updateBookmarkButton();
  };

  const selectedChoiceId = () =>
    choices.querySelector<HTMLInputElement>('input[name="quiz-choice"]:checked')?.value ?? null;

  const checkCurrentAnswer = () => {
    if (checkedCurrentQuestion) {
      return;
    }

    const question = questions[currentIndex];
    const selected = selectedChoiceId();
    if (!selected) {
      return;
    }

    checkedCurrentQuestion = true;
    const correct = selected === question.correctChoiceId;
    const answer: AttemptAnswer = {
      questionId: question.questionId,
      selectedChoiceId: selected,
      correct,
      confidence: confidence.value as ConfidenceLevel,
      flagged: flagged.checked
    };
    answers.push(answer);

    for (const input of choices.querySelectorAll<HTMLInputElement>('input[name="quiz-choice"]')) {
      input.disabled = true;
      const label = input.closest<HTMLLabelElement>('.quiz-choice');
      if (!label) continue;

      if (input.value === question.correctChoiceId) {
        label.dataset.result = 'correct';
      } else if (input.value === selected) {
        label.dataset.result = 'incorrect';
      }
    }

    const heading = document.createElement('strong');
    heading.textContent = correct ? 'Correct.' : 'Not correct.';

    const rationale = document.createElement('p');
    rationale.textContent = question.rationale;

    feedback.append(heading, rationale);

    if (!correct) {
      const selectedRationale = question.distractorRationales.find((item) => item.choiceId === selected);
      if (selectedRationale) {
        const distractor = document.createElement('p');
        distractor.className = 'small-print';
        distractor.textContent = `Why that option does not fit: ${selectedRationale.rationale}`;
        feedback.append(distractor);
      }
    }

    const sourceList = document.createElement('ul');
    sourceList.className = 'quiz-source-list';
    for (const source of question.sources) {
      const item = document.createElement('li');
      item.textContent = `${source.referenceId}: ${source.locator}`;
      sourceList.append(item);
    }
    feedback.append(sourceList);
    feedback.dataset.result = correct ? 'correct' : 'incorrect';
    feedback.hidden = false;

    checkButton.hidden = true;
    nextButton.hidden = false;
    nextButton.textContent = currentIndex === questions.length - 1 ? 'Finish preview' : 'Next question';
  };

  const finishAttempt = async () => {
    const completedAt = new Date();
    const score = answers.filter((answer) => answer.correct).length;
    const elapsedSeconds = Math.max(
      0,
      Math.round((completedAt.getTime() - new Date(startedAt).getTime()) / 1000)
    );

    const attempt: QuizAttempt = {
      id: createAttemptId(),
      dataVersion: 1,
      quizId: 'system-content-engine-preview',
      quizType: 'system-preview',
      startedAt,
      completedAt: completedAt.toISOString(),
      questionVersions: questions.map((question) => ({
        questionId: question.questionId,
        version: question.version
      })),
      answers,
      score,
      totalQuestions: questions.length,
      elapsedSeconds
    };

    try {
      await saveQuizAttempt(attempt);
      setEngineStatus('Attempt saved to IndexedDB in this browser.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Attempt could not be stored locally.';
      setEngineStatus(message, 'error');
    }

    quizPanel.hidden = true;
    result.hidden = false;
    result.replaceChildren();

    const heading = document.createElement('h2');
    heading.textContent = `Preview score: ${score}/${questions.length}`;
    const explanation = document.createElement('p');
    explanation.textContent =
      'This was a system fixture, not a midwifery examination. It proves question rendering, rationales, browser-only scoring, bookmarks, and local attempt storage.';
    const retry = document.createElement('button');
    retry.className = 'button button-primary';
    retry.type = 'button';
    retry.textContent = 'Retake preview';
    retry.addEventListener('click', () => {
      currentIndex = 0;
      answers = [];
      startedAt = new Date().toISOString();
      result.hidden = true;
      quizPanel.hidden = false;
      renderQuestion();
    });

    result.append(heading, explanation, retry);
    await renderHistory();
  };

  startButton.addEventListener('click', () => {
    currentIndex = 0;
    answers = [];
    startedAt = new Date().toISOString();
    startButton.hidden = true;
    result.hidden = true;
    quizPanel.hidden = false;
    renderQuestion();
  });

  checkButton.addEventListener('click', checkCurrentAnswer);

  nextButton.addEventListener('click', () => {
    if (!checkedCurrentQuestion) return;
    if (currentIndex === questions.length - 1) {
      void finishAttempt();
      return;
    }
    currentIndex += 1;
    renderQuestion();
  });

  bookmarkButton.addEventListener('click', async () => {
    const questionId = questions[currentIndex].questionId;
    const nextState = !bookmarkedIds.has(questionId);
    try {
      await setQuestionBookmark(questionId, nextState);
      if (nextState) {
        bookmarkedIds.add(questionId);
      } else {
        bookmarkedIds.delete(questionId);
      }
      updateBookmarkButton();
      setEngineStatus(nextState ? 'Question bookmarked locally.' : 'Local bookmark removed.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Bookmark could not be updated.';
      setEngineStatus(message, 'error');
    }
  });

  persistenceButton.addEventListener('click', async () => {
    try {
      const granted = await requestPersistentStorage();
      storageStatus.textContent = granted
        ? 'Persistent storage was granted for this browser profile.'
        : 'The browser did not grant persistent storage. Export will remain necessary.';
      persistenceButton.hidden = granted;
    } catch {
      storageStatus.textContent = 'The persistent-storage request failed. Export will remain necessary.';
    }
  });

  try {
    bookmarkedIds = await getBookmarkedQuestionIds();
    await Promise.all([renderHistory(), renderPersistenceState()]);
    setEngineStatus('Local quiz storage is ready.');
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Local quiz storage is unavailable.';
    setEngineStatus(message, 'error');
  }
};
