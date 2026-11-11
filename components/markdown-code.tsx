import type { Components } from 'react-markdown'
import { isValidElement, type ReactNode } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism'

type CodeChild = { className?: string; children?: ReactNode }

// 从 react-markdown 交给 pre 的 <code> 子元素里取出语言与原始文本，供代码块头部使用。
export function readCodeChild(children: ReactNode) {
  const child = Array.isArray(children) ? children[0] : children
  const props = (isValidElement<CodeChild>(child) ? child.props : {}) as CodeChild
  const language = /\blanguage-(\S+)/.exec(props.className ?? '')?.[1]
  const source = typeof props.children === 'string' ? props.children : ''
  return { language, source }
}

export const MarkdownCode: NonNullable<Components['code']> = ({ className, children }) => {
  const language = /\blanguage-(\S+)/.exec(className ?? '')?.[1]
  if (!language) return <code className={className}>{children}</code>

  return (
    <SyntaxHighlighter
      language={language}
      className={className}
      PreTag="code"
      CodeTag="span"
      codeTagProps={{ className, style: { whiteSpace: 'inherit' } }}
      useInlineStyles={false}>
      {String(children)}
    </SyntaxHighlighter>
  )
}
