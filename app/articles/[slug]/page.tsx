import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownCode } from '@/components/markdown-code'
import { getAllArticles, getArticleBySlug } from '@/lib/articles'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllArticles().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <main id="main-content" className="reading-page page-enter">
      <Link href="/" className="text-link back-link">
        ← 所有文章
      </Link>
      <article>
        <header className="reading-header">
          <div className="article-meta">
            <span>{article.tags.join(' · ')}</span>
            <time dateTime={article.date}>{article.date.replaceAll('-', '.')}</time>
          </div>
          <h1>{article.title}</h1>
          {article.description && <p className="reading-description">{article.description}</p>}
          <div className="byline">
            DimplesY <span aria-hidden="true">/</span> AI 应用开发者
          </div>
        </header>
        <div className="article-body">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code: MarkdownCode,
              table: ({ children }) => (
                <div className="table-scroll" tabIndex={0} role="region" aria-label="文章表格">
                  <table>{children}</table>
                </div>
              ),
            }}>
            {article.content}
          </Markdown>
        </div>
      </article>
      <div className="reading-end">
        <Link className="text-link" href="/">
          返回文章列表 →
        </Link>
      </div>
    </main>
  )
}
