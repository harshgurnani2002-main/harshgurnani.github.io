import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Harsh Gurnani | Backend Engineer & AI Developer',
  description:
    'Backend & AI Engineer specializing in scalable systems, distributed architectures, and machine learning solutions. Building high-performance APIs, data pipelines, and intelligent applications.',
  keywords: [
    'Backend Engineer',
    'AI Developer',
    'Machine Learning',
    'Full Stack',
    'Python',
    'TypeScript',
    'System Design',
    'Harsh Gurnani',
  ],
  authors: [{ name: 'Harsh Gurnani' }],
  creator: 'Harsh Gurnani',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Harsh Gurnani | Backend Engineer & AI Developer',
    description:
      'Backend & AI Engineer specializing in scalable systems, distributed architectures, and machine learning solutions.',
    siteName: 'Harsh Gurnani – Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harsh Gurnani | Backend Engineer & AI Developer',
    description:
      'Backend & AI Engineer specializing in scalable systems, distributed architectures, and machine learning solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
