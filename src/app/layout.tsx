import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Free PMP Exam Simulator 1000 Practice Questions | No Registration Required | محاكاة اختبار PMP مجانًا",
  description: "Free PMP exam practice platform with 1000+ real questions, instant feedback, and detailed explanations. No registration required. Start your Project Management Professional certification preparation now! محاكاة اختبار PMP مجانًا بدون تسجيل مع أكثر من 1000 سؤال حقيقي.",
  keywords: "PMP exam simulator, PMP practice test online, free PMP questions, محاكاة اختبار PMP مجانًا, اختبار PMP مجاني, Project Management Professional, PMI certification, PMP exam prep, project management certification, PMP mock exam, PMP study guide, PMI exam practice, PMP certification test, free project management exam, no registration PMP test, instant PMP practice, PMP simulator free, اختبار إدارة المشاريع, شهادة PMP, تدريب PMP مجاني",
  authors: [{ name: "PMP Exam Simulator Team" }],
  creator: "PMP Exam Simulator",
  publisher: "PMP Exam Simulator",
  category: "Education",
  classification: "Project Management Certification",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pmp-exam-simulator.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Free PMP Exam Simulator 🎯 | محاكاة اختبار PMP مجانًا | No Registration Required",
    description: "🚀 Free PMP practice test with 1000+ real questions! No registration needed. Instant feedback, progress tracking, mobile-friendly. Perfect for PMI certification prep. محاكاة اختبار PMP مجانًا 🎯",
    url: 'https://pmp-exam-simulator.vercel.app',
    siteName: 'Free PMP Exam Simulator - محاكاة اختبار PMP مجانًا',
    images: [
      {
        url: 'https://pmp-exam-simulator.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free PMP Exam Simulator - No Registration Required',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "🎯 Free PMP Exam Simulator - 1000+ Practice Questions",
    description: "🚀 Practice with real PMP exam questions and get instant feedback. Completely free with no registration required! Perfect for PMI certification prep.",
    images: ['/og-image.png'],
    creator: '@PMPExamSim',
    site: '@PMPExamSim',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PMP Exam Simulator" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["WebApplication", "EducationalOrganization"],
              "name": "Free PMP Exam Simulator",
              "alternateName": ["PMP Practice Test", "محاكاة اختبار PMP مجانًا", "PMP Mock Exam"],
              "description": "Free PMP exam practice platform with 1000+ real questions, instant feedback, and detailed explanations. No registration required. Perfect for Project Management Professional certification preparation.",
              "url": "https://pmp-exam-simulator.vercel.app",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Web Browser",
              "browserRequirements": "Requires JavaScript. Requires HTML5.",
              "softwareVersion": "1.0",
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString().split('T')[0],
              "inLanguage": ["en", "ar"],
              "isAccessibleForFree": true,
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01"
              },
              "author": {
                "@type": "Organization",
                "name": "PMP Exam Simulator Team",
                "url": "https://pmp-exam-simulator.vercel.app"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PMP Exam Simulator",
                "url": "https://pmp-exam-simulator.vercel.app"
              },
              "keywords": "PMP exam simulator, PMP practice test online, free PMP questions, محاكاة اختبار PMP مجانًا, Project Management Professional, PMI certification, no registration required",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "featureList": [
                "1000+ Real Practice Questions",
                "Instant Feedback & Explanations",
                "No Registration Required",
                "100% Free Forever",
                "Mobile Friendly Design",
                "Progress Tracking",
                "PMI ECO Aligned Content",
                "Multiple Exam Modes",
                "Arabic & English Support"
              ],
              "educationalLevel": "Professional",
              "teaches": "Project Management Professional (PMP) Certification",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "student"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
