'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function Story() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] w-full lg:col-span-5 lg:aspect-auto lg:h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop"
              alt="Law Firm Office"
              fill
              className="object-cover grayscale transition-all duration-1000 hover:grayscale-0"
            />
            <div className="bg-primary/20 absolute -right-6 -bottom-6 h-24 w-24 rounded-full backdrop-blur-md" />
          </motion.div>

          <div className="lg:col-span-7 lg:pl-12">
            <span className="text-primary mb-4 block text-xs font-bold tracking-widest uppercase">
              Our Origin
            </span>
            <h2 className="text-foreground mb-8 font-serif text-3xl md:text-5xl">
              From a singular vision to <br />
              <span className="text-muted-foreground italic">
                global influence.
              </span>
            </h2>

            <div className="text-muted-foreground space-y-6 text-lg leading-relaxed">
              <p>
                Grench Legal was established in 1999 with a clear directive: to
                disrupt the traditional legal landscape. Where others saw
                obstacles, we saw opportunities. Where others advised caution,
                we executed with calculated aggression.
              </p>
              <p>
                What started as a boutique consultancy for high-net-worth
                individuals has evolved into a full-service powerhouse, handling
                everything from billion-dollar mergers to complex family estate
                planning.
              </p>
              <p>
                Our growth is not measured in headcount, but in the weight of
                the victories we secure for our clients. We remain a firm where
                personal attention is not a luxury, but a standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
