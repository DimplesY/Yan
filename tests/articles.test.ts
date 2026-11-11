import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const originalCwd = process.cwd()
const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'dimplesy-articles-'))
let articles: typeof import('../lib/articles')

before(async () => {
  const directory = path.join(temporaryDirectory, 'content/articles')
  fs.mkdirSync(directory, { recursive: true })
  fs.writeFileSync(
    path.join(directory, 'older.md'),
    "---\ntitle: Older\ndate: '2026-10-01'\ntags: [TypeScript]\n---\n## Hello\n",
  )
  fs.writeFileSync(
    path.join(directory, 'newer.md'),
    '---\ntitle: Newer\ndate: 2026-10-17\ndescription: A new post\n---\nBody\n',
  )
  fs.writeFileSync(path.join(directory, 'invalid.md'), "---\ntitle: Invalid\ndate: '2026-02-30'\n---\nBody")
  fs.writeFileSync(
    path.join(directory, 'bad-tags.md'),
    "---\ntitle: Bad tags\ndate: '2026-10-17'\ntags: invalid\n---\nBody",
  )
  fs.writeFileSync(path.join(temporaryDirectory, 'private.md'), "---\ntitle: Secret\ndate: '2026-10-17'\n---\nPrivate")
  process.chdir(temporaryDirectory)
  articles = await import('../lib/articles')
})

after(() => {
  process.chdir(originalCwd)
  fs.rmSync(temporaryDirectory, { recursive: true, force: true })
})

test('reads quoted and YAML dates, supplies optional fields, and sorts newest first', () => {
  const errors: unknown[] = []
  const originalError = console.error
  console.error = (...args: unknown[]) => {
    errors.push(args)
  }
  try {
    const posts = articles.getAllArticles()
    assert.deepEqual(
      posts.map(({ slug, date }) => ({ slug, date })),
      [
        { slug: 'newer', date: '2026-10-17' },
        { slug: 'older', date: '2026-10-01' },
      ],
    )
    assert.equal(posts[1].description, '')
    assert.equal(posts[1].lang, 'zh-CN')
    assert.deepEqual(posts[0].tags, [])
    assert.match(posts[1].content, /## Hello/)
    assert.equal(errors.length, 2)
    assert.deepEqual(
      articles.getArticlesByTag('typescript').map(({ slug }) => slug),
      ['older'],
    )
    assert.deepEqual(articles.getAllTags(), ['TypeScript'])
  } finally {
    console.error = originalError
  }
})

test('does not read a missing post or a path outside the article directory', () => {
  assert.equal(articles.getArticleBySlug('missing'), null)
  assert.equal(articles.getArticleBySlug('../../private'), null)
  assert.equal(articles.getArticleBySlug('..\\..\\private'), null)
  assert.equal(articles.getArticleBySlug(''), null)
})

test('reads explicit article languages and rejects invalid language metadata', () => {
  const directory = path.join(temporaryDirectory, 'content/articles')
  for (const lang of ['en', 'zh-CN']) {
    fs.writeFileSync(
      path.join(directory, 'language.md'),
      `---\ntitle: Language\ndate: '2026-10-17'\nlang: ${lang}\n---\nBody`,
    )
    assert.equal(articles.getArticleBySlug('language')?.lang, lang)
  }
  const originalError = console.error
  console.error = () => {}
  try {
    for (const lang of ['fr', '42', '[en]', 'null']) {
      fs.writeFileSync(
        path.join(directory, 'language.md'),
        `---\ntitle: Language\ndate: '2026-10-17'\nlang: ${lang}\n---\nBody`,
      )
      assert.equal(articles.getArticleBySlug('language'), null)
    }
  } finally {
    console.error = originalError
    fs.unlinkSync(path.join(directory, 'language.md'))
  }
})
