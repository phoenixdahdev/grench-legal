'use client'

import { motion } from 'motion/react'
import { Users, Wrench, BarChart3, Clock } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Tenant Selection',
    desc: ' rigorous background checks, credit analysis, and litigation history review.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Upkeep',
    desc: '24/7 emergency response and preventative maintenance schedules to preserve asset value.',
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    desc: 'Monthly owner statements, expense tracking, and year-end tax preparation documents.',
  },
  {
    icon: Clock,
    title: '24/7 Portal Access',
    desc: "Real-time visibility into your portfolio's performance via our secure owner portal.",
  },
]

export function ServicesDetail() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-foreground mb-4 font-serif text-4xl">
            Comprehensive Care
          </h2>
          <p className="text-muted-foreground">
            From the physical asset to the financial bottom line, we handle
            everything.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border-border hover:border-primary group border p-8 transition-colors"
            >
              <s.icon className="text-primary mb-6 h-10 w-10 transition-transform group-hover:scale-110" />
              <h3 className="text-foreground mb-3 font-serif text-xl">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
