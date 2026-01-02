'use client'

import { motion } from 'motion/react'

export function AboutIntro() {
  return (
    <section id="about-us" className="relative bg-zinc-950 py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
              A heritage of <br />
              <span className="text-zinc-500 italic">unwavering</span>{' '}
              <span className="text-primary">advocacy.</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl leading-relaxed text-zinc-400"
            >
              At Grench Legal, we don't just practice law; we architect
              solutions. Our firm was founded on the principle that true legal
              excellence requires a balance of aggressive representation and
              strategic foresight.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-12 border-t border-zinc-900 pt-8"
            >
              <div>
                <div className="mb-2 font-serif text-3xl text-white">25+</div>
                <div className="text-sm tracking-wider text-zinc-500 uppercase">
                  Years Exp.
                </div>
              </div>
              <div>
                <div className="mb-2 font-serif text-3xl text-white">500+</div>
                <div className="text-sm tracking-wider text-zinc-500 uppercase">
                  Cases Won
                </div>
              </div>
              <div>
                <div className="mb-2 font-serif text-3xl text-white">
                  $100M+
                </div>
                <div className="text-sm tracking-wider text-zinc-500 uppercase">
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
