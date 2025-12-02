// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ElectroTech - Electronics & Telecommunication',
  description: 'Leading provider of electronics and telecommunication solutions',
  keywords: [
    'ElectroTech',
    'Electronics',
    'Telecommunication',
    'Next.js',
    'shadcn',
    'TailwindCSS',
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    // optional: other sizes can be added if you want
  },
  openGraph: {
    title: 'ElectroTech — Electronics & Telecommunication',
    description: 'A modern and responsive Electronics & Telecommunication website built with Next.js and shadcn/ui.',
    url: 'https://tanmay21-electrotech-gt4t.vercel.app/', // update if you ever change domain
    siteName: 'ElectroTech',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ElectroTech — Electronics & Telecommunication',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElectroTech — Electronics & Telecommunication',
    description: 'A modern and responsive Electronics & Telecommunication website built with Next.js and shadcn/ui.',
    images: ['/og-image.png'],
  },
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        {/* Google Analytics (only included if NEXT_PUBLIC_GA_ID is set in Vercel env) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}

        {/* site content */}
        {children}
      </body>
    </html>
  )
}
