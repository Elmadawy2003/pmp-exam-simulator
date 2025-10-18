// User data management system in localStorage
export interface UserProfile {
  id: string;
  name?: string;
  email?: string;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface UserProgress {
  userId: string;
  answeredQuestions: Set<string>; // IDs of answered questions
  correctAnswers: Set<string>; // IDs of correctly answered questions
  examHistory: ExamRecord[];
  totalExamsCompleted: number;
  averageScore: number;
  categoryProgress: { [category: string]: CategoryProgress };
}

export interface CategoryProgress {
  totalQuestions: number;
  correctAnswers: number;
  averageScore: number;
  lastAttempt: Date;
}

export interface ExamRecord {
  id: string;
  date: Date;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // in minutes
  questionIds: string[];
  categoryBreakdown: { [category: string]: { total: number; correct: number } };
}

export class UserStorageManager {
  private readonly USER_PROFILE_KEY = 'pmp_user_profile';
  private readonly USER_PROGRESS_KEY = 'pmp_user_progress';

  // Get current user ID
  getCurrentUserId(): string {
    const profile = this.getUserProfile();
    return profile.id;
  }

  // Create or get user profile
  getUserProfile(): UserProfile {
    if (typeof window === 'undefined') {
      // In case of Server-side rendering
      return this.createNewUser();
    }

    const stored = localStorage.getItem(this.USER_PROFILE_KEY);
    if (stored) {
      const profile = JSON.parse(stored);
      profile.createdAt = new Date(profile.createdAt);
      profile.lastActiveAt = new Date(profile.lastActiveAt);
      
      // Update last activity
      profile.lastActiveAt = new Date();
      this.saveUserProfile(profile);
      
      return profile;
    }

    return this.createNewUser();
  }

  // Create new user
  private createNewUser(): UserProfile {
    const newUser: UserProfile = {
      id: this.generateUserId(),
      createdAt: new Date(),
      lastActiveAt: new Date()
    };

    this.saveUserProfile(newUser);
    this.initializeUserProgress(newUser.id);
    
    return newUser;
  }

  // Save user profile
  saveUserProfile(profile: UserProfile): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.USER_PROFILE_KEY, JSON.stringify(profile));
    }
  }

  // Get user progress
  getUserProgress(): UserProgress {
    if (typeof window === 'undefined') {
      return this.createEmptyProgress();
    }

    const stored = localStorage.getItem(this.USER_PROGRESS_KEY);
    if (stored) {
      const progress = JSON.parse(stored);
      
      // Convert arrays to Set
      progress.answeredQuestions = new Set(progress.answeredQuestions || []);
      progress.correctAnswers = new Set(progress.correctAnswers || []);
      
      // Convert dates
      progress.examHistory = progress.examHistory.map((exam: ExamRecord) => ({
        ...exam,
        date: new Date(exam.date)
      }));

      // Convert category progress dates
      Object.keys(progress.categoryProgress || {}).forEach(category => {
        if (progress.categoryProgress[category].lastAttempt) {
          progress.categoryProgress[category].lastAttempt = new Date(progress.categoryProgress[category].lastAttempt);
        }
      });

      return progress;
    }

    return this.createEmptyProgress();
  }

  // Create empty progress for new user
  private createEmptyProgress(): UserProgress {
    const userProfile = this.getUserProfile();
    return {
      userId: userProfile.id,
      answeredQuestions: new Set<string>(),
      correctAnswers: new Set<string>(),
      examHistory: [],
      totalExamsCompleted: 0,
      averageScore: 0,
      categoryProgress: {}
    };
  }

  // Initialize user progress
  private initializeUserProgress(userId: string): void {
    const progress: UserProgress = {
      userId,
      answeredQuestions: new Set<string>(),
      correctAnswers: new Set<string>(),
      examHistory: [],
      totalExamsCompleted: 0,
      averageScore: 0,
      categoryProgress: {}
    };

    this.saveUserProgress(progress);
  }

  // Save user progress
  saveUserProgress(progress: UserProgress): void {
    if (typeof window !== 'undefined') {
      // Convert Set to array for storage
      const progressToSave = {
        ...progress,
        answeredQuestions: Array.from(progress.answeredQuestions),
        correctAnswers: Array.from(progress.correctAnswers)
      };

      localStorage.setItem(this.USER_PROGRESS_KEY, JSON.stringify(progressToSave));
    }
  }

  // Add new exam record
  addExamRecord(examRecord: ExamRecord): void {
    const progress = this.getUserProgress();
    
    // Add answered questions
    examRecord.questionIds.forEach(questionId => {
      progress.answeredQuestions.add(questionId);
    });

    // Add exam record
    progress.examHistory.push(examRecord);
    progress.totalExamsCompleted++;

    // Calculate new average
    const totalScore = progress.examHistory.reduce((sum, exam) => sum + exam.score, 0);
    progress.averageScore = Math.round(totalScore / progress.examHistory.length);

    // Update category progress
    Object.keys(examRecord.categoryBreakdown).forEach(category => {
      const categoryData = examRecord.categoryBreakdown[category];
      
      if (!progress.categoryProgress[category]) {
        progress.categoryProgress[category] = {
          totalQuestions: 0,
          correctAnswers: 0,
          averageScore: 0,
          lastAttempt: new Date()
        };
      }

      const categoryProgress = progress.categoryProgress[category];
      categoryProgress.totalQuestions += categoryData.total;
      categoryProgress.correctAnswers += categoryData.correct;
      categoryProgress.averageScore = Math.round((categoryProgress.correctAnswers / categoryProgress.totalQuestions) * 100);
      categoryProgress.lastAttempt = new Date();
    });

    this.saveUserProgress(progress);
  }

  // Add correct answer
  addCorrectAnswer(questionId: string): void {
    const progress = this.getUserProgress();
    progress.correctAnswers.add(questionId);
    this.saveUserProgress(progress);
  }

  // Check if question was answered before
  hasAnsweredQuestion(questionId: string): boolean {
    const progress = this.getUserProgress();
    return progress.answeredQuestions.has(questionId);
  }

  // Get unanswered questions
  getUnansweredQuestionIds(allQuestionIds: string[]): string[] {
    const progress = this.getUserProgress();
    return allQuestionIds.filter(id => !progress.answeredQuestions.has(id));
  }

  // Get answered questions
  getAnsweredQuestions(): Set<string> {
    const progress = this.getUserProgress();
    return progress.answeredQuestions;
  }

  // Record question answer
  recordAnswer(questionId: string, isCorrect: boolean): void {
    const progress = this.getUserProgress();
    progress.answeredQuestions.add(questionId);
    if (isCorrect) {
      progress.correctAnswers.add(questionId);
    }
    this.saveUserProgress(progress);
  }

  // Reset answered questions
  resetAnsweredQuestions(): void {
    const progress = this.getUserProgress();
    progress.answeredQuestions.clear();
    progress.correctAnswers.clear();
    this.saveUserProgress(progress);
  }

  // Save exam record
  saveExamRecord(examRecord: ExamRecord): void {
    this.addExamRecord(examRecord);
  }

  // Reset user progress
  resetUserProgress(): void {
    const userProfile = this.getUserProfile();
    this.initializeUserProgress(userProfile.id);
  }

  // Clear all data
  clearAllData(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.USER_PROFILE_KEY);
      localStorage.removeItem(this.USER_PROGRESS_KEY);
    }
  }

  // Generate unique user ID
  private generateUserId(): string {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // Get user statistics
  getUserStats(): {
    totalQuestionsAnswered: number;
    totalCorrectAnswers: number;
    overallAccuracy: number;
    totalExamsCompleted: number;
    averageScore: number;
    categoryStats: { [category: string]: CategoryProgress };
  } {
    const progress = this.getUserProgress();
    
    return {
      totalQuestionsAnswered: progress.answeredQuestions.size,
      totalCorrectAnswers: progress.correctAnswers.size,
      overallAccuracy: progress.answeredQuestions.size > 0 
        ? Math.round((progress.correctAnswers.size / progress.answeredQuestions.size) * 100)
        : 0,
      totalExamsCompleted: progress.totalExamsCompleted,
      averageScore: progress.averageScore,
      categoryStats: progress.categoryProgress
    };
  }
}

// Create a single instance for use in the application
export const userStorage = new UserStorageManager();