import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Markdown from 'react-markdown'
import { CodeBlock } from '../components/code-block'
import { MarkdownCode, readCodeChild } from '../components/markdown-code'

function render(source: string) {
  return renderToStaticMarkup(createElement(Markdown, { components: { code: MarkdownCode } }, source))
}

function renderWithCopy(source: string) {
  return renderToStaticMarkup(
    createElement(
      Markdown,
      {
        components: {
          code: MarkdownCode,
          pre: ({ children }: { children?: React.ReactNode }) => {
            const node = children as React.ReactNode
            return createElement(CodeBlock, readCodeChild(node), node)
          },
        },
      },
      source,
    ),
  )
}

test('highlights fenced code while preserving code text, whitespace, and a single pre block', () => {
  const code = 'const count = 42\n  console.log(count)\n'
  const markup = render('```typescript\n' + code + '```')
  assert.match(markup, /class="token keyword"/)
  assert.match(markup, /class="token number"/)
  assert.doesNotMatch(markup, /color:black|text-shadow:/)
  assert.equal((markup.match(/<pre>/g) ?? []).length, 1)
  assert.equal(markup.replace(/<[^>]*>/g, ''), code)
})

test('keeps inline and unlabelled code plain and handles unsupported languages safely', () => {
  assert.match(render('Use `const x = 1` inline.'), /<code>const x = 1<\/code>/)
  assert.equal(render('```\n  plain text\n```'), '<pre><code>  plain text\n</code></pre>')
  const unknown = render('```unknown-language\n<script>alert(1)</script>\n```')
  assert.doesNotMatch(unknown, /<script>|class="token /)
  assert.match(unknown, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/)
})

test('puts language and copy controls in a header bar above a single pre', () => {
  const code = 'const count = 42\nconsole.log(count)\n'
  const markup = renderWithCopy('```typescript\n' + code + '```')

  assert.match(markup, /^<div class="code-block"><div class="code-block-bar">/)
  assert.match(markup, /<span class="code-block-lang">typescript<\/span>/)
  assert.match(markup, /aria-label="复制全文"[^>]*>[\s\S]*?复制全文<\/button>/)
  assert.match(markup, /aria-pressed="false"[^>]*>[\s\S]*?换行<\/button>/)
  assert.equal((markup.match(/<pre/g) ?? []).length, 1)
  assert.equal((markup.match(/<pre[^>]*>([\s\S]*)<\/pre>/) ?? ['', ''])[1].replace(/<[^>]*>/g, ''), code)
  assert.doesNotMatch(markup, /code-block-more/)
  assert.doesNotMatch(renderWithCopy('Use `const x = 1` inline.'), /code-block/)
})

test('collapses very long blocks and turns on wrapping for long lines', () => {
  const lines = Array.from({ length: 60 }, (_, i) => `const value${i} = '${'x'.repeat(110)}'`)
  const markup = renderWithCopy('```typescript\n' + lines.join('\n') + '\n```')

  assert.match(markup, /data-collapsed="true"/)
  assert.match(markup, /展开全部 · 共 60 行/)
  assert.match(markup, /<pre data-wrap="true">/)
  assert.match(markup, /aria-pressed="true"[^>]*>[\s\S]*?换行<\/button>/)
})
