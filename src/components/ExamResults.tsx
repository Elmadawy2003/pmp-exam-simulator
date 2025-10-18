'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Clock, 
  Target, 
  RotateCcw, 
  Home, 
  CheckCircle, 
  XCircle,
  BookOpen
} from 'lucide-react';
import { ExamResult } from '@/types/question';

interface ExamResultsProps {
  result: ExamResult;
  onRetakeExam: () => void;
  onBackToHome: () => void;
}

export default function ExamResults({ result, onRetakeExam, onBackToHome }: ExamResultsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number) => {
    if (score >= 80) return 'default';
    if (score >= 60) return 'secondary';
    return 'destructive';
  };

  const getPerformanceMessage = (score: number) => {
    if (score >= 80) return {
      title: 'Excellent Performance!',
      message: 'You\'re well prepared for the PMP exam. Keep up the great work!',
      icon: <Trophy className="h-8 w-8 text-yellow-500" />
    };
    if (score >= 60) return {
      title: 'Good Progress!',
      message: 'You\'re on the right track. Focus on your weak areas for improvement.',
      icon: <Target className="h-8 w-8 text-blue-500" />
    };
    return {
      title: 'Keep Practicing!',
      message: 'More practice needed. Review the knowledge areas and try again.',
      icon: <BookOpen className="h-8 w-8 text-orange-500" />
    };
  };

  const performance = getPerformanceMessage(result.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Exam Results
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your PMP practice exam performance
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" onClick={onBackToHome}>
                <Home className="h-4 w-4 mr-2" />
                Home
              </Button>
              <Button onClick={onRetakeExam} className="bg-blue-600 hover:bg-blue-700">
                <RotateCcw className="h-4 w-4 mr-2" />
                Retake Exam
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Overall Score Card */}
          <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  {performance.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {performance.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {performance.message}
                </p>
                
                <div className="flex items-center justify-center space-x-8 mb-6">
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                      {result.score}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Overall Score
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {result.correctAnswers}/{result.totalQuestions}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Correct Answers
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 dark:text-white">
                      {result.timeSpent}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Minutes
                    </div>
                  </div>
                </div>

                <Badge 
                  variant={getScoreBadgeVariant(result.score)}
                  className="text-lg px-4 py-2"
                >
                  {result.score >= 80 ? 'Excellent' : 
                   result.score >= 60 ? 'Good' : 'Needs Improvement'}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Performance by Category */}
          <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5" />
                <span>Performance by Knowledge Area</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(result.categoryBreakdown).map(([category, stats]) => {
                const percentage = Math.round((stats.correct / stats.total) * 100);
                return (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {stats.correct}/{stats.total}
                        </span>
                        <Badge 
                          variant={percentage >= 80 ? 'default' : percentage >= 60 ? 'secondary' : 'destructive'}
                          className="text-xs"
                        >
                          {percentage}%
                        </Badge>
                      </div>
                    </div>
                    <Progress 
                      value={percentage} 
                      className={`h-2 ${
                        percentage >= 80 ? 'bg-green-100' : 
                        percentage >= 60 ? 'bg-yellow-100' : 'bg-red-100'
                      }`}
                    />
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {result.correctAnswers}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Correct Answers
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 dark:bg-red-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {result.totalQuestions - result.correctAnswers}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Incorrect Answers
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {result.timeSpent}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Minutes Spent
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button 
              variant="outline" 
              onClick={onBackToHome}
              className="px-6 py-3"
            >
              <Home className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <Button 
              onClick={onRetakeExam}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Take Another Practice Test
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('/thank-you', '_blank')}
              className="px-6 py-3 border-green-300 text-green-700 hover:bg-green-50 dark:border-green-600 dark:text-green-400 dark:hover:bg-green-900/20"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Share & Recommend
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}