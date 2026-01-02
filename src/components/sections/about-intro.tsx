'use client'

import { motion } from 'motion/react'

export function AboutIntro() {
  return (
    <section id="about-us" className="bg-background relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-foreground font-serif text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              A legacy of <br />
              <span className="text-muted-foreground italic">trusted</span>{' '}
              <span className="text-primary">legal solutions.</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-xl leading-relaxed"
            >
              At Grench Legal, we don&apos;t just practice law; we craft
              strategies that protect and grow your interests. With deep
              expertise in corporate and commercial law, probate, matrimonial
              matters, and property management, our firm combines strategic
              foresight with practical solutions to safeguard what matters most
              to you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-border flex gap-12 border-t pt-8"
            >
              <div>
                <div className="text-foreground mb-2 font-serif text-3xl">
                  25+
                </div>
                <div className="text-muted-foreground text-sm tracking-wider uppercase">
                  Years Exp.
                </div>
              </div>
              <div>
                <div className="text-foreground mb-2 font-serif text-3xl">
                  500+
                </div>
                <div className="text-muted-foreground text-sm tracking-wider uppercase">
                  Cases Won
                </div>
              </div>
              <div>
                <div className="text-foreground mb-2 font-serif text-3xl">
                  $100M+
                </div>
                <div className="text-muted-foreground text-sm tracking-wider uppercase">
                  Recovered
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
