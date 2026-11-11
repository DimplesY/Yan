'use client'

import { usePathname } from 'next/navigation'

export function ReadingProgress() {
  const pathname = usePathname() ?? '/'
  if (!pathname.startsWith('/articles/')) return null
  return <span className="reading-progress" aria-hidden="true" />
}
