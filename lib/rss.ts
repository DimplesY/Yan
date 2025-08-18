import { getAllArticles, type ArticleMetadata } from './articles';

interface RSSConfig {
  title: string;
  description: string;
  siteUrl: string;
  language: string;
  managingEditor: string;
  webMaster: string;
}

export function generateRSSFeed(config: RSSConfig): string {
  const articles = getAllArticles();
  const lastBuildDate = new Date().toUTCString();
  const pubDate = articles.length > 0 ? new Date(articles[0].date).toUTCString() : lastBuildDate;

  const rssItems = articles.map((article: ArticleMetadata) => {
    const articleUrl = `${config.siteUrl}/articles/${article.slug}`;
    const pubDate = new Date(article.date).toUTCString();
    
    return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${article.tags.join(', ')}]]></category>
    </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${config.title}]]></title>
    <description><![CDATA[${config.description}]]></description>
    <link>${config.siteUrl}</link>
    <language>${config.language}</language>
    <managingEditor>${config.managingEditor}</managingEditor>
    <webMaster>${config.webMaster}</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${pubDate}</pubDate>
    <atom:link href="${config.siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;
}
