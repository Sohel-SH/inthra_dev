import type { Metadata } from 'next'
import './globals.css'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Inthra - Advanced Insider Threat Detection and Monitoring',
    template: '%s | Inthra'
  },
  description: 'Inthra offers an advanced platform for comprehensive insider threat detection and monitoring. Leveraging cutting-edge Graph Analytics and custom rules, Inthra provides real-time security insights to protect your organization from internal risks and data breaches. Stay ahead of threats with intelligent anomaly detection and proactive risk management.',
  keywords: ['insider threat detection', 'security', 'AI', 'Graph Analytics', 'threat monitoring', 'cybersecurity', 'insider risk management', 'advanced threat detection', 'threat intelligence', 'risk assessment', 'data protection', 'fraud detection', 'anomaly detection', 'security analytics', 'threat prevention', 'compliance monitoring'],
  authors: [{ name: 'Inthra Team' }],
  creator: 'Inthra',
  publisher: 'Inthra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.inthra.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Inthra - Insider Threat Detection',
    description: 'Advanced insider threat detection and monitoring tool that leverages Al',
    url: 'https://www.inthra.io',
    siteName: 'Inthra',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inthra - Insider Threat Detection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inthra - Insider Threat Detection',
    description: 'Advanced insider threat detection and monitoring tool that leverages Al',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon: blue square (#233EFF) with white "I" */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      {/* Use Tailwind's global sans font (Vend Sans) */}
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}