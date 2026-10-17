import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import Markdown from 'react-markdown'
import { MarkdownCode } from '../components/markdown-code'

function render(source: string) {
  return renderToStaticMarkup(createElement(Markdown, { components: { code: MarkdownCode } }, source))
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
