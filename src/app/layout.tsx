import './globals.css'
import { cn } from '~/lib/utils'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Provider from '~/components/miscellaneous/provider'
import GotoTop from '~/components/miscellaneous/go-to-top'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'Grench Legal - Premier Corporate & Litigation Firms',
    template: '%s | Grench Legal',
  },
  description:
    "A high-stakes legal powerhouse specializing in corporate law, litigation, and property management. We don't just advise; we intervene to change outcomes.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Grench Legal',
    title: 'Grench Legal',
    description:
      'Global corporate counsel and high-stakes litigation. Transforming legal challenges into strategic victories.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grench Legal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grench Legal',
    description:
      "We don't simply advise; we intervene to change outcomes. Premier corporate & litigation counsel.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn('antialiased', jetbrainsMono.variable)}>
        <Provider>
          {children}
          <GotoTop />
        </Provider>
      </body>
    </html>
  )
}
