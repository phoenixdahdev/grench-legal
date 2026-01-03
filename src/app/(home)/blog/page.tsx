import Link from 'next/link'
import { format } from 'date-fns'
import { getPublications } from '~/app/actions/publications'

export default async function BlogPage() {
  const publications = await getPublications()

  return (
    <div className="pt-20">
      <div className="bg-background relative py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-foreground font-serif text-5xl font-medium md:text-6xl">
            Publications
          </h1>
          <p className="text-muted-foreground mt-4 text-xl">
            Legal insights, updates, and thought leadership.
          </p>
        </div>
      </div>

      <div className="bg-background min-h-screen py-12">
        <div className="container mx-auto px-6">
          {publications.length === 0 ? (
            <div className="text-center">
              <p className="text-muted-foreground">No publications found.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publications.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-card border-border hover:border-primary block overflow-hidden rounded-lg border p-6 transition-colors"
                >
                  <div className="mb-4">
                    <span className="text-primary text-xs font-semibold tracking-wider uppercase">
                      Analysis
                    </span>
                  </div>
                  <h3 className="text-foreground group-hover:text-primary mb-3 font-serif text-2xl transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-muted-foreground text-sm">
                    {format(post.created_at || new Date(), 'MMMM d, yyyy')}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
