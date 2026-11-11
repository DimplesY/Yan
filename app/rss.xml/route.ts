import { getListedArticles } from '@/lib/articles'
import { createRSSFeed, createRSSHeaders, DEFAULT_RSS_CONFIG } from '@/lib/rss-utils'

export const dynamic = 'force-static'

export function GET() {
  const articles = getListedArticles()
  const lastUpdated = articles.length ? new Date(articles[0].date) : new Date()
  return new Response(createRSSFeed(articles).rss2(), {
    headers: createRSSHeaders(articles.length, lastUpdated, DEFAULT_RSS_CONFIG.cacheMaxAge),
  })
}
