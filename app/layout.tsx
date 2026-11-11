import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import { BackToTop } from '@/components/back-to-top'
import { Breadcrumb } from '@/components/breadcrumb'
import { BrandSignature } from '@/components/brand-signature'
import { ReadingProgress } from '@/components/reading-progress'
import { SiteNav } from '@/components/site-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { ThemeProvider } from '@/providers/theme-provider'
import { DEFAULT_RSS_CONFIG } from '@/lib/rss-utils'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_RSS_CONFIG.siteUrl),
  title: { default: 'DimplesY · 记录 · 构建', template: '%s · DimplesY' },
  description: 'AI 应用开发者，记录持续学习、独立产品构建与商业探索。',
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
}

const readingSerif = Lora({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-reading-serif',
  display: 'swap',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={readingSerif.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a href="#main-content" className="skip-link">
            跳到正文
          </a>
          <div className="site-shell">
            <aside className="sidebar">
              <div className="sidebar-head">
                <Link href="/" className="brand" aria-label="Dimples Yan 博客首页">
                  <BrandSignature className="brand-signature" />
                </Link>
                <ThemeToggle className="sidebar-theme" />
              </div>
              <p className="sidebar-description">记录 · 构建</p>
              <SiteNav />
              <div className="sidebar-bottom">
                <a className="text-link" href="/rss.xml">
                  <Rss aria-hidden="true" strokeWidth={1.5} className="link-icon" />
                  订阅 RSS ↗
                </a>
              </div>
            </aside>
            <div className="workspace">
              <ReadingProgress />
              <header className="workspace-bar">
                <Breadcrumb />
                <ThemeToggle className="bar-theme" />
              </header>
              {children}
              <BackToTop />
              <footer className="site-footer">
                <div>
                  <h2>DimplesY</h2>
                  <p>记录 · 构建</p>
                </div>
                <a href="https://github.com/DimplesY" className="text-link" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
