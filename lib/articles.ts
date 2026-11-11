import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface Article {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  content: string
  unlisted: boolean
}

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) return []
  return fs
    .readdirSync(articlesDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -3))
}

export function getArticleBySlug(slug: string): Article | null {
  if (!slug || path.basename(slug) !== slug || slug.includes('\\')) return null

  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) return null

    const { data, content } = matter(fs.readFileSync(fullPath, 'utf8'))
    const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date
    if (
      typeof data.title !== 'string' ||
      !data.title.trim() ||
      typeof date !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      new Date(`${date}T00:00:00Z`).toISOString().slice(0, 10) !== date ||
      (data.description !== undefined && typeof data.description !== 'string') ||
      (data.tags !== undefined &&
        (!Array.isArray(data.tags) || !data.tags.every((tag: unknown) => typeof tag === 'string'))) ||
      (data.unlisted !== undefined && typeof data.unlisted !== 'boolean')
    ) {
      throw new Error(
        '文章需要有效的 title、YYYY-MM-DD 格式的 date，以及可选的 description 字符串、tags 字符串数组和 unlisted 布尔值',
      )
    }

    return {
      slug,
      title: data.title.trim(),
      date,
      description: data.description ?? '',
      tags: data.tags ?? [],
      content,
      unlisted: data.unlisted ?? false,
    }
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error)
    return null
  }
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map(getArticleBySlug)
    .filter((article): article is Article => article !== null)
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}

// 索引、主题筛选与 RSS 只使用列出了的文章；unlisted 的页面仍可直达 URL。
export function getListedArticles(): Article[] {
  return getAllArticles().filter((article) => !article.unlisted)
}

export function getArticlesByTag(tag: string): Article[] {
  return getListedArticles().filter((article) => article.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
}

export function getAllTags(): string[] {
  return Array.from(new Set(getListedArticles().flatMap((article) => article.tags))).sort()
}
