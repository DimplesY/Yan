'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function PageHeader() {
  const pathname = usePathname()
  return (
    <header className="w-full h-20 border-b">
      <div className="border-x mx-auto container h-full px-10 py-5 box-border flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">DimplesY</Link>
        </div>

        <div>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className={pathname === '/' ? 'opacity-100' : 'opacity-80'}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/resume" className={pathname === '/blog' ? 'opacity-100' : 'opacity-80'}>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
