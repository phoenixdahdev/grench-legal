'use client'

import { motion } from 'motion/react'
import { Trophy, Star, Award, Medal } from 'lucide-react'

const awards = [
  {
    icon: Trophy,
    year: '2024',
    title: 'Global Firm of the Year',
    organization: 'International Legal Alliance',
  },
  {
    icon: Star,
    year: '2023',
    title: 'Top Tier Litigation',
    organization: 'Legal 500',
  },
  {
    icon: Award,
    year: '2023',
    title: 'Noteable Practitioner',
    organization: 'Chambers & Partners',
  },
  {
    icon: Medal,
    year: '2022',
    title: 'Excellence in Corporate Law',
    organization: 'The American Lawyer',
  },
]

export function Awards() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-primary mb-4 block text-xs font-bold tracking-widest uppercase">
            Recognition
          </span>
          <h2 className="text-foreground mb-6 font-serif text-4xl md:text-5xl">
            Honored by Peers
          </h2>
          <p className="text-muted-foreground text-lg">
            While our client's success is our primary reward, we are humbled by
            the recognition we've received from the global legal community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border-border hover:border-primary/50 bg-secondary/5 border p-6 text-center transition-colors"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                <award.icon className="text-primary h-8 w-8" />
              </div>
              <div className="text-muted-foreground mb-2 font-mono text-sm">
                {award.year}
              </div>
              <h3 className="text-foreground mb-1 font-serif text-lg">
                {award.title}
              </h3>
              <p className="text-muted-foreground text-xs tracking-wider uppercase">
                {award.organization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
