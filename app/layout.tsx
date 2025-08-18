import { PageFooter } from '@/components/page-footer'
import { PageHeader } from '@/components/page-header'
import { PageLayout } from '@/components/page-layout'
import { ThemeProvider } from '@/providers/theme-provider'
import { ReactLenis } from 'lenis/react'
import type { Metadata } from 'next'
import { Fira_Code, Geist, Geist_Mono } from 'next/font/google'
import { unstable_ViewTransition as ViewTransition } from 'react'
import './globals.css'


const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DimplesY',
  description: "DimplesY's Profile",
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}>
        <ReactLenis options={{ lerp: 0.2 }} root>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex flex-col min-h-screen">
              <PageHeader />
              <ViewTransition name="page">
                <PageLayout>{children}</PageLayout>
              </ViewTransition>
              <PageFooter />
            </div>
          </ThemeProvider>
        </ReactLenis>
      </body>
    </html>
  )
}
