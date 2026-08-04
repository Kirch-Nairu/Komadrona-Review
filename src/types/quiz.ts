export type QuizType = 'topic' | 'domain' | 'mixed' | 'weak-area' | 'system-preview';
export type ConfidenceLevel = 'low' | 'medium' | 'high';
export type QuizAttemptStatus = 'in-progress' | 'completed' | 'abandoned';

export interface RuntimeChoice {
  id: string;
  text: string;
}

export interface RuntimeQuestion {
  questionId: string;
  version: number;
  stem: string;
  choices: RuntimeChoice[];
  correctChoiceId: string;
  rationale: string;
  distractorRationales: Array<{
    choiceId: string;
    rationale: string;
  }>;
  difficulty: 'basic' | 'intermediate' | 'advanced';
  cognitiveLevel: 'recall' | 'understanding' | 'application' | 'analysis';
  sources: Array<{
    referenceId: string;
    locator: string;
  }>;
}

export interface AttemptAnswer {
  questionId: string;
  selectedChoiceId: string | null;
  correct: boolean | null;
  confidence: ConfidenceLevel;
  flagged: boolean;
}

export interface QuizAttempt {
  id: string;
  dataVersion: 1 | 2;
  quizId: string;
  quizType: QuizType;
  status?: QuizAttemptStatus;
  startedAt: string;
  updatedAt?: string;
  completedAt: string | null;
  abandonedAt?: string | null;
  currentQuestionIndex?: number;
  questionVersions: Array<{
    questionId: string;
    version: number;
  }>;
  answers: AttemptAnswer[];
  score: number | null;
  totalQuestions: number;
  elapsedSeconds: number;
}

export interface LessonProgress {
  lessonId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  firstOpenedAt: string | null;
  completedAt: string | null;
  updatedAt: string;
}

export interface QuestionBookmark {
  questionId: string;
  createdAt: string;
}

export interface LocalLearningSummary {
  activeAttempt: QuizAttempt | null;
  completedAttemptCount: number;
  bookmarkCount: number;
  startedLessonCount: number;
  completedLessonCount: number;
}
