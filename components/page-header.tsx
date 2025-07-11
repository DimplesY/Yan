'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navList = [
  {
    title: 'Home',
    href: '/',
  }
]

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
            {navList.map((item, index) => {
              return (
                <li
                  key={index}
                  className={cn(
                    pathname === item.href && 'border-dashed border-1 border-border',
                    'h-10 w-20 relative flex items-center justify-center rounded transition-all hover:border-dashed hover:border-1 hover:border-border',
                  )}>
                  <Link href={item.href} className={pathname === item.href ? 'opacity-100' : 'opacity-80'}>
                    Home
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}
