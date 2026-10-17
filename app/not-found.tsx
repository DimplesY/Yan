import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" className="empty-state page-enter">
      <p className="article-meta">404</p>
      <h1>这一页，还没有写下。</h1>
      <p>文章可能已移动，或这个地址有一点偏差。</p>
      <Link href="/" className="text-link">
        回到文章列表 →
      </Link>
    </main>
  )
}
