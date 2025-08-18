import { generateRSSFeed } from '@/lib/rss';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const rssConfig = {
      title: 'DimplesY',
      description: "DimplesY's Blog - 技术分享与思考",
      siteUrl: process.env.SITE_URL || 'https://dimples.top',
      language: 'zh-CN',
      managingEditor: 'dimplesyj@gmail.com (DimplesY)',
      webMaster: 'dimplesyj@gmail.com (DimplesY)',
    };

    const rssXml = generateRSSFeed(rssConfig);

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('生成RSS feed时出错:', error);
    return new NextResponse('RSS feed生成失败', { status: 500 });
  }
}
