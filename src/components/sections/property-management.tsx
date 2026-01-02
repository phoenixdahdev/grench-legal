'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const features = [
  'Tenant Screening',
  'Rent Collection',
  'Maintenance',
  'Legal Compliance',
  'Evictions',
  '24/7 Support',
]

export function PropertyManagement() {
  return (
    <section id="property-management" className="relative bg-zinc-950 py-32">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/90 to-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-primary/20 text-primary mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase">
              Grench Properties
            </span>
            <h2 className="mb-8 font-serif text-5xl leading-none text-white md:text-7xl">
              Asset <br />
              <span className="text-zinc-600">Management</span>
            </h2>
            <p className="mb-8 max-w-md text-xl leading-relaxed text-zinc-300">
              We leverage our legal expertise to provide a property management
              service that is secure, compliant, and highly profitable.
            </p>

            <Link
              href="#contact"
              className="group border-primary hover:text-primary inline-flex items-center gap-2 border-b pb-1 text-white transition-colors"
            >
              Request a Proposal
              <span className="block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center gap-4 border-b border-white/10 pb-4"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors">
                  <Check className="text-primary h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl text-zinc-300 transition-colors group-hover:text-white">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
