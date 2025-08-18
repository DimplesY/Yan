import { getAllArticles } from '@/lib/articles';
import {
  createRSSFeed,
  createRSSHeaders,
  formatErrorMessage,
  DEFAULT_RSS_CONFIG,
} from '@/lib/rss-utils';
import { NextResponse } from 'next/server';


export const revalidate = 3600;

export async function GET() {
  try {
    const articles = getAllArticles();
    const feed = createRSSFeed(articles, DEFAULT_RSS_CONFIG);
    const rssXml = feed.rss2();
    const limitedArticles = articles.slice(0, DEFAULT_RSS_CONFIG.maxItems);
    const lastUpdated = limitedArticles.length > 0 
      ? new Date(limitedArticles[0].date) 
      : new Date();
    const headers = createRSSHeaders(
      limitedArticles.length,
      lastUpdated,
      DEFAULT_RSS_CONFIG.cacheMaxAge
    );

    return new NextResponse(rssXml, { headers });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    const errorMessage = formatErrorMessage(
      error,
      process.env.NODE_ENV === 'development'
    );

    return new NextResponse(errorMessage, { 
      status: 500,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }
}
