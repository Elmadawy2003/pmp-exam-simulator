'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Share2, Heart, Star, Users, Trophy, Gift, MessageCircle, ExternalLink } from 'lucide-react';

export default function ThankYouPage() {
  const [shared, setShared] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = 'https://pmp-exam-simulator.vercel.app';
  const shareText = '🎯 Just discovered this amazing FREE PMP Exam Simulator! 1000 practice questions, instant feedback, and NO registration required! Perfect for PMP certification prep. محاكاة اختبار PMP مجانًا';

  const handleShare = async (platform: string) => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&summary=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    };

    window.open(urls[platform as keyof typeof urls], '_blank', 'width=600,height=400');
    setShared(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-100 p-4 rounded-full">
              <Trophy className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Thank You for Using Our Free PMP Simulator! 🎉
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We hope our free practice questions helped you prepare for your PMP certification. 
            Help others discover this free resource!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">15,000+</div>
              <p className="text-gray-600">Students Helped</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <p className="text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <Gift className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <p className="text-gray-600">Free Forever</p>
            </CardContent>
          </Card>
        </div>

        {/* Share Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              Help Others Discover This Free Resource
            </CardTitle>
            <CardDescription>
              Share our free PMP simulator with your colleagues, friends, and professional network. 
              Every share helps someone achieve their PMP certification goals!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={() => handleShare('linkedin')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share on LinkedIn
                </Button>
                
                <Button 
                  onClick={() => handleShare('facebook')}
                  className="bg-blue-800 hover:bg-blue-900"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share on Facebook
                </Button>
                
                <Button 
                  onClick={() => handleShare('whatsapp')}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Share on WhatsApp
                </Button>
                
                <Button 
                  onClick={() => handleShare('twitter')}
                  className="bg-black hover:bg-gray-800"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share on X (Twitter)
                </Button>
                
                <Button 
                  onClick={() => handleShare('telegram')}
                  className="bg-blue-500 hover:bg-blue-600"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share on Telegram
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={copyToClipboard}
                  className="flex-1"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  {copied ? 'Copied!' : 'Copy Share Link'}
                </Button>
              </div>
              
              {shared && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    🙏 Thank you for sharing! You&apos;re helping others achieve their PMP certification goals.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Why Share Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why Share Our Free PMP Simulator?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">1</Badge>
                  <div>
                    <h3 className="font-semibold">Completely Free</h3>
                    <p className="text-gray-600">No hidden costs, no registration required, no credit card needed.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">2</Badge>
                  <div>
                    <h3 className="font-semibold">1000 Real Questions</h3>
                    <p className="text-gray-600">Authentic PMP exam questions with detailed explanations.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">3</Badge>
                  <div>
                    <h3 className="font-semibold">Instant Feedback</h3>
                    <p className="text-gray-600">Get immediate explanations for every answer.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">4</Badge>
                  <div>
                    <h3 className="font-semibold">Mobile Friendly</h3>
                    <p className="text-gray-600">Practice anywhere, anytime on any device.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">5</Badge>
                  <div>
                    <h3 className="font-semibold">Progress Tracking</h3>
                    <p className="text-gray-600">Monitor your improvement over time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1">6</Badge>
                  <div>
                    <h3 className="font-semibold">PMI Aligned</h3>
                    <p className="text-gray-600">Content aligned with PMI&apos;s latest exam outline.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => window.location.href = '/'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Take Another Practice Test
          </Button>
          <p className="text-gray-600 mt-4">
            Keep practicing to master your PMP certification! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}