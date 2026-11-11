'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SHOW_AFTER = 600

export function BackToTop() {
  const [scrolled, setScrolled] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > SHOW_AFTER)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    const footer = document.querySelector('.site-footer')
    if (!footer) return
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: '0px 0px -24px 0px' },
    )
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const visible = scrolled && !footerVisible

  return (
    <Button
      type="button"
      variant="toggle"
      size="icon-sm"
      className="back-to-top"
      data-visible={visible || undefined}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="回到顶部"
      onClick={() => window.scrollTo(0, 0)}>
      <ArrowUp aria-hidden="true" strokeWidth={1.5} className="size-[16px]" />
    </Button>
  )
}
