import { getPublication } from '~/app/actions/publications'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SimpleViewer } from '~/components/admin/simple-viewer' // Need to create this

export const dynamic = 'force-dynamic'

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPublication(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <article className="container mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-primary mb-8 flex w-fit items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Publications
        </Link>

        <header className="mb-12">
          <div className="text-primary mb-4 text-sm font-semibold tracking-wider uppercase">
            Legal Insight
          </div>
          <h1 className="text-foreground mb-6 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            <time dateTime={post.created_at?.toISOString()}>
              {format(post.created_at || new Date(), 'MMMM d, yyyy')}
            </time>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:text-muted-foreground/90 max-w-none">
          <SimpleViewer content={post.content} />
        </div>
      </article>
    </div>
  )
}
