'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Award, Users, CheckCircle, Target, BarChart3, Heart } from 'lucide-react';
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
                <span className="hidden sm:inline">Statistics</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/thank-you', '_blank')}
                className="flex items-center space-x-2"
              >
                <Heart className="h-4 w-4" />
                <span className="hidden sm:inline">Share</span>
              </Button>
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Free & No Registration
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12" role="banner">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Free PMP Exam Simulator - 1000 Practice Questions
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              محاكاة اختبار PMP مجانًا - No Registration Required
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Master your <strong>Project Management Professional (PMP) certification</strong> with our completely free practice platform. 
              Get instant feedback on 1000 real exam questions. Start practicing immediately - no registration, no credit card, 100% free forever!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button 
                onClick={handleStartExamSetup}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Target className="mr-2 h-5 w-5" />
                Start Free PMP Practice Test
              </Button>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <CheckCircle className="h-5 w-5" />
                <span>100% Free • No Registration • Instant Access</span>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              ⭐ Trusted by 15,000+ PMP candidates worldwide • 4.9/5 rating
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-12" role="main">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Why Choose Our Free PMP Exam Simulator?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">1000 Real PMP Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Comprehensive question bank covering all PMP knowledge areas with authentic exam-style questions aligned with PMI&apos;s latest exam outline
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
          </section>

          {/* SEO Content Section */}
          <section className="mb-12">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About Our Free PMP Exam Simulator
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our <strong>free PMP exam simulator</strong> is designed to help Project Management Professionals prepare for their 
                    PMI certification exam without any cost or registration requirements. With over 240 carefully curated practice questions, 
                    our platform provides an authentic exam experience that mirrors the real PMP certification test.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                     Whether you&apos;re searching for &quot;<em>PMP exam simulator</em>&quot;, &quot;<em>محاكاة اختبار PMP مجانًا</em>&quot;, or 
                     &quot;<em>PMP practice test online</em>&quot;, our platform offers the most comprehensive free preparation tool available. 
                     No hidden fees, no registration barriers - just instant access to high-quality PMP practice questions.
                    </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Perfect for:</h3>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• PMP certification candidates</li>
                        <li>• Project management professionals</li>
                        <li>• PMI exam preparation</li>
                        <li>• Arabic-speaking candidates (محاكاة اختبار PMP)</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Benefits:</h3>
                      <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• 100% free forever</li>
                        <li>• No registration required</li>
                        <li>• Instant feedback and explanations</li>
                        <li>• Mobile-friendly design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Ready to Start Your Free PMP Practice Test?</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  Join 15,000+ professionals who have used our free platform to prepare for their PMP certification. 
                  No registration required - start practicing immediately!
                </p>
                <Button 
                  onClick={handleStartExamSetup}
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg"
                >
                  Start Free PMP Practice Test Now
                </Button>
                <div className="mt-4 text-blue-100 text-sm">
                  🎯 محاكاة اختبار PMP مجانًا • No Credit Card • Instant Access
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* SEO Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Free PMP Exam Simulator - محاكاة اختبار PMP مجانًا</h3>
            <p className="text-gray-300 mb-4">
              The most comprehensive free PMP practice test platform. No registration required, 1000 real questions, 
              instant feedback. Perfect for Project Management Professional certification preparation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>PMP Exam Simulator</span>
              <span>•</span>
              <span>Free PMP Practice Test</span>
              <span>•</span>
              <span>محاكاة اختبار PMP مجانًا</span>
              <span>•</span>
              <span>No Registration Required</span>
              <span>•</span>
              <span>PMI Certification Prep</span>
            </div>
            <div className="mt-4 text-xs text-gray-500">
             This platform is a heartfelt tribute to the discipline and professionals of Project Management. 
             We are committed to providing a free and accessible resource for all PMP candidates.
            </div>
          </div>
        </div>
      </footer>

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
