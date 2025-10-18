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
  title: "PMP Exam Simulator - Free Practice Platform | Project Management Certification",
  description: "Free PMP exam practice platform with 200+ questions, instant feedback, and detailed explanations. No registration required. Prepare for your Project Management Professional certification exam.",
  keywords: "PMP exam, Project Management Professional, PMP practice test, PMI certification, project management, exam simulator, free practice, PMP questions",
  authors: [{ name: "PMP Exam Simulator Team" }],
  creator: "PMP Exam Simulator",
  publisher: "PMP Exam Simulator",
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
    title: "PMP Exam Simulator - Free Practice Platform",
    description: "Practice with real PMP exam questions and get instant feedback. No registration required - start practicing immediately!",
    url: 'https://pmp-exam-simulator.vercel.app',
    siteName: 'PMP Exam Simulator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PMP Exam Simulator - Free Practice Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PMP Exam Simulator - Free Practice Platform",
    description: "Practice with real PMP exam questions and get instant feedback. No registration required!",
    images: ['/og-image.png'],
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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
