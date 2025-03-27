import { MarkdownAsync } from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const response = await fetch(`https://api.github.com/repos/DimplesY/Yan/issues/${id}`)
  const articles: { body: string } = await response.json()

  return (
    <main className="container mx-auto border-x h-full flex-1 box-border p-10 text-base">
      <article className="prose prose-zinc dark:prose-invert mx-auto whitespace-normal break-words">
        <MarkdownAsync remarkPlugins={[remarkGfm]}>{articles.body}</MarkdownAsync>
      </article>
    </main>
  )
}
