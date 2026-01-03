import { teamMembers } from '~/lib/data/team'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Metadata } from 'next'
import GoBackButton from './go-back'

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export async function generateMetadata(
  props: PageProps<'/team/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params
  const member = teamMembers.find((m) => m.slug === slug)

  if (!member) {
    return {
      title: 'Member Not Found',
    }
  }

  return {
    title: `${member.name} | Grench Legal`,
    description: member.shortBio || member.fullBio.substring(0, 160),
    openGraph: {
      title: `${member.name} - ${member.role} | Grench Legal`,
      description: member.shortBio || member.fullBio.substring(0, 160),
      images: [
        {
          url: member.image,
          width: 800,
          height: 600,
          alt: member.name,
        },
      ],
    },
  }
}

export default async function TeamMemberPage(props: PageProps<'/team/[slug]'>) {
  const { slug } = await props.params
  const member = teamMembers.find((m) => m.slug === slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen">
      <GoBackButton />

      <main className="container mx-auto px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Image & Quick Info */}
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="bg-muted relative aspect-3/4 w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="bg-muted/30 border-border rounded-lg border p-8">
              <h3 className="mb-4 font-serif text-xl">At a Glance</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground block text-xs tracking-widest uppercase">
                    Role
                  </span>
                  <span className="text-foreground font-medium">
                    {member.role}
                  </span>
                </div>
                {member.qualifications && (
                  <div>
                    <span className="text-muted-foreground block text-xs tracking-widest uppercase">
                      Qualifications
                    </span>
                    <span className="text-foreground font-medium">
                      {member.qualifications}
                    </span>
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground block text-xs tracking-widest uppercase">
                    Specialty
                  </span>
                  <span className="text-foreground font-medium">
                    {member.specialty}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Content */}
          <div className="lg:col-span-7 lg:pt-8">
            <div className="mb-10">
              <h1 className="text-foreground mb-2 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                {member.name}
                {member.qualifications && (
                  <span className="text-muted-foreground ml-3 block text-2xl lg:inline lg:text-3xl">
                    {member.qualifications}
                  </span>
                )}
              </h1>
              <p className="text-primary text-xl font-medium tracking-wide uppercase">
                {member.role}
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert prose-headings:font-serif prose-p:text-muted-foreground/90 max-w-none">
              {member.fullBio.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
