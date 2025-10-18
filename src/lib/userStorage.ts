// نظام إدارة بيانات المستخدم في localStorage
export interface UserProfile {
  id: string;
  name?: string;
  email?: string;
  createdAt: Date;
  lastActiveAt: Date;
}

export interface UserProgress {
  userId: string;
  answeredQuestions: Set<string>; // معرفات الأسئلة التي تم الإجابة عليها
  correctAnswers: Set<string>; // معرفات الأسئلة التي تم الإجابة عليها بشكل صحيح
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
  timeSpent: number; // بالدقائق
  questionIds: string[];
  categoryBreakdown: { [category: string]: { total: number; correct: number } };
}

export class UserStorageManager {
  private readonly USER_PROFILE_KEY = 'pmp_user_profile';
  private readonly USER_PROGRESS_KEY = 'pmp_user_progress';

  // الحصول على معرف المستخدم الحالي
  getCurrentUserId(): string {
    const profile = this.getUserProfile();
    return profile.id;
  }

  // إنشاء أو الحصول على ملف المستخدم
  getUserProfile(): UserProfile {
    if (typeof window === 'undefined') {
      // في حالة Server-side rendering
      return this.createNewUser();
    }

    const stored = localStorage.getItem(this.USER_PROFILE_KEY);
    if (stored) {
      const profile = JSON.parse(stored);
      profile.createdAt = new Date(profile.createdAt);
      profile.lastActiveAt = new Date(profile.lastActiveAt);
      
      // تحديث آخر نشاط
      profile.lastActiveAt = new Date();
      this.saveUserProfile(profile);
      
      return profile;
    }

    return this.createNewUser();
  }

  // إنشاء مستخدم جديد
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

  // حفظ ملف المستخدم
  saveUserProfile(profile: UserProfile): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.USER_PROFILE_KEY, JSON.stringify(profile));
    }
  }

  // الحصول على تقدم المستخدم
  getUserProgress(): UserProgress {
    if (typeof window === 'undefined') {
      return this.createEmptyProgress();
    }

    const stored = localStorage.getItem(this.USER_PROGRESS_KEY);
    if (stored) {
      const progress = JSON.parse(stored);
      
      // تحويل المصفوفات إلى Set
      progress.answeredQuestions = new Set(progress.answeredQuestions || []);
      progress.correctAnswers = new Set(progress.correctAnswers || []);
      
      // تحويل التواريخ
      progress.examHistory = progress.examHistory.map((exam: ExamRecord) => ({
        ...exam,
        date: new Date(exam.date)
      }));

      // تحويل تواريخ تقدم الفئات
      Object.keys(progress.categoryProgress || {}).forEach(category => {
        if (progress.categoryProgress[category].lastAttempt) {
          progress.categoryProgress[category].lastAttempt = new Date(progress.categoryProgress[category].lastAttempt);
        }
      });

      return progress;
    }

    return this.createEmptyProgress();
  }

  // إنشاء تقدم فارغ للمستخدم الجديد
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

  // تهيئة تقدم المستخدم
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

  // حفظ تقدم المستخدم
  saveUserProgress(progress: UserProgress): void {
    if (typeof window !== 'undefined') {
      // تحويل Set إلى مصفوفة للتخزين
      const progressToSave = {
        ...progress,
        answeredQuestions: Array.from(progress.answeredQuestions),
        correctAnswers: Array.from(progress.correctAnswers)
      };

      localStorage.setItem(this.USER_PROGRESS_KEY, JSON.stringify(progressToSave));
    }
  }

  // إضافة سجل اختبار جديد
  addExamRecord(examRecord: ExamRecord): void {
    const progress = this.getUserProgress();
    
    // إضافة الأسئلة المجاب عليها
    examRecord.questionIds.forEach(questionId => {
      progress.answeredQuestions.add(questionId);
    });

    // إضافة سجل الاختبار
    progress.examHistory.push(examRecord);
    progress.totalExamsCompleted++;

    // حساب المتوسط الجديد
    const totalScore = progress.examHistory.reduce((sum, exam) => sum + exam.score, 0);
    progress.averageScore = Math.round(totalScore / progress.examHistory.length);

    // تحديث تقدم الفئات
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

  // إضافة إجابة صحيحة
  addCorrectAnswer(questionId: string): void {
    const progress = this.getUserProgress();
    progress.correctAnswers.add(questionId);
    this.saveUserProgress(progress);
  }

  // التحقق من إجابة سؤال سابقاً
  hasAnsweredQuestion(questionId: string): boolean {
    const progress = this.getUserProgress();
    return progress.answeredQuestions.has(questionId);
  }

  // الحصول على الأسئلة غير المجاب عليها
  getUnansweredQuestionIds(allQuestionIds: string[]): string[] {
    const progress = this.getUserProgress();
    return allQuestionIds.filter(id => !progress.answeredQuestions.has(id));
  }

  // الحصول على الأسئلة المجاب عليها
  getAnsweredQuestions(): Set<string> {
    const progress = this.getUserProgress();
    return progress.answeredQuestions;
  }

  // تسجيل إجابة سؤال
  recordAnswer(questionId: string, isCorrect: boolean): void {
    const progress = this.getUserProgress();
    progress.answeredQuestions.add(questionId);
    if (isCorrect) {
      progress.correctAnswers.add(questionId);
    }
    this.saveUserProgress(progress);
  }

  // إعادة تعيين الأسئلة المجاب عليها
  resetAnsweredQuestions(): void {
    const progress = this.getUserProgress();
    progress.answeredQuestions.clear();
    progress.correctAnswers.clear();
    this.saveUserProgress(progress);
  }

  // حفظ سجل الاختبار
  saveExamRecord(examRecord: ExamRecord): void {
    this.addExamRecord(examRecord);
  }

  // إعادة تعيين تقدم المستخدم
  resetUserProgress(): void {
    const userProfile = this.getUserProfile();
    this.initializeUserProgress(userProfile.id);
  }

  // حذف جميع البيانات
  clearAllData(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.USER_PROFILE_KEY);
      localStorage.removeItem(this.USER_PROGRESS_KEY);
    }
  }

  // توليد معرف مستخدم فريد
  private generateUserId(): string {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  // الحصول على إحصائيات المستخدم
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

// إنشاء instance واحد للاستخدام في التطبيق
export const userStorage = new UserStorageManager();