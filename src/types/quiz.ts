export type QuizType = 'topic' | 'domain' | 'mixed' | 'weak-area' | 'system-preview';
export type ConfidenceLevel = 'low' | 'medium' | 'high';

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
  dataVersion: 1;
  quizId: string;
  quizType: QuizType;
  startedAt: string;
  completedAt: string | null;
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
