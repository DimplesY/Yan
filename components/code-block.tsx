'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, TriangleAlert, WrapText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const RESET_DELAY = 1600
const COLLAPSE_LINES = 40
const WRAP_AFTER_CHARS = 100

type CopyState = 'idle' | 'copied' | 'failed'

export function CodeBlock({
  children,
  language,
  source = '',
}: {
  children?: ReactNode
  language?: string
  source?: string
}) {
  const preRef = useRef<HTMLPreElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const [copyState, setCopyState] = useState<CopyState>('idle')
  const [overflowing, setOverflowing] = useState(false)

  const lines = source ? source.replace(/\n+$/, '').split('\n') : []
  const longLine = lines.some((line) => line.length > WRAP_AFTER_CHARS)
  const [wrap, setWrap] = useState(longLine)
  const [expanded, setExpanded] = useState(false)
  const collapsible = lines.length > COLLAPSE_LINES
  const collapsed = collapsible && !expanded

  useEffect(() => () => clearTimeout(timer.current), [])

  useEffect(() => {
    const pre = preRef.current
    if (!pre) return
    const measure = () => setOverflowing(pre.scrollWidth > pre.clientWidth + 1)
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(pre)
    return () => observer.disconnect()
  }, [wrap, collapsed])

  const copy = async () => {
    const text = source || preRef.current?.querySelector('code')?.textContent
    if (!text) return

    try {
      await navigator.clipboard.writeText(text)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
      const range = document.createRange()
      const code = preRef.current?.querySelector('code')
      if (code) {
        range.selectNodeContents(code)
        const selection = window.getSelection()
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
    }

    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopyState('idle'), RESET_DELAY)
  }

  const copyLabel = copyState === 'copied' ? '已复制' : copyState === 'failed' ? '复制失败' : '复制全文'
  const CopyIcon = copyState === 'copied' ? Check : copyState === 'failed' ? TriangleAlert : Copy

  return (
    <div className="code-block">
      <div className="code-block-bar">
        <span className="code-block-lang">{language ?? 'text'}</span>
        <div className="code-block-actions">
          <Button
            type="button"
            variant="quiet"
            size="xs"
            aria-pressed={wrap}
            title="长行是否自动折行"
            onClick={() => setWrap((value) => !value)}>
            <WrapText aria-hidden="true" strokeWidth={1.5} />
            换行
          </Button>
          <Button
            type="button"
            variant="quiet"
            size="xs"
            data-copied={copyState === 'copied' || undefined}
            aria-label={copyState === 'copied' ? '代码已复制' : copyState === 'failed' ? '复制失败，请手动选择' : '复制全文'}
            onClick={copy}>
            <CopyIcon aria-hidden="true" strokeWidth={1.5} />
            {copyLabel}
          </Button>
        </div>
      </div>
      <div
        className="code-block-body"
        data-overflowing={overflowing || undefined}
        data-collapsed={collapsed || undefined}>
        <pre ref={preRef} data-wrap={wrap || undefined}>
          {children}
        </pre>
      </div>
      {collapsible && (
        <button
          type="button"
          className="code-block-more"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}>
          {expanded ? '收起代码' : `展开全部 · 共 ${lines.length} 行`}
        </button>
      )}
      <span role="status" className="sr-only">
        {copyState === 'copied' ? '代码已复制到剪贴板' : copyState === 'failed' ? '复制失败，已选中代码，请手动复制' : ''}
      </span>
    </div>
  )
}
