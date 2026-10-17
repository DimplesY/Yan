'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SiteNav() {
  const pathname = usePathname()
  const isAbout = pathname === '/articles/about'
  const isWriting = pathname === '/' || (pathname.startsWith('/articles/') && !isAbout)

  return (
    <nav aria-label="主导航">
      <Link href="/" className={isWriting ? 'active' : undefined} aria-current={isWriting ? 'location' : undefined}>
        文章索引 {isWriting && <span aria-hidden="true">↗</span>}
      </Link>
      <Link
        href="/articles/about"
        className={isAbout ? 'active' : undefined}
        aria-current={isAbout ? 'page' : undefined}>
        关于我 {isAbout && <span aria-hidden="true">↗</span>}
      </Link>
      <a href="https://github.com/DimplesY" target="_blank" rel="noopener noreferrer">
        GitHub <span aria-hidden="true">↗</span>
      </a>
    </nav>
  )
}
