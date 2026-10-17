import type { Metadata } from 'next'
import Link from 'next/link'
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a href="#main-content" className="skip-link">
            跳到正文
          </a>
          <div className="site-shell">
            <aside className="sidebar">
              <Link href="/" className="brand" aria-label="DimplesY 博客首页">
                DimplesY<span>_</span>
              </Link>
              <p className="sidebar-description">记录 · 构建</p>
              <SiteNav />
              <div className="sidebar-bottom">
                <a className="text-link" href="/rss.xml">
                  订阅 RSS ↗
                </a>
              </div>
            </aside>
            <div className="workspace">
              <header className="workspace-bar">
                <Link href="/" className="breadcrumb">
                  <span>~/</span> dimplesy <span className="path-divider">/</span> writing
                </Link>
                <ThemeToggle />
              </header>
              {children}
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
