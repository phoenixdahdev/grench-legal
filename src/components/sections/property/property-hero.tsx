'use client'

import { motion } from 'motion/react'

export function PropertyHero() {
  return (
    <section className="bg-background relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="bg-background/80 absolute inset-0 backdrop-blur-[2px] dark:bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <span className="text-primary mb-6 block text-sm font-bold tracking-[0.3em] uppercase">
            Grench Properties
          </span>

          <h1 className="text-foreground mb-8 font-serif text-5xl leading-none md:text-7xl lg:text-8xl">
            Asset Management <br />
            <span className="text-muted-foreground italic">Redefined.</span>
          </h1>

          <p className="text-foreground/80 mx-auto max-w-2xl text-xl leading-relaxed md:text-2xl">
            Where legal precision meets operational excellence. We protect and
            maximize your real estate portfolio with an ironclad strategy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
