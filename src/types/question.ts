export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct answer (0-3)
  explanation: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ExamSession {
  questions: Question[];
  currentQuestionIndex: number;
  answers: (number | null)[];
  startTime: Date;
  endTime?: Date;
  score?: number;
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number;
  timeSpent: number; // in minutes
  categoryBreakdown: {
    [category: string]: {
      total: number;
      correct: number;
    };
  };
}