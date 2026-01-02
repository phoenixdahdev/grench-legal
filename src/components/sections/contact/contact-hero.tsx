'use client'

import { motion } from 'motion/react'

export function ContactHero() {
  return (
    <section className="bg-background relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-24">
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
              Inquiries
            </span>
          </div>

          <h1 className="text-foreground mb-8 font-serif text-5xl leading-none md:text-7xl lg:text-8xl">
            Start the <br />
            <span className="text-muted-foreground italic">Conversation.</span>
          </h1>

          <p className="text-muted-foreground/80 max-w-2xl text-xl leading-relaxed md:text-2xl">
            Discretion and precision are the hallmarks of our practice. Reach
            out to discuss your legal or property management needs.
          </p>
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <div className="from-primary/5 pointer-events-none absolute top-1/4 right-0 h-1/2 w-1/2 skew-y-12 bg-linear-to-b to-transparent" />
    </section>
  )
}
