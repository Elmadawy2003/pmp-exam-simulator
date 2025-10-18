'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Clock, CheckCircle, XCircle, ArrowLeft, ArrowRight, Home } from 'lucide-react';
import { Question, ExamSession, ExamResult } from '@/types/question';
import { getRandomQuestions, getBalancedQuestions } from '@/data/allQuestions';
import { UserStorageManager } from '@/lib/userStorage';
import ExamResults from './ExamResults';
import { ExamConfig } from './ExamSetup';

interface ExamComponentProps {
  onExamEnd: () => void;
  examConfig: ExamConfig;
}

export default function ExamComponent({ onExamEnd, examConfig }: ExamComponentProps) {
  // Create or get user ID
  const [userId] = useState(() => {
    const userStorage = new UserStorageManager();
    return userStorage.getCurrentUserId();
  });

  // Generate questions based on exam settings while avoiding repetition
  const generateQuestions = (): Question[] => {
    if (examConfig.difficulty === 'mixed') {
      return getBalancedQuestions(examConfig.questionCount, userId);
    } else {
      return getRandomQuestions(examConfig.questionCount, userId);
    }
  };

  const [examSession, setExamSession] = useState<ExamSession>(() => {
    const questions = generateQuestions();
    return {
      questions,
      currentQuestionIndex: 0,
      answers: new Array(questions.length).fill(null),
      startTime: new Date(),
    };
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [examCompleted, setExamCompleted] = useState(false);
  const [examResult, setExamResult] = useState<ExamResult | null>(null);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((new Date().getTime() - examSession.startTime.getTime()) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [examSession.startTime]);

  const currentQuestion = examSession.questions[examSession.currentQuestionIndex];
  const progress = ((examSession.currentQuestionIndex + 1) / examSession.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    
    // Update answers array
    const newAnswers = [...examSession.answers];
    newAnswers[examSession.currentQuestionIndex] = answerIndex;
    setExamSession(prev => ({ ...prev, answers: newAnswers }));
    
    // Show explanation after a short delay
    setTimeout(() => {
      setShowExplanation(true);
    }, 500);
  };

  const handleNextQuestion = () => {
    if (examSession.currentQuestionIndex < examSession.questions.length - 1) {
      setExamSession(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setSelectedAnswer(examSession.answers[examSession.currentQuestionIndex + 1]);
      setShowExplanation(examSession.answers[examSession.currentQuestionIndex + 1] !== null);
    } else {
      // Exam completed
      completeExam();
    }
  };

  const handlePreviousQuestion = () => {
    if (examSession.currentQuestionIndex > 0) {
      setExamSession(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
      setSelectedAnswer(examSession.answers[examSession.currentQuestionIndex - 1]);
      setShowExplanation(examSession.answers[examSession.currentQuestionIndex - 1] !== null);
    }
  };

  const completeExam = () => {
    const endTime = new Date();
    const timeSpentMinutes = Math.floor((endTime.getTime() - examSession.startTime.getTime()) / 60000);
    
    let correctAnswers = 0;
    const categoryBreakdown: { [category: string]: { total: number; correct: number } } = {};
    const userStorage = new UserStorageManager();

    examSession.questions.forEach((question, index) => {
      const userAnswer = examSession.answers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      
      if (isCorrect) correctAnswers++;
      
      // Record answer in tracking system
      userStorage.recordAnswer(question.id, isCorrect);
      
      if (!categoryBreakdown[question.category]) {
        categoryBreakdown[question.category] = { total: 0, correct: 0 };
      }
      categoryBreakdown[question.category].total++;
      if (isCorrect) categoryBreakdown[question.category].correct++;
    });

    const result: ExamResult = {
      totalQuestions: examSession.questions.length,
      correctAnswers,
      score: Math.round((correctAnswers / examSession.questions.length) * 100),
      timeSpent: timeSpentMinutes,
      categoryBreakdown
    };

    // Save exam result
    userStorage.saveExamRecord({
      id: `exam_${Date.now()}`,
      date: new Date(),
      score: result.score,
      totalQuestions: result.totalQuestions,
      correctAnswers: result.correctAnswers,
      timeSpent: result.timeSpent,
      questionIds: examSession.questions.map(q => q.id),
      categoryBreakdown: result.categoryBreakdown
    });

    setExamResult(result);
    setExamCompleted(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (examCompleted && examResult) {
    return <ExamResults result={examResult} onRetakeExam={() => window.location.reload()} onBackToHome={onExamEnd} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onExamEnd} className="p-2">
                <Home className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  PMP Practice Exam
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Question {examSession.currentQuestionIndex + 1} of {examSession.questions.length}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatTime(timeElapsed)}</span>
              </Badge>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {Math.round(progress)}% Complete
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="mb-2">
                  {currentQuestion.category}
                </Badge>
                <Badge 
                  variant={currentQuestion.difficulty === 'easy' ? 'default' : 
                          currentQuestion.difficulty === 'medium' ? 'secondary' : 'destructive'}
                >
                  {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
                </Badge>
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Answer Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  const showResult = showExplanation;
                  
                  let buttonVariant: "default" | "outline" | "secondary" | "destructive" = "outline";
                  let iconElement = null;
                  
                  if (showResult) {
                    if (isCorrect) {
                      buttonVariant = "default";
                      iconElement = <CheckCircle className="h-5 w-5 text-green-600" />;
                    } else if (isSelected && !isCorrect) {
                      buttonVariant = "destructive";
                      iconElement = <XCircle className="h-5 w-5 text-red-600" />;
                    }
                  } else if (isSelected) {
                    buttonVariant = "secondary";
                  }

                  return (
                    <Button
                      key={index}
                      variant={buttonVariant}
                      className={`w-full text-left justify-start p-4 h-auto min-h-[60px] ${
                        showResult && isCorrect ? 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' :
                        showResult && isSelected && !isCorrect ? 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100' :
                        ''
                      }`}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="flex-1 text-sm leading-relaxed">{option}</span>
                        {iconElement && <div className="flex-shrink-0">{iconElement}</div>}
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <Alert className="mt-6 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800 dark:text-blue-200">
                    <strong>Explanation:</strong> {currentQuestion.explanation}
                  </AlertDescription>
                </Alert>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={examSession.currentQuestionIndex === 0}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {examSession.answers.filter(a => a !== null).length} of {examSession.questions.length} answered
                </div>

                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
                >
                  <span>
                    {examSession.currentQuestionIndex === examSession.questions.length - 1 ? 'Finish Exam' : 'Next'}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}