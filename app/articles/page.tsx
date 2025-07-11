import { getAllArticles, getAllTags } from '@/lib/articles';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import Link from 'next/link';
import { Calendar, Tag, Clock } from 'lucide-react';
import * as motion from 'motion/react-client';

export default async function ArticlesPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <div className="h-full p-4 sm:p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            文章
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            分享我的技术思考和开发经验
          </p>
        </motion.div>

        {/* Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Tag className="w-4 h-4 sm:w-5 sm:h-5" />
            标签
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <Link
                key={tag}
                href={`/articles/tag/${tag}`}
                className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs sm:text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Articles List */}
        <div className="space-y-6 sm:space-y-8">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                还没有文章，敬请期待！
              </p>
            </div>
          ) : (
            articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-card border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-border"
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-card-foreground hover:bg-clip-text hover:bg-gradient-to-r hover:to-cyan-500 hover:from-cyan-100 hover:text-transparent transition-all duration-300 leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mt-2 text-sm sm:text-base line-clamp-2 sm:line-clamp-none">
                        {article.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">
                          {format(new Date(article.date), 'yyyy年MM月dd日', { locale: zhCN })}
                        </span>
                        <span className="sm:hidden">
                          {format(new Date(article.date), 'MM/dd', { locale: zhCN })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                        约 {Math.ceil(article.description.length / 100)} 分钟
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {article.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                        >
                          #{tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{article.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}