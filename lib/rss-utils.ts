import type { RSSConfig, RSSFeedItem } from '@/types/rss'
import { Feed } from 'feed'
import type { Article } from './articles'

/**
 * 默认RSS配置
 */
export const DEFAULT_RSS_CONFIG: RSSConfig = {
  title: 'DimplesY',
  description: "DimplesY's Blog - 技术分享与思考",
  siteUrl: 'https://www.dimples.top',
  language: 'zh-CN',
  author: {
    name: 'DimplesY',
    email: 'dimplesyj@gmail.com',
    link: 'https://www.dimples.top',
  },
  copyright: `All rights reserved ${new Date().getFullYear()}, DimplesY`,
  feedLinks: {
    rss2: 'https://www.dimples.top/rss.xml',
  },
  cacheMaxAge: 3600,
  maxItems: 50,
}

/**
 * 将文章元数据转换为RSS feed项目
 */
export function articleToRSSItem(article: Article, config: RSSConfig): RSSFeedItem {
  return {
    title: article.title,
    id: `${config.siteUrl}/articles/${article.slug}`,
    link: `${config.siteUrl}/articles/${article.slug}`,
    description: article.description,
    content: article.description,
    author: [config.author],
    date: new Date(article.date),
    category: article.tags?.map((tag) => ({ name: tag })) || [],
  }
}

/**
 * 创建RSS Feed实例
 */
export function createRSSFeed(articles: Article[], config: RSSConfig = DEFAULT_RSS_CONFIG): Feed {
  const limitedArticles = articles.slice(0, config.maxItems)
  const lastUpdated = limitedArticles.length > 0 ? new Date(limitedArticles[0].date) : new Date()

  const feed = new Feed({
    title: config.title,
    description: config.description,
    id: config.siteUrl,
    link: config.siteUrl,
    language: config.language,
    image: `${config.siteUrl}/favicon.ico`,
    favicon: `${config.siteUrl}/favicon.ico`,
    copyright: config.copyright,
    updated: lastUpdated,
    generator: 'Next.js Feed Generator',
    feedLinks: config.feedLinks,
    author: config.author,
  })

  // 添加文章到feed
  limitedArticles.forEach((article) => {
    try {
      const rssItem = articleToRSSItem(article, config)
      feed.addItem(rssItem)
    } catch (error) {
      console.warn(`添加文章 ${article.slug} 到RSS feed时出错:`, error)
    }
  })

  return feed
}

/**
 * 生成RSS响应头
 */
export function createRSSHeaders(articleCount: number, lastUpdated: Date, cacheMaxAge: number) {
  return {
    'Content-Type': 'application/rss+xml; charset=utf-8',
    'Cache-Control': `public, max-age=${cacheMaxAge}, s-maxage=${cacheMaxAge}`,
    'X-RSS-Items': articleCount.toString(),
    'Last-Modified': lastUpdated.toUTCString(),
  }
}

/**
 * 格式化错误消息
 */
export function formatErrorMessage(error: unknown, isDevelopment: boolean = false): string {
  if (isDevelopment) {
    return `RSS生成失败: ${error instanceof Error ? error.message : '未知错误'}`
  }
  return 'RSS feed暂时不可用，请稍后再试'
}
