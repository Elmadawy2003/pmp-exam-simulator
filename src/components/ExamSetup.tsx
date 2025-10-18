'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  BookOpen, 
  Target, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

export interface ExamConfig {
  questionCount: number;
  examType: 'quick' | 'practice' | 'full';
  timeLimit?: number; // in minutes
  difficulty?: 'mixed' | 'easy' | 'medium' | 'hard';
}

interface ExamSetupProps {
  onStartExam: (config: ExamConfig) => void;
  onBack: () => void;
}

export default function ExamSetup({ onStartExam, onBack }: ExamSetupProps) {
  const [selectedConfig, setSelectedConfig] = useState<ExamConfig | null>(null);

  const examOptions = [
    {
      type: 'quick' as const,
      title: 'Quick Test',
      description: 'Quick review of basic concepts',
      questionCount: 10,
      timeLimit: 15,
      difficulty: 'mixed' as const,
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      features: [
        'Quick review',
        'Beginner friendly',
        'Instant feedback'
      ]
    },
    {
      type: 'practice' as const,
      title: 'Practice Test',
      description: 'Intermediate training to assess knowledge',
      questionCount: 30,
      timeLimit: 45,
      difficulty: 'mixed' as const,
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      color: 'bg-green-50 border-green-200 hover:bg-green-100',
      features: [
        'Comprehensive training',
        'Mixed difficulty',
        'Detailed statistics'
      ]
    },
    {
      type: 'full' as const,
      title: 'Full Exam',
      description: 'Complete PMP exam simulation',
      questionCount: 60,
      timeLimit: 90,
      difficulty: 'mixed' as const,
      icon: <Target className="h-8 w-8 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100',
      features: [
        'Real simulation',
        'All knowledge areas',
        'Comprehensive report'
      ]
    }
  ];

  const handleSelectExam = (option: typeof examOptions[0]) => {
    const config: ExamConfig = {
      questionCount: option.questionCount,
      examType: option.type,
      timeLimit: option.timeLimit,
      difficulty: option.difficulty
    };
    setSelectedConfig(config);
  };

  const handleStartExam = () => {
    if (selectedConfig) {
      onStartExam(selectedConfig);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowRight className="h-5 w-5 rotate-180" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Choose Exam Type
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Select the training level that suits you
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              1000+ Questions Available
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Exam Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {examOptions.map((option) => (
              <Card 
                key={option.type}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  selectedConfig?.examType === option.type 
                    ? 'ring-2 ring-blue-500 border-blue-500 shadow-lg' 
                    : option.color
                }`}
                onClick={() => handleSelectExam(option)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{option.title}</CardTitle>
                  <CardDescription className="text-center">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {option.questionCount}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Questions
                      </div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {option.timeLimit}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        Minutes
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {option.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Selection Indicator */}
                  {selectedConfig?.examType === option.type && (
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-center">
                      <div className="text-blue-800 dark:text-blue-200 font-medium text-sm">
                        ✓ Selected
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Selected Exam Summary */}
          {selectedConfig && (
            <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span>Selected Exam Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-blue-600">
                      {selectedConfig.questionCount}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Questions
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-green-600">
                      {selectedConfig.timeLimit}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Minutes
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-purple-600">
                      <TrendingUp className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Mixed Difficulty
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-orange-600">
                      <Users className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Random Questions
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Start Button */}
          <div className="text-center">
            <Button
              onClick={handleStartExam}
              disabled={!selectedConfig}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Target className="mr-2 h-6 w-6" />
              Start Exam Now
            </Button>
            
            {!selectedConfig && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Please select an exam type first
              </p>
            )}
          </div>

          {/* Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Random Questions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Questions are randomly selected from a comprehensive database
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Instant Feedback
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get explanations and clarifications immediately after answering each question
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Detailed Report
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get comprehensive analysis of your performance at the end of the exam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}