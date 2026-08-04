import type {
  LessonProgress,
  LocalLearningSummary,
  QuestionBookmark,
  QuizAttempt
} from '../types/quiz';

const DATABASE_NAME = 'komadrona-review';
const DATABASE_VERSION = 2;

const ATTEMPTS_STORE = 'attempts';
const BOOKMARKS_STORE = 'bookmarks';
const LESSON_PROGRESS_STORE = 'lessonProgress';
const METADATA_STORE = 'metadata';

let databasePromise: Promise<IDBDatabase> | null = null;

const requireIndexedDb = () => {
  if (typeof window === 'undefined' || !('indexedDB' in window)) {
    throw new Error('IndexedDB is not available in this browser context.');
  }
};

const requestToPromise = <T>(request: IDBRequest<T>): Promise<T> =>
  new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error('IndexedDB request failed.'));
  });

const transactionToPromise = (transaction: IDBTransaction): Promise<void> =>
  new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error ?? new Error('IndexedDB transaction failed.'));
    transaction.onabort = () => reject(transaction.error ?? new Error('IndexedDB transaction was aborted.'));
  });

const isCompletedAttempt = (attempt: QuizAttempt) =>
  attempt.status === 'completed' || attempt.completedAt !== null;

const isActiveAttempt = (attempt: QuizAttempt) =>
  !isCompletedAttempt(attempt) && attempt.status !== 'abandoned' && !attempt.abandonedAt;

const attemptUpdatedAt = (attempt: QuizAttempt) =>
  attempt.updatedAt ?? attempt.completedAt ?? attempt.startedAt;

export const openKomadronaDatabase = (): Promise<IDBDatabase> => {
  requireIndexedDb();

  if (databasePromise) {
    return databasePromise;
  }

  databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;
      const transaction = request.transaction;
      if (!transaction) {
        throw new Error('Komadrona local-data upgrade transaction is unavailable.');
      }

      const attempts = database.objectStoreNames.contains(ATTEMPTS_STORE)
        ? transaction.objectStore(ATTEMPTS_STORE)
        : database.createObjectStore(ATTEMPTS_STORE, { keyPath: 'id' });

      if (!attempts.indexNames.contains('completedAt')) {
        attempts.createIndex('completedAt', 'completedAt', { unique: false });
      }
      if (!attempts.indexNames.contains('quizType')) {
        attempts.createIndex('quizType', 'quizType', { unique: false });
      }
      if (!attempts.indexNames.contains('quizId')) {
        attempts.createIndex('quizId', 'quizId', { unique: false });
      }
      if (!attempts.indexNames.contains('status')) {
        attempts.createIndex('status', 'status', { unique: false });
      }
      if (!attempts.indexNames.contains('updatedAt')) {
        attempts.createIndex('updatedAt', 'updatedAt', { unique: false });
      }

      if (!database.objectStoreNames.contains(BOOKMARKS_STORE)) {
        database.createObjectStore(BOOKMARKS_STORE, { keyPath: 'questionId' });
      }

      if (!database.objectStoreNames.contains(LESSON_PROGRESS_STORE)) {
        database.createObjectStore(LESSON_PROGRESS_STORE, { keyPath: 'lessonId' });
      }

      if (!database.objectStoreNames.contains(METADATA_STORE)) {
        database.createObjectStore(METADATA_STORE, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => {
      const database = request.result;
      database.onversionchange = () => database.close();
      resolve(database);
    };

    request.onerror = () => {
      databasePromise = null;
      reject(request.error ?? new Error('Unable to open Komadrona local data.'));
    };

    request.onblocked = () => {
      databasePromise = null;
      reject(new Error('Komadrona local data is blocked by another open tab.'));
    };
  });

  return databasePromise;
};

export const saveQuizAttempt = async (attempt: QuizAttempt): Promise<void> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(ATTEMPTS_STORE, 'readwrite');
  transaction.objectStore(ATTEMPTS_STORE).put(attempt);
  await transactionToPromise(transaction);
};

export const deleteQuizAttempt = async (attemptId: string): Promise<void> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(ATTEMPTS_STORE, 'readwrite');
  transaction.objectStore(ATTEMPTS_STORE).delete(attemptId);
  await transactionToPromise(transaction);
};

export const listQuizAttempts = async (
  limit = 10,
  includeIncomplete = false
): Promise<QuizAttempt[]> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(ATTEMPTS_STORE, 'readonly');
  const attempts = await requestToPromise(
    transaction.objectStore(ATTEMPTS_STORE).getAll() as IDBRequest<QuizAttempt[]>
  );
  await transactionToPromise(transaction);

  return attempts
    .filter((attempt) => includeIncomplete || isCompletedAttempt(attempt))
    .sort((left, right) => attemptUpdatedAt(right).localeCompare(attemptUpdatedAt(left)))
    .slice(0, Math.max(0, limit));
};

export const getActiveQuizAttempt = async (quizId?: string): Promise<QuizAttempt | null> => {
  const attempts = await listQuizAttempts(Number.MAX_SAFE_INTEGER, true);
  return (
    attempts.find((attempt) => isActiveAttempt(attempt) && (!quizId || attempt.quizId === quizId)) ?? null
  );
};

export const saveLessonProgress = async (progress: LessonProgress): Promise<void> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(LESSON_PROGRESS_STORE, 'readwrite');
  transaction.objectStore(LESSON_PROGRESS_STORE).put(progress);
  await transactionToPromise(transaction);
};

export const listLessonProgress = async (): Promise<LessonProgress[]> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(LESSON_PROGRESS_STORE, 'readonly');
  const progress = await requestToPromise(
    transaction.objectStore(LESSON_PROGRESS_STORE).getAll() as IDBRequest<LessonProgress[]>
  );
  await transactionToPromise(transaction);
  return progress.sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
};

export const getBookmarkedQuestionIds = async (): Promise<Set<string>> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(BOOKMARKS_STORE, 'readonly');
  const bookmarks = await requestToPromise(
    transaction.objectStore(BOOKMARKS_STORE).getAll() as IDBRequest<QuestionBookmark[]>
  );
  await transactionToPromise(transaction);
  return new Set(bookmarks.map((bookmark) => bookmark.questionId));
};

export const setQuestionBookmark = async (
  questionId: string,
  bookmarked: boolean
): Promise<void> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(BOOKMARKS_STORE, 'readwrite');
  const store = transaction.objectStore(BOOKMARKS_STORE);

  if (bookmarked) {
    const bookmark: QuestionBookmark = {
      questionId,
      createdAt: new Date().toISOString()
    };
    store.put(bookmark);
  } else {
    store.delete(questionId);
  }

  await transactionToPromise(transaction);
};

export const getLocalLearningSummary = async (): Promise<LocalLearningSummary> => {
  const [attempts, bookmarks, lessonProgress] = await Promise.all([
    listQuizAttempts(Number.MAX_SAFE_INTEGER, true),
    getBookmarkedQuestionIds(),
    listLessonProgress()
  ]);

  return {
    activeAttempt: attempts.find(isActiveAttempt) ?? null,
    completedAttemptCount: attempts.filter(isCompletedAttempt).length,
    bookmarkCount: bookmarks.size,
    startedLessonCount: lessonProgress.filter((item) => item.status !== 'not-started').length,
    completedLessonCount: lessonProgress.filter((item) => item.status === 'completed').length
  };
};

export const getStoragePersistenceState = async (): Promise<'granted' | 'available' | 'unsupported'> => {
  if (!navigator.storage?.persisted) {
    return 'unsupported';
  }
  return (await navigator.storage.persisted()) ? 'granted' : 'available';
};

export const requestPersistentStorage = async (): Promise<boolean> => {
  if (!navigator.storage?.persist) {
    return false;
  }
  return navigator.storage.persist();
};

export const clearKomadronaLearningData = async (): Promise<void> => {
  requireIndexedDb();

  if (databasePromise) {
    const database = await databasePromise;
    database.close();
    databasePromise = null;
  }

  await new Promise<void>((resolve, reject) => {
    const request = indexedDB.deleteDatabase(DATABASE_NAME);
    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error ?? new Error('Unable to delete Komadrona local data.'));
    request.onblocked = () => reject(new Error('Close other Komadrona tabs before deleting local data.'));
  });
};
