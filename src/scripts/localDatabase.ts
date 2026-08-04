import type { LessonProgress, QuestionBookmark, QuizAttempt } from '../types/quiz';

const DATABASE_NAME = 'komadrona-review';
const DATABASE_VERSION = 1;

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

export const openKomadronaDatabase = (): Promise<IDBDatabase> => {
  requireIndexedDb();

  if (databasePromise) {
    return databasePromise;
  }

  databasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(ATTEMPTS_STORE)) {
        const attempts = database.createObjectStore(ATTEMPTS_STORE, { keyPath: 'id' });
        attempts.createIndex('completedAt', 'completedAt', { unique: false });
        attempts.createIndex('quizType', 'quizType', { unique: false });
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

export const listQuizAttempts = async (limit = 10): Promise<QuizAttempt[]> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(ATTEMPTS_STORE, 'readonly');
  const attempts = await requestToPromise(
    transaction.objectStore(ATTEMPTS_STORE).getAll() as IDBRequest<QuizAttempt[]>
  );
  await transactionToPromise(transaction);

  return attempts
    .sort((left, right) => right.startedAt.localeCompare(left.startedAt))
    .slice(0, Math.max(0, limit));
};

export const saveLessonProgress = async (progress: LessonProgress): Promise<void> => {
  const database = await openKomadronaDatabase();
  const transaction = database.transaction(LESSON_PROGRESS_STORE, 'readwrite');
  transaction.objectStore(LESSON_PROGRESS_STORE).put(progress);
  await transactionToPromise(transaction);
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
