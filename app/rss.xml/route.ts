import { getAllArticles } from '@/lib/articles';
import {
  createRSSFeed,
  createRSSHeaders,
  formatErrorMessage,
  DEFAULT_RSS_CONFIG,
} from '@/lib/rss-utils';
import { NextResponse } from 'next/server';

/**
 * RSS feed API路由
 * 
 * @returns RSS XML格式的文章feed
 */
export async function GET() {
  try {
    // 获取所有文章
    const articles = getAllArticles();
    
    // 创建RSS feed
    const feed = createRSSFeed(articles, DEFAULT_RSS_CONFIG);
    
    // 生成RSS XML
    const rssXml = feed.rss2();
    
    // 计算响应头数据
    const limitedArticles = articles.slice(0, DEFAULT_RSS_CONFIG.maxItems);
    const lastUpdated = limitedArticles.length > 0 
      ? new Date(limitedArticles[0].date) 
      : new Date();
    
    // 创建响应头
    const headers = createRSSHeaders(
      limitedArticles.length,
      lastUpdated,
      DEFAULT_RSS_CONFIG.cacheMaxAge
    );

    return new NextResponse(rssXml, { headers });
  } catch (error) {
    console.error('生成RSS feed时出错:', error);
    
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

/**
 * 设置路由段配置
 * 静态生成，每小时重新验证
 */
export const revalidate = 3600; // 1小时
