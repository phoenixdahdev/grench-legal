'use client'

import { motion } from 'motion/react'
import { Scale, Shield, Landmark, Gavel } from 'lucide-react'

const values = [
  {
    title: 'Relentless Advocacy',
    desc: 'We do not yield. Every case is fought with the mindset that failure is an impossibility.',
    icon: Shield,
  },
  {
    title: 'Precise Strategy',
    desc: 'Victory is engineered, not accidental. We plan ten steps ahead of the opposition.',
    icon: Scale,
  },
  {
    title: 'Absolute Discretion',
    desc: 'Your business is yours alone. We operate with the highest level of confidentiality.',
    icon: Landmark,
  },
  {
    title: 'Uncompromising Integrity',
    desc: 'We hold ourselves to a standard that exceeds the bar. Trust is our currency.',
    icon: Gavel,
  },
]

export function Values() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-foreground mb-8 font-serif text-4xl text-balance md:text-6xl">
              Principles that{' '}
              <span className="text-muted-foreground italic">define</span> us.
            </h2>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              In a world of ambiguity, we stand on pillars of certainty. Our
              values are not just words on a wall; they are the framework for
              every decision we make.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-primary/30 hover:border-primary group border-l-2 py-2 pl-6 transition-colors"
              >
                <item.icon className="text-primary mb-4 h-8 w-8 opacity-50 transition-opacity group-hover:opacity-100" />
                <h3 className="text-foreground mb-2 font-serif text-xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
