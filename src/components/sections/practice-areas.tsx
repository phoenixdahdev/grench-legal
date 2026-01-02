'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const practices = [
  {
    id: '01',
    title: 'Corporate & Commercial',
    description: 'Mergers, acquisitions, and strategic formation.',
  },
  {
    id: '02',
    title: 'Employment Matters',
    description: 'Workplace disputes, contracts, and compliance.',
  },
  {
    id: '03',
    title: 'Intellectual Property',
    description: 'Copyrights, trademarks, and asset protection.',
  },
  {
    id: '04',
    title: 'Probate & Estate',
    description: 'Wills, trusts, and compassionate administration.',
  },
  {
    id: '05',
    title: 'Real Estate',
    description: 'Transactions, zoning, and property law.',
  },
  {
    id: '06',
    title: 'Entertainment Law',
    description: 'Representation for talent and production companies.',
  },
]

export function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="relative overflow-hidden bg-zinc-950 py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-primary mb-4 block text-sm font-medium tracking-widest uppercase">
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl text-white md:text-6xl">
              Practice Areas
            </h2>
          </div>
          <p className="max-w-sm text-lg text-zinc-500">
            Specialized legal counsel across a spectrum of industries and
            personal matters.
          </p>
        </div>

        <div className="border-t border-zinc-900">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-b border-zinc-900 transition-colors duration-500 hover:border-zinc-800"
            >
              <div className="relative z-10 flex flex-col gap-8 py-12 transition-transform duration-500 group-hover:translate-x-4 md:flex-row md:items-baseline">
                <span className="font-mono text-sm text-zinc-600">
                  /{practice.id}
                </span>
                <h3 className="group-hover:text-primary font-serif text-3xl text-zinc-300 transition-colors md:text-4xl">
                  {practice.title}
                </h3>
                <p className="text-zinc-500 transition-colors group-hover:text-white md:ml-auto md:max-w-xs">
                  {practice.description}
                </p>
                <div className="justify-self-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:ml-12">
                  <ArrowUpRight className="text-primary h-6 w-6" />
                </div>
              </div>

              {/* Hover Background Hue */}
              <div className="absolute inset-0 -z-0 bg-zinc-900/0 transition-colors duration-500 group-hover:bg-zinc-900/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
