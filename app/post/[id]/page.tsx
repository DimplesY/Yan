import { MDXRemote } from 'next-mdx-remote/rsc'

function generateStaticParams() {}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {

  const { id } = await params


  return (
    <main className="container mx-auto border-x h-full flex-1 box-border p-10 text-base">
      <article className="prose prose-zinc dark:prose-invert mx-auto">
        <MDXRemote source={'WIP'} />
      </article>
    </main>
  )
}
