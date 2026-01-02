'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { practiceAreas } from '~/lib/data/practice-areas'
import Link from 'next/link'

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="bg-background relative overflow-hidden py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-primary mb-4 block text-sm font-medium tracking-widest uppercase">
              Our Expertise
            </span>
            <h2 className="text-foreground font-serif text-4xl md:text-6xl">
              Practice Areas
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg">
            Specialized legal counsel across a spectrum of industries and
            personal matters.
          </p>
        </div>

        <div className="border-border border-t">
          {practiceAreas.map((practice, index) => (
            <Link
              key={practice.title}
              href={`/practice-areas/${practice.slug}`}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-border hover:border-foreground/20 relative border-b transition-colors duration-500"
              >
                <div className="relative z-10 flex flex-col gap-8 py-12 transition-transform duration-500 group-hover:translate-x-4 md:flex-row md:items-baseline">
                  <span className="text-muted-foreground/60 font-mono text-sm">
                    /{practice.id}
                  </span>
                  <h3 className="group-hover:text-primary text-muted-foreground font-serif text-3xl transition-colors md:text-4xl">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors md:ml-auto md:max-w-xs">
                    {practice.shortDescription}
                  </p>
                  <div className="justify-self-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:ml-12">
                    <ArrowUpRight className="text-primary h-6 w-6" />
                  </div>
                </div>

                <div className="group-hover:bg-muted/50 absolute inset-0 z-0 bg-transparent transition-colors duration-500" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
