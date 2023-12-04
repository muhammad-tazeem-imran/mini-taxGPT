import React from 'react';
import clsx from 'clsx';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import Header from './components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'TaxGPT - Mini',
  description: 'Bite-sized taxGPT for evaluation purposes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={clsx(
        'h-full',
        'scroll-smooth',
        'antialiased'
      )}
    >
      <body
        className={clsx(
          inter.className,
          'flex',
          'h-full',
          'flex-col'
        )}
      >
        <Header />
        <main
          className={clsx(
            'flex',
            'flex-1',
            'flex-col',
            'items-center',
            'justify-center',
          )}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
