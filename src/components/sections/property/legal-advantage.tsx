'use client'

import { motion } from 'motion/react'
import { ShieldAlert, Gavel, FileText } from 'lucide-react'

export function LegalAdvantage() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-foreground mb-6 font-serif text-4xl md:text-5xl">
              The Attorney-Led <br />
              <span className="text-primary italic">Advantage.</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Most property management firms are reactive. We are proactive. By
              integrating legal counsel directly into daily operations, we
              eliminate risks before they become lawsuits.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Gavel,
                  title: 'Immediate Eviction Handling',
                  desc: 'No delays. We handle unlawful detainers in-house.',
                },
                {
                  icon: FileText,
                  title: 'Ironclad Lease Agreements',
                  desc: 'Drafted by litigators, not downloaded from the internet.',
                },
                {
                  icon: ShieldAlert,
                  title: 'Liability Mitigation',
                  desc: 'Constant compliance checks with changing housing laws.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    <item.icon className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-muted relative h-150 overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-zinc-900 to-zinc-800" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute right-10 bottom-10 left-10 border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-2 font-serif text-4xl text-white">0%</div>
              <div className="text-sm tracking-widest text-white/60 uppercase">
                Compliance Violations
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
