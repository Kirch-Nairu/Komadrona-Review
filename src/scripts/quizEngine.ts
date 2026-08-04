import {
  deleteQuizAttempt,
  getActiveQuizAttempt,
  getBookmarkedQuestionIds,
  getStoragePersistenceState,
  listQuizAttempts,
  requestPersistentStorage,
  saveQuizAttempt,
  setQuestionBookmark
} from './localDatabase';
import type { AttemptAnswer, ConfidenceLevel, QuizAttempt, RuntimeQuestion } from '../types/quiz';

const QUIZ_ID = 'system-content-engine-preview';

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

const attemptVersionsMatch = (attempt: QuizAttempt, questions: RuntimeQuestion[]) => {
  if (attempt.questionVersions.length !== questions.length) return false;
  return attempt.questionVersions.every((saved, index) => {
    const current = questions[index];
    return current?.questionId === saved.questionId && current.version === saved.version;
  });
};

export const initQuizEngine = async () => {
  const questions = parseQuestionData();
  if (questions.length === 0) {
    throw new Error('The in-app practice bank is empty.');
  }

  const startButton = requireElement<HTMLButtonElement>('quiz-start');
  const abandonButton = requireElement<HTMLButtonElement>('quiz-abandon');
  const resumeStatus = requireElement<HTMLElement>('quiz-resume-status');
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
  let answers: AttemptAnswer[] = [];
  let checkedCurrentQuestion = false;
  let bookmarkedIds = new Set<string>();
  let activeAttempt: QuizAttempt | null = null;
  let baseElapsedSeconds = 0;
  let sessionStartedAt = Date.now();

  const currentQuestion = (): RuntimeQuestion => {
    const question = questions[currentIndex];
    if (!question) {
      throw new Error(`Quiz question index ${currentIndex} is out of range.`);
    }
    return question;
  };

  const setEngineStatus = (message: string, tone: 'normal' | 'error' = 'normal') => {
    engineStatus.textContent = message;
    engineStatus.dataset.tone = tone;
  };

  const elapsedSeconds = () =>
    baseElapsedSeconds + Math.max(0, Math.round((Date.now() - sessionStartedAt) / 1000));

  const resetSessionClock = (savedSeconds: number) => {
    baseElapsedSeconds = Math.max(0, savedSeconds);
    sessionStartedAt = Date.now();
  };

  const answerForQuestion = (questionId: string) =>
    answers.find((answer) => answer.questionId === questionId) ?? null;

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
    const question = currentQuestion();
    const bookmarked = bookmarkedIds.has(question.questionId);
    bookmarkButton.textContent = bookmarked ? 'Remove bookmark' : 'Bookmark question';
    bookmarkButton.setAttribute('aria-pressed', String(bookmarked));
  };

  const renderFeedback = (answer: AttemptAnswer) => {
    const question = currentQuestion();
    const selected = answer.selectedChoiceId;
    if (!selected) return;

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

    feedback.replaceChildren();
    const heading = document.createElement('strong');
    heading.textContent = answer.correct ? 'Correct.' : 'Not correct.';

    const rationale = document.createElement('p');
    rationale.textContent = question.rationale;
    feedback.append(heading, rationale);

    if (!answer.correct) {
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
    feedback.dataset.result = answer.correct ? 'correct' : 'incorrect';
    feedback.hidden = false;

    checkButton.hidden = true;
    nextButton.hidden = false;
    nextButton.textContent = currentIndex === questions.length - 1 ? 'Finish preview' : 'Next question';
  };

  const renderQuestion = () => {
    const question = currentQuestion();
    const existingAnswer = answerForQuestion(question.questionId);
    checkedCurrentQuestion = Boolean(existingAnswer?.selectedChoiceId && existingAnswer.correct !== null);

    questionNumber.textContent = `Question ${currentIndex + 1}`;
    progressText.textContent = `${currentIndex + 1} of ${questions.length}`;
    stem.textContent = question.stem;
    choices.replaceChildren();
    feedback.replaceChildren();
    feedback.hidden = true;
    nextButton.hidden = true;
    checkButton.hidden = false;
    checkButton.disabled = true;
    confidence.value = existingAnswer?.confidence ?? 'medium';
    flagged.checked = existingAnswer?.flagged ?? false;

    for (const choice of question.choices) {
      const label = document.createElement('label');
      label.className = 'quiz-choice';
      label.dataset.choiceId = choice.id;

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'quiz-choice';
      input.value = choice.id;
      input.checked = existingAnswer?.selectedChoiceId === choice.id;
      input.disabled = checkedCurrentQuestion;
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

    if (existingAnswer && checkedCurrentQuestion) {
      renderFeedback(existingAnswer);
    }

    updateBookmarkButton();
  };

  const selectedChoiceId = () =>
    choices.querySelector<HTMLInputElement>('input[name="quiz-choice"]:checked')?.value ?? null;

  const persistActiveAttempt = async (
    overrides: Partial<QuizAttempt> = {}
  ): Promise<QuizAttempt> => {
    if (!activeAttempt) {
      throw new Error('No active quiz session is available to save.');
    }

    const now = new Date().toISOString();
    const saved: QuizAttempt = {
      ...activeAttempt,
      dataVersion: 2,
      status: 'in-progress',
      updatedAt: now,
      completedAt: null,
      abandonedAt: null,
      currentQuestionIndex: currentIndex,
      answers: [...answers],
      elapsedSeconds: elapsedSeconds(),
      ...overrides
    };

    await saveQuizAttempt(saved);
    activeAttempt = saved;
    resetSessionClock(saved.elapsedSeconds);
    return saved;
  };

  const createNewAttempt = async () => {
    const now = new Date().toISOString();
    activeAttempt = {
      id: createAttemptId(),
      dataVersion: 2,
      quizId: QUIZ_ID,
      quizType: 'system-preview',
      status: 'in-progress',
      startedAt: now,
      updatedAt: now,
      completedAt: null,
      abandonedAt: null,
      currentQuestionIndex: 0,
      questionVersions: questions.map((question) => ({
        questionId: question.questionId,
        version: question.version
      })),
      answers: [],
      score: null,
      totalQuestions: questions.length,
      elapsedSeconds: 0
    };

    currentIndex = 0;
    answers = [];
    resetSessionClock(0);
    await saveQuizAttempt(activeAttempt);
  };

  const openActiveAttempt = () => {
    if (!activeAttempt) {
      throw new Error('No saved quiz session is available to resume.');
    }

    answers = [...activeAttempt.answers];
    currentIndex = Math.min(
      Math.max(activeAttempt.currentQuestionIndex ?? activeAttempt.answers.length, 0),
      questions.length - 1
    );
    resetSessionClock(activeAttempt.elapsedSeconds);
    startButton.hidden = true;
    abandonButton.hidden = true;
    result.hidden = true;
    quizPanel.hidden = false;
    renderQuestion();
  };

  const updateStartState = () => {
    if (!activeAttempt) {
      startButton.disabled = false;
      startButton.textContent = 'Start in-app preview';
      abandonButton.hidden = true;
      resumeStatus.textContent = 'No unfinished session is stored for this preview.';
      return;
    }

    if (!attemptVersionsMatch(activeAttempt, questions)) {
      startButton.disabled = true;
      startButton.textContent = 'Saved session needs replacement';
      abandonButton.hidden = false;
      resumeStatus.textContent =
        'The saved session uses a different question version. Discard it before starting the current preview.';
      return;
    }

    startButton.disabled = false;
    startButton.textContent = 'Resume saved preview';
    abandonButton.hidden = false;
    const position = Math.min((activeAttempt.currentQuestionIndex ?? 0) + 1, questions.length);
    resumeStatus.textContent = `Saved locally at question ${position} of ${questions.length}.`;
  };

  const checkCurrentAnswer = async () => {
    if (checkedCurrentQuestion) return;

    const question = currentQuestion();
    const selected = selectedChoiceId();
    if (!selected) return;

    checkedCurrentQuestion = true;
    const answer: AttemptAnswer = {
      questionId: question.questionId,
      selectedChoiceId: selected,
      correct: selected === question.correctChoiceId,
      confidence: confidence.value as ConfidenceLevel,
      flagged: flagged.checked
    };

    answers = [...answers.filter((item) => item.questionId !== question.questionId), answer];
    renderFeedback(answer);

    try {
      await persistActiveAttempt();
      setEngineStatus('Answer and session position saved to IndexedDB.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'The current answer could not be stored locally.';
      setEngineStatus(message, 'error');
    }
  };

  const finishAttempt = async () => {
    if (!activeAttempt) {
      throw new Error('No active quiz session is available to complete.');
    }

    const completedAt = new Date().toISOString();
    const score = answers.filter((answer) => answer.correct).length;

    try {
      await persistActiveAttempt({
        status: 'completed',
        completedAt,
        updatedAt: completedAt,
        currentQuestionIndex: questions.length - 1,
        score
      });
      setEngineStatus('Completed attempt saved to IndexedDB in this browser.');
      activeAttempt = null;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Attempt could not be stored locally.';
      setEngineStatus(message, 'error');
      return;
    }

    quizPanel.hidden = true;
    result.hidden = false;
    result.replaceChildren();

    const heading = document.createElement('h2');
    heading.textContent = `Preview score: ${score}/${questions.length}`;
    const explanation = document.createElement('p');
    explanation.textContent =
      'This was a system fixture, not a midwifery examination. It proves question rendering, rationales, browser-only scoring, bookmarks, local storage, and resume behavior.';
    const retry = document.createElement('button');
    retry.className = 'button button-primary';
    retry.type = 'button';
    retry.textContent = 'Start a new preview';
    retry.addEventListener('click', () => {
      void (async () => {
        await createNewAttempt();
        openActiveAttempt();
      })().catch((error: unknown) => {
        setEngineStatus(error instanceof Error ? error.message : 'A new preview could not be started.', 'error');
      });
    });

    result.append(heading, explanation, retry);
    await renderHistory();
  };

  startButton.addEventListener('click', () => {
    void (async () => {
      if (!activeAttempt) {
        await createNewAttempt();
      }
      openActiveAttempt();
      setEngineStatus(activeAttempt?.answers.length ? 'Saved session resumed.' : 'New local session started.');
    })().catch((error: unknown) => {
      setEngineStatus(error instanceof Error ? error.message : 'The local session could not start.', 'error');
    });
  });

  abandonButton.addEventListener('click', () => {
    if (!activeAttempt) return;
    const confirmed = window.confirm(
      'Discard this unfinished session? Checked answers and its saved position will be removed from this browser.'
    );
    if (!confirmed) return;

    const attemptId = activeAttempt.id;
    void deleteQuizAttempt(attemptId)
      .then(() => {
        activeAttempt = null;
        currentIndex = 0;
        answers = [];
        resetSessionClock(0);
        updateStartState();
        setEngineStatus('The unfinished session was discarded.');
      })
      .catch((error: unknown) => {
        setEngineStatus(error instanceof Error ? error.message : 'The saved session could not be discarded.', 'error');
      });
  });

  checkButton.addEventListener('click', () => {
    void checkCurrentAnswer();
  });

  nextButton.addEventListener('click', () => {
    if (!checkedCurrentQuestion) return;
    if (currentIndex === questions.length - 1) {
      void finishAttempt();
      return;
    }

    currentIndex += 1;
    void persistActiveAttempt()
      .then(() => {
        renderQuestion();
        setEngineStatus('Session position saved locally.');
      })
      .catch((error: unknown) => {
        renderQuestion();
        setEngineStatus(error instanceof Error ? error.message : 'Session position could not be saved.', 'error');
      });
  });

  bookmarkButton.addEventListener('click', async () => {
    const questionId = currentQuestion().questionId;
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
    [bookmarkedIds, activeAttempt] = await Promise.all([
      getBookmarkedQuestionIds(),
      getActiveQuizAttempt(QUIZ_ID)
    ]);
    await Promise.all([renderHistory(), renderPersistenceState()]);
    updateStartState();
    setEngineStatus('Local quiz storage is ready.');
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Local quiz storage is unavailable.';
    setEngineStatus(message, 'error');
  }
};
