import { getArticlesByTag, getAllTags } from '@/lib/articles';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react';
import * as motion from 'motion/react-client';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(tag => ({
    tag: tag,
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  
  return {
    title: `标签: ${decodedTag}`,
    description: `查看所有关于 ${decodedTag} 的文章`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const articles = getArticlesByTag(decodedTag);
  
  if (articles.length === 0) {
    notFound();
  }
  
  return (
    <div className="h-full p-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/articles"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            返回文章列表
          </Link>
        </motion.div>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
            <Tag className="w-8 h-8" />
            <span className="bg-clip-text bg-gradient-to-r to-cyan-500 from-cyan-100 text-transparent">
              {decodedTag}
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            共 {articles.length} 篇文章
          </p>
        </motion.div>
        
        {/* Articles List */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-border"
            >
              <Link href={`/articles/${article.slug}`}>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground hover:bg-clip-text hover:bg-gradient-to-r hover:to-cyan-500 hover:from-cyan-100 hover:text-transparent transition-all duration-300">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground mt-2">
                      {article.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(article.date), 'yyyy年MM月dd日', { locale: zhCN })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      约 {Math.ceil(article.description.length / 100)} 分钟阅读
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map(articleTag => (
                      <span
                        key={articleTag}
                        className={`px-2 py-1 rounded text-sm border ${
                          articleTag === decodedTag
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-primary/10 text-primary border-primary/20'
                        }`}
                      >
                        #{articleTag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}