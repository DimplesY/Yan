'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function PageHeader() {
  const pathname = usePathname()
  return (
    <header className="w-full h-20 border-b-1">
      <div className="border-x-1 mx-auto container h-full border-solid border-muted px-10 py-5 box-border flex justify-between items-center">
        <div className="text-lg font-bold">DimplesY</div>

        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className={pathname === '/' ? 'opacity-100' : 'opacity-80'}>
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/blog" className={pathname === '/blog' ? 'opacity-100' : 'opacity-80'}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
