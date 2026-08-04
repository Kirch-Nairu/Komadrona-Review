import { getLocalLearningSummary, listQuizAttempts } from './localDatabase';
import type { QuizAttempt } from '../types/quiz';

const requireElement = <T extends HTMLElement>(id: string): T => {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Learner workflow could not find #${id}.`);
  return element as T;
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(value));

const quizLabel = (attempt: QuizAttempt) =>
  attempt.quizType === 'system-preview' ? 'Engine preview' : attempt.quizId;

const renderAttemptList = (container: HTMLElement, attempts: QuizAttempt[]) => {
  container.replaceChildren();

  if (attempts.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'small-print';
    empty.textContent = 'No completed practice attempts are stored in this browser yet.';
    container.append(empty);
    return;
  }

  const list = document.createElement('ol');
  list.className = 'learner-record-list';

  for (const attempt of attempts) {
    const item = document.createElement('li');
    const main = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = quizLabel(attempt);
    const meta = document.createElement('span');
    meta.textContent = `${formatDate(attempt.completedAt ?? attempt.startedAt)} · ${attempt.elapsedSeconds}s`;
    main.append(title, meta);

    const score = document.createElement('strong');
    score.textContent = `${attempt.score ?? 0}/${attempt.totalQuestions}`;
    item.append(main, score);
    list.append(item);
  }

  container.append(list);
};

const renderActiveAttempt = (container: HTMLElement, attempt: QuizAttempt | null) => {
  container.replaceChildren();

  if (!attempt) {
    const heading = document.createElement('strong');
    heading.textContent = 'No unfinished practice session';
    const detail = document.createElement('p');
    detail.textContent = 'Start a practice set and Komadrona will save checked answers and your latest position.';
    const action = document.createElement('a');
    action.className = 'button button-primary';
    action.href = '/practice';
    action.textContent = 'Start practice';
    container.append(heading, detail, action);
    return;
  }

  const position = Math.min((attempt.currentQuestionIndex ?? 0) + 1, attempt.totalQuestions);
  const heading = document.createElement('strong');
  heading.textContent = 'Unfinished practice session';
  const detail = document.createElement('p');
  detail.textContent = `${quizLabel(attempt)} · question ${position} of ${attempt.totalQuestions} · ${attempt.answers.length} checked answer${attempt.answers.length === 1 ? '' : 's'}`;
  const updated = document.createElement('p');
  updated.className = 'small-print';
  updated.textContent = `Last saved ${formatDate(attempt.updatedAt ?? attempt.startedAt)}.`;
  const action = document.createElement('a');
  action.className = 'button button-primary';
  action.href = '/practice';
  action.textContent = 'Resume practice';
  container.append(heading, detail, updated, action);
};

export const initLearnerDashboard = async () => {
  const activeContainer = requireElement<HTMLElement>('dashboard-active-session');
  const completedCount = requireElement<HTMLElement>('dashboard-completed-attempts');
  const bookmarkCount = requireElement<HTMLElement>('dashboard-bookmarks');
  const lessonCount = requireElement<HTMLElement>('dashboard-lessons');
  const recentContainer = requireElement<HTMLElement>('dashboard-recent-attempts');
  const status = requireElement<HTMLElement>('dashboard-local-status');

  try {
    const [summary, recentAttempts] = await Promise.all([
      getLocalLearningSummary(),
      listQuizAttempts(3)
    ]);

    renderActiveAttempt(activeContainer, summary.activeAttempt);
    completedCount.textContent = String(summary.completedAttemptCount);
    bookmarkCount.textContent = String(summary.bookmarkCount);
    lessonCount.textContent = `${summary.completedLessonCount}/${summary.startedLessonCount}`;
    renderAttemptList(recentContainer, recentAttempts);
    status.textContent = 'Local learner records loaded from this browser.';
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Local learner records could not be loaded.';
    status.textContent = message;
    status.dataset.tone = 'error';
  }
};

export const initProgressPage = async () => {
  const activeContainer = requireElement<HTMLElement>('progress-active-session');
  const completedCount = requireElement<HTMLElement>('progress-completed-attempts');
  const bookmarkCount = requireElement<HTMLElement>('progress-bookmarks');
  const startedLessons = requireElement<HTMLElement>('progress-started-lessons');
  const completedLessons = requireElement<HTMLElement>('progress-completed-lessons');
  const history = requireElement<HTMLElement>('progress-attempt-history');
  const status = requireElement<HTMLElement>('progress-local-status');

  try {
    const [summary, attempts] = await Promise.all([
      getLocalLearningSummary(),
      listQuizAttempts(20)
    ]);

    renderActiveAttempt(activeContainer, summary.activeAttempt);
    completedCount.textContent = String(summary.completedAttemptCount);
    bookmarkCount.textContent = String(summary.bookmarkCount);
    startedLessons.textContent = String(summary.startedLessonCount);
    completedLessons.textContent = String(summary.completedLessonCount);
    renderAttemptList(history, attempts);
    status.textContent = 'Progress shown here exists only in this browser profile.';
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Local progress could not be loaded.';
    status.textContent = message;
    status.dataset.tone = 'error';
  }
};
