'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Files, UserRound } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

const iconProps = { 'aria-hidden': true, strokeWidth: 1.5, className: 'nav-icon' } as const

export function SiteNav() {
  const pathname = usePathname()
  const isAbout = pathname === '/articles/about'
  const isWriting = pathname === '/' || (pathname.startsWith('/articles/') && !isAbout)

  return (
    <nav aria-label="主导航">
      <Link href="/" className={isWriting ? 'active' : undefined} aria-current={isWriting ? 'location' : undefined}>
        <Files {...iconProps} />
        文章索引
      </Link>
      <Link
        href="/articles/about"
        className={isAbout ? 'active' : undefined}
        aria-current={isAbout ? 'page' : undefined}>
        <UserRound {...iconProps} />
        关于我
      </Link>
      <a href="https://github.com/DimplesY" target="_blank" rel="noopener noreferrer">
        <SiGithub aria-hidden="true" size={15} className="nav-icon nav-icon-brand" />
        GitHub
        <span aria-hidden="true" className="nav-external">
          ↗
        </span>
      </a>
    </nav>
  )
}
