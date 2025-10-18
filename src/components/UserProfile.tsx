'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  User, 
  Trophy, 
  Target, 
  Clock, 
  BarChart3, 
  RefreshCw,
  Settings,
  TrendingUp
} from 'lucide-react';
import { userStorage, UserProfile as UserProfileType, CategoryProgress } from '@/lib/userStorage';

interface UserStats {
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  overallAccuracy: number;
  totalExamsCompleted: number;
  averageScore: number;
  categoryStats: { [category: string]: CategoryProgress };
}

interface UserProfileProps {
  onBack: () => void;
}

export default function UserProfile({ onBack }: UserProfileProps) {
  const [userProfile, setUserProfile] = useState<UserProfileType | null>(null);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = () => {
    const profile = userStorage.getUserProfile();
    const stats = userStorage.getUserStats();
    setUserProfile(profile);
    setUserStats(stats);
  };

  const handleResetProgress = () => {
    userStorage.resetUserProgress();
    loadUserData();
    setShowResetConfirm(false);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getDaysActive = () => {
    if (!userProfile) return 0;
    const diffTime = Math.abs(new Date().getTime() - userProfile.createdAt.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  if (!userProfile || !userStats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">جاري تحميل بيانات المستخدم...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <User className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  ملف المستخدم
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  إحصائيات وتقدم الأداء
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center space-x-2"
              >
                <RefreshCw className="h-4 w-4" />
                <span>إعادة تعيين</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* User Info Card */}
          <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <User className="h-6 w-6 text-blue-600" />
                <span>معلومات المستخدم</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{getDaysActive()}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">أيام النشاط</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{userStats.totalExamsCompleted}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">اختبارات مكتملة</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{userStats.averageScore}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">متوسط النتائج</div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">تاريخ الإنشاء:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {formatDate(userProfile.createdAt)}
                  </span>
                </div>
                <div>
                  <span className="font-medium">آخر نشاط:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {formatDate(userProfile.lastActiveAt)}
                  </span>
                </div>
                <div>
                  <span className="font-medium">معرف المستخدم:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400 font-mono text-xs">
                    {userProfile.id}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Overall Statistics */}
          <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-green-600" />
                <span>الإحصائيات العامة</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{userStats.totalQuestionsAnswered}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">أسئلة مجاب عليها</div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{userStats.totalCorrectAnswers}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">إجابات صحيحة</div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{userStats.overallAccuracy}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">معدل الدقة</div>
                </div>
                
                <div className="text-center p-4 border rounded-lg">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{userStats.totalExamsCompleted}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">اختبارات مكتملة</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Progress */}
          <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Settings className="h-6 w-6 text-orange-600" />
                <span>التقدم حسب الفئة</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {Object.keys(userStats.categoryStats).length > 0 ? (
                <div className="space-y-4">
                  {Object.entries(userStats.categoryStats).map(([category, stats]: [string, CategoryProgress]) => (
                    <div key={category} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{category}</h3>
                        <Badge variant={stats.averageScore >= 70 ? 'default' : 'secondary'}>
                          {stats.averageScore}%
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <span>{stats.correctAnswers} من {stats.totalQuestions} صحيح</span>
                        <span>آخر محاولة: {formatDate(stats.lastAttempt)}</span>
                      </div>
                      <Progress value={stats.averageScore} className="h-2" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    لم تكمل أي اختبارات بعد. ابدأ اختبارك الأول لرؤية التقدم هنا!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Reset Confirmation */}
          {showResetConfirm && (
            <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
              <AlertDescription>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-red-800 dark:text-red-200">
                      هل أنت متأكد من إعادة تعيين جميع البيانات؟
                    </p>
                    <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                      سيتم حذف جميع الإحصائيات والتقدم نهائياً.
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleResetProgress}
                    >
                      تأكيد
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowResetConfirm(false)}
                    >
                      إلغاء
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </main>
    </div>
  );
}