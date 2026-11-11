'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const pathname = usePathname() ?? '/'
  const slug = pathname.startsWith('/articles/') ? decodeURIComponent(pathname.slice('/articles/'.length)) : ''

  return (
    <nav className="breadcrumb" aria-label="面包屑">
      <span aria-hidden="true">~/</span>
      <Link href="/">dimplesy</Link>
      <span className="path-divider" aria-hidden="true">
        /
      </span>
      <Link href="/">writing</Link>
      {slug && (
        <>
          <span className="path-divider" aria-hidden="true">
            /
          </span>
          <span className="breadcrumb-current" aria-current="page">
            {slug}
          </span>
        </>
      )}
    </nav>
  )
}
