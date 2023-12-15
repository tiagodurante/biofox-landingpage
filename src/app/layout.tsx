import type { Metadata } from 'next'
import localFont from '@next/font/local'
import './globals.css'


const font = localFont({
  src: [
    {
      path: '../../public/fonts/Cairo-Bold-BF643384ee22aa6.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/Cairo-Regular-BF643384ef31630.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Cairo-SemiBold-BF643384ef0a2e7.ttf',
      weight: '600',
    }
  ],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'Biofox - Análises Clínicas & Saúde',
  description: 'Laboratório de Análises Clínicas e Saúde Biofox',
  manifest: '../../public/site.webmanifest',
  icons: [
    '../../public/icons/android-chrome-192x192.png',
    '../../public/icons/android-chrome-512x512.png',
    '../../public/icons/apple-touch-icon.png',
    '../../public/icons/favicon-16x16.png',
    '../../public/icons/favicon-32x32.png',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
