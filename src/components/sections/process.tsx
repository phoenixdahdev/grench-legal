'use client'

import { motion } from 'motion/react'

const steps = [
  {
    number: '01',
    title: 'Strategic Consultation',
    description:
      'We begin by dissecting the complexities of your case or portfolio. Understanding the nuance is the first step to domination.',
  },
  {
    number: '02',
    title: 'Architecting the Plan',
    description:
      'Our legal team builds a bespoke roadmap. We identify leverage points, potential risks, and the most direct path to victory.',
  },
  {
    number: '03',
    title: 'Aggressive Execution',
    description:
      'We move with speed and precision. Whether in the courtroom or at the negotiation table, we control the narrative.',
  },
  {
    number: '04',
    title: 'Resolution & Security',
    description:
      "We don't just win; we secure the future. Post-resolution, we ensure your assets and interests are fortified against future threats.",
  },
]

export function Process() {
  return (
    <section
      id="process"
      className="bg-background relative overflow-hidden py-32"
    >
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-primary mb-4 block text-sm font-medium tracking-widest uppercase">
            The Grench Method
          </span>
          <h2 className="text-foreground font-serif text-4xl md:text-5xl">
            Precision in{' '}
            <span className="text-muted-foreground italic">Motion</span>
          </h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connection Line (Desktop) */}
          <div className="via-primary/30 absolute top-12 right-0 left-0 hidden h-px bg-linear-to-r from-transparent to-transparent lg:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-border bg-card/50 hover:bg-card relative rounded-xl border p-6 backdrop-blur-sm transition-colors"
            >
              <div className="bg-background border-primary text-primary relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border font-serif text-xl shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-transform group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-foreground group-hover:text-primary mb-4 font-serif text-2xl transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
