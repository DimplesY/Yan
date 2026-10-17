'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  const label = nextTheme === 'light' ? '亮色' : '暗色'

  return (
    <button
      type="button"
      className="theme-toggle"
      disabled={!mounted}
      aria-label={mounted ? `切换到${label}模式` : '切换主题'}
      onClick={() => setTheme(nextTheme)}>
      <span className="theme-symbol" aria-hidden="true" />
      {mounted ? `${label}模式` : '切换主题'}
    </button>
  )
}
