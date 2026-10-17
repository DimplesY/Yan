import type { Components } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism'

export const MarkdownCode: NonNullable<Components['code']> = ({ className, children }) => {
  const language = /\blanguage-(\S+)/.exec(className ?? '')?.[1]
  if (!language) return <code className={className}>{children}</code>

  return (
    <SyntaxHighlighter
      language={language}
      className={className}
      PreTag="code"
      CodeTag="span"
      codeTagProps={{ className }}
      useInlineStyles={false}>
      {String(children)}
    </SyntaxHighlighter>
  )
}
