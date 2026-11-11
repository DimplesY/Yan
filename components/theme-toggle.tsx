'use client'

import { useSyncExternalStore } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  const label = nextTheme === 'light' ? '亮色' : '暗色'
  // 服务端与挂载前渲染月亮（默认深色），避免水合不一致
  const Icon = mounted && nextTheme === 'light' ? Sun : Moon

  return (
    <Button
      type="button"
      variant="toggle"
      className={cn('theme-toggle h-auto', className)}
      disabled={!mounted}
      aria-label={mounted ? `切换到${label}模式` : '切换主题'}
      onClick={() => setTheme(nextTheme)}>
      <Icon aria-hidden="true" strokeWidth={1.5} className="size-[15px]" />
      {mounted ? `${label}模式` : '切换主题'}
    </Button>
  )
}
