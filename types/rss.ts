/**
 * RSS配置类型定义
 */
export interface RSSConfig {
  title: string;
  description: string;
  siteUrl: string;
  language: string;
  author: {
    name: string;
    email: string;
    link: string;
  };
  copyright: string;
  feedLinks: {
    rss2: string;
  };
  cacheMaxAge: number;
  maxItems: number;
}

/**
 * RSS feed项目类型
 */
export interface RSSFeedItem {
  title: string;
  id: string;
  link: string;
  description: string;
  content?: string;
  author: Array<{
    name: string;
    email?: string;
    link?: string;
  }>;
  date: Date;
  category?: Array<{
    name: string;
    domain?: string;
  }>;
}

/**
 * RSS响应头类型
 */
export interface RSSHeaders {
  'Content-Type': string;
  'Cache-Control': string;
  'X-RSS-Items': string;
  'Last-Modified': string;
}
