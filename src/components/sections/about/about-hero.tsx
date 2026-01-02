'use client'

import { motion } from 'motion/react'

export function AboutHero() {
  return (
    <section className="bg-background relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="bg-primary h-px w-12" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Who We Are
            </span>
          </div>

          <h1 className="text-foreground mb-8 font-serif text-5xl leading-none md:text-7xl lg:text-8xl">
            The Architects <br />
            <span className="text-muted-foreground italic">of Victory.</span>
          </h1>

          <p className="text-muted-foreground/80 max-w-2xl text-xl leading-relaxed md:text-2xl">
            We are not just litigators; we are strategists. Dedicated to
            rewriting the odds in your favor through relentless preparation and
            absolute precision.
          </p>
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <div className="from-primary/5 pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-linear-to-l to-transparent" />
      <div className="bg-primary/10 absolute right-10 bottom-0 h-64 w-64 rounded-full blur-[120px]" />
    </section>
  )
}
