import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700'],
  variable: '--font-poppins'
});

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: '--font-roboto'
});

export const metadata: Metadata = {
  title: 'Reliable Ispat Udyog - A Complete Place for Steel',
  description: 'Leading suppliers of Iron & Steel products with 10+ years of experience in Raipur, Chhattisgarh. Quality TMT bars, MS angles, channels, plates, pipes and more.',
  keywords: ['steel', 'iron', 'TMT bar', 'MS angle', 'Raipur', 'Chhattisgarh', 'steel supplier'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
