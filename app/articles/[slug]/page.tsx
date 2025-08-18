import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, ArrowLeft, Clock, Tag } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as motion from 'motion/react-client'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyButton } from '@/components/copy-button'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: article.title,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const readingTime = Math.ceil(article.content.length / 500)

  return (
    <div className="h-full p-4 sm:p-6 lg:p-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 sm:mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">返回文章列表</span>
            <span className="sm:hidden">返回</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">{article.title}</h1>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">{article.description}</p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">{format(new Date(article.date), 'yyyy年MM月dd日', { locale: zhCN })}</span>
              <span className="sm:hidden">{format(new Date(article.date), 'MM/dd', { locale: zhCN })}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />约 {readingTime} 分钟阅读
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles/tag/${tag}`}
                className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm hover:bg-primary/20 transition-colors border border-primary/20">
                <Tag className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                {tag}
              </Link>
            ))}
          </div>
        </motion.header>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-sm sm:prose-base lg:prose-lg prose-strong:text-foreground text-foreground max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              code(props: any) {
                const { inline, className, children, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                const language = match ? match[1] : ''
                const codeString = String(children).replace(/\n$/, '')

                return !inline && match ? (
                  <div className="relative group">
                    <SyntaxHighlighter
                      style={oneDark}
                      language={language}
                      PreTag="div"
                      customStyle={{
                        margin: '0',
                        borderRadius: '0.5rem',
                        fontSize: '0.75rem', // 移动端使用更小字体
                        background: 'var(--muted)',
                        border: '1px solid var(--border)',
                        paddingTop: language ? '2.5rem' : '1rem',
                        paddingLeft: '0.75rem',
                        paddingRight: '0.75rem',
                        paddingBottom: '1rem',
                      }}
                      codeTagProps={{
                        style: {
                          fontSize: '0.75rem', // 移动端代码字体
                          fontFamily: 'var(--font-mono)',
                        },
                      }}
                      className="text-xs sm:text-sm overflow-x-auto"
                      {...rest}>
                      {codeString}
                    </SyntaxHighlighter>
                    <div className="absolute top-2 right-2 flex items-center gap-2">
                      <CopyButton text={codeString} />
                    </div>
                    {language && <span className="absolute top-3 left-3 text-xs text-muted-foreground/70 font-medium">{language}</span>}
                  </div>
                ) : (
                  <code className={className} {...rest}>
                    {children}
                  </code>
                )
              },
            }}>
            {article.content}
          </ReactMarkdown>
        </motion.article>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-primary hover:bg-clip-text hover:bg-gradient-to-r hover:to-cyan-500 hover:from-cyan-100 hover:text-transparent transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            返回文章列表
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
