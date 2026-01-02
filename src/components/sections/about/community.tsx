'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export function Community() {
  return (
    <section className="bg-muted/20 overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="bg-primary/10 absolute -top-10 -left-10 h-40 w-40 rounded-full blur-3xl" />
              <h2 className="text-foreground relative mb-6 font-serif text-4xl md:text-5xl">
                Beyond the <br />
                <span className="text-primary italic">Courtroom.</span>
              </h2>
            </div>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We believe that justice should not be a privilege reserved for the
              few. Grench Legal dedicates over{' '}
              <strong>5,000 hours annually</strong> to pro bono representation
              for underserved communities.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-primary/40 font-serif text-4xl">01</div>
                <div>
                  <h4 className="text-foreground mb-1 text-xl font-medium">
                    Civil Rights Advocacy
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Defending constitutional liberties in landmark cases.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary/40 font-serif text-4xl">02</div>
                <div>
                  <h4 className="text-foreground mb-1 text-xl font-medium">
                    Housing Justice
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Providing free legal counsel to families facing unlawful
                    eviction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-primary/40 font-serif text-4xl">03</div>
                <div>
                  <h4 className="text-foreground mb-1 text-xl font-medium">
                    Non-Profit Governance
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Advising local charities on structure and compliance at no
                    cost.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 h-[600px] w-full lg:order-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000&auto=format&fit=crop"
              alt="Community Work"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent lg:hidden" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
