import Link from 'next/link'
import { Rss } from 'lucide-react'
import { getAllTags, getArticlesByTag, getListedArticles } from '@/lib/articles'

type Props = { searchParams: Promise<{ tag?: string | string[] }> }

export default async function Page({ searchParams }: Props) {
  const { tag } = await searchParams
  const activeTag = typeof tag === 'string' ? tag : ''
  const articles = activeTag ? getArticlesByTag(activeTag) : getListedArticles()
  const tags = getAllTags()
  const compact = articles.length < 6

  return (
    <main id="main-content" className={`index-page page-enter${compact ? ' index-compact' : ''}`}>
      <div className="index-heading">
        <div>
          <h1>
            文章索引<span>.</span>
          </h1>
          <p>记录 · 构建</p>
        </div>
        <a href="/rss.xml" className="outline-link">
          <Rss aria-hidden="true" strokeWidth={1.5} className="link-icon" />
          订阅 RSS <span aria-hidden="true">↗</span>
        </a>
      </div>
      <nav className="topic-tabs" aria-label="按主题浏览">
        <Link href="/" className={!activeTag ? 'current' : undefined} aria-current={!activeTag ? 'page' : undefined}>
          全部文章
        </Link>
        {tags.map((item) => (
          <Link
            key={item}
            href={`/?tag=${encodeURIComponent(item)}`}
            className={item === activeTag ? 'current' : undefined}
            aria-current={item === activeTag ? 'page' : undefined}>
            {item}
          </Link>
        ))}
      </nav>
      {articles.length ? (
        <>
          <div className="column-head" aria-hidden="true">
            <span>#</span>
            <span>标题 / 摘要</span>
            <span>主题</span>
            <span>发布日期</span>
          </div>
          <section className="article-index" aria-label={activeTag ? `${activeTag} 文章` : '全部文章'}>
            {articles.map((article, i) => (
              <article className="index-row" key={article.slug}>
                <span className="row-number" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="row-content">
                  <h2>
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                      <span aria-hidden="true" className="row-arrow">
                        ↗
                      </span>
                    </Link>
                  </h2>
                  <p>{article.description}</p>
                  {compact && (
                    <p className="row-inline-meta">
                      {article.tags.map((item) => (
                        <Link key={item} href={`/?tag=${encodeURIComponent(item)}`}>
                          {item}
                        </Link>
                      ))}
                      <time dateTime={article.date}>{article.date.replaceAll('-', '.')}</time>
                    </p>
                  )}
                </div>
                <div className="row-tags">
                  {article.tags.map((item) => (
                    <Link key={item} href={`/?tag=${encodeURIComponent(item)}`}>
                      {item}
                    </Link>
                  ))}
                </div>
                <time className="row-date" dateTime={article.date}>
                  {article.date.replaceAll('-', '.')}
                </time>
              </article>
            ))}
          </section>
          <p className="index-count">
            <span>按日期从新到旧</span>
          </p>
        </>
      ) : (
        <div className="empty-state">
          <h2>{activeTag ? '这个主题还没有文章。' : '文字正在路上。'}</h2>
          <p>
            {activeTag ? '试试其他主题，或回到全部文章。' : '这里将记录 AI 应用、产品构建与商业探索。欢迎下次再来。'}
          </p>
          {activeTag && (
            <Link className="text-link" href="/">
              查看全部文章 →
            </Link>
          )}
        </div>
      )}
    </main>
  )
}
