import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Fira_Code } from 'next/font/google'
import { unstable_ViewTransition as ViewTransition } from 'react'
import './globals.css'
import { PageHeader } from '@/components/page-header'
import { PageFooter } from '@/components/page-footer'

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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col h-screen">
            <PageHeader />
            <ViewTransition name="page">{children}</ViewTransition>
            <PageFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
