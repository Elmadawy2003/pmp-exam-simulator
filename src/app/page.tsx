'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Award, Users, CheckCircle, Target, BarChart3 } from 'lucide-react';
import ExamComponent from '@/components/ExamComponent';
import ExamSetup, { ExamConfig } from '@/components/ExamSetup';
import UserProfile from '@/components/UserProfile';

export default function Home() {
  const [currentView, setCurrentView] = useState<'home' | 'setup' | 'exam' | 'stats'>('home');
  const [examConfig, setExamConfig] = useState<ExamConfig | null>(null);

  const handleStartExamSetup = () => {
    setCurrentView('setup');
  };

  const handleStartExam = (config: ExamConfig) => {
    setExamConfig(config);
    setCurrentView('exam');
  };

  const handleShowStats = () => {
    setCurrentView('stats');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setExamConfig(null);
  };

  if (currentView === 'exam' && examConfig) {
    return <ExamComponent onExamEnd={handleBackToHome} examConfig={examConfig} />;
  }

  if (currentView === 'setup') {
    return <ExamSetup onStartExam={handleStartExam} onBack={handleBackToHome} />;
  }

  if (currentView === 'stats') {
    return <UserProfile onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  PMP Exam Simulator
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Free Practice Platform
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                onClick={handleShowStats}
                className="flex items-center space-x-2"
              >
                <BarChart3 className="h-4 w-4" />
                <span>إحصائياتي</span>
              </Button>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                مجاني وبدون تسجيل
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              أتقن شهادة PMP الخاصة بك
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              تدرب مع أسئلة امتحان PMP الحقيقية واحصل على تغذية راجعة فورية.
              لا يتطلب تسجيل - ابدأ التدريب فوراً!
            </p>
            <Button 
              onClick={handleStartExamSetup}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              <Target className="mr-2 h-5 w-5" />
              ابدأ الاختبار
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">240+ أسئلة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  بنك أسئلة شامل يغطي جميع مجالات معرفة PMP (40 أصلية + 199 مستخرجة)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Real-time Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Get instant explanations and learn from every question
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Monitor your performance and identify areas for improvement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg">No Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Start practicing immediately without any signup process
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-red-100 dark:bg-red-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <CardTitle className="text-lg">Mobile Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Practice anywhere, anytime on any device
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="bg-indigo-100 dark:bg-indigo-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-lg">PMI ECO Aligned</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Questions aligned with the latest PMI Exam Content Outline
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your PMP Journey?</h3>
                <p className="text-blue-100 mb-6 text-lg">
                  Join thousands of professionals who have used our platform to prepare for their PMP certification
                </p>
                <Button 
                  onClick={handleStartExamSetup}
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  ابدأ الاختبار الآن
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              © 2024 PMP Exam Simulator. Free practice platform for PMP certification preparation.
            </p>
            <p className="text-sm">
              This platform is not affiliated with PMI. PMP is a registered trademark of Project Management Institute, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
