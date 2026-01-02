import { practiceAreas } from '~/lib/data/practice-areas'
import { notFound } from 'next/navigation'
import { ContactForm } from '~/components/sections/contact/contact-form'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Metadata } from 'next'

export function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }))
}

export async function generateMetadata(
  props: PageProps<'/practice-areas/[slug]'>
): Promise<Metadata> {
  const params = await props.params
  const area = practiceAreas.find((p) => p.slug === params.slug)

  if (!area) {
    return {
      title: 'Practice Area Not Found',
    }
  }

  return {
    title: area.title,
    description: area.shortDescription,
  }
}

export default async function PracticeAreaPage(
  props: PageProps<'/practice-areas/[slug]'>
) {
  const params = await props.params
  const area = practiceAreas.find((p) => p.slug === params.slug)

  if (!area) {
    notFound()
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 w-full overflow-hidden">
        <Image
          src={area.image}
          alt={area.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto flex h-full flex-col justify-center px-6">
          <Link
            href="/#practice-areas"
            className="text-primary mb-8 flex w-fit items-center gap-2 text-sm font-medium tracking-widest uppercase transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Practice Areas
          </Link>

          <span className="mb-4 font-mono text-sm text-white/80">
            /{area.id}
          </span>
          <h1 className="font-serif text-5xl text-white md:text-7xl">
            {area.title}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Main Description */}
            <div className="lg:col-span-7">
              <h2 className="text-foreground mb-8 font-serif text-3xl">
                Overview
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {area.fullDescription}
              </p>

              <div className="border-primary/30 mt-12 border-l-2 pl-8">
                <p className="text-foreground text-xl font-medium italic">
                  &quot;We don&apos;t simply advise; we intervene to change
                  outcomes.&quot;
                </p>
              </div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-5">
              <div className="bg-muted/30 border-border border p-8">
                <h3 className="text-foreground mb-6 font-serif text-2xl">
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {area.services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {area.stats && (
            <div className="border-border mt-20 border-y py-12">
              <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                {area.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-primary mb-2 font-serif text-4xl md:text-5xl">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm tracking-widest uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Section */}
          {area.faqs && (
            <div className="mt-20 max-w-3xl">
              <h3 className="text-foreground mb-8 font-serif text-3xl">
                Common Inquiries
              </h3>
              <div className="space-y-8">
                {area.faqs.map((faq, i) => (
                  <div key={i} className="group">
                    <h4 className="text-foreground group-hover:text-primary mb-3 text-xl font-medium transition-colors">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground border-border group-hover:border-primary border-l-2 pl-4 leading-relaxed transition-colors">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <div className="bg-secondary/10">
        <ContactForm />
      </div>
    </div>
  )
}
