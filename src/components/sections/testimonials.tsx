'use client'

import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Grench Legal didn't just handle our IP suit; they dismantled the opposition entirely. Their strategic foresight is unmatched.",
    author: 'Jonathan R.',
    role: 'CEO, TechFlow Systems',
  },
  {
    quote:
      'Navigating a high-stakes divorce is never easy, but their team brought a level of calm and aggression that secured everything I fought for.',
    author: 'Elena M.',
    role: 'Private Client',
  },
  {
    quote:
      'Our real estate portfolio has never been more profitable. Their property management arm is as sharp as their legal team.',
    author: 'David K.',
    role: 'Director, K-Holdings',
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/30 relative py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-foreground mb-16 text-center font-serif text-4xl md:text-5xl">
          Voices of <span className="text-primary italic">Victory</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-border group hover:border-primary/50 relative border p-8 transition-colors md:p-10"
            >
              <Quote className="text-primary/40 group-hover:text-primary mb-6 h-8 w-8 transition-colors" />
              <p className="text-foreground mb-8 text-lg leading-relaxed italic">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <div className="text-primary text-sm font-bold tracking-wider uppercase">
                  {t.author}
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
