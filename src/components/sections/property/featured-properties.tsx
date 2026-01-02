'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

const props = [
  {
    image:
      'https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=800&auto=format&fit=crop',
    name: 'The Sterling Heights',
    type: 'Multi-Family Residential',
  },
  {
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    name: 'Apex Corporate Center',
    type: 'Commercial Office',
  },
  {
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    name: 'Westside Lofts',
    type: 'Mixed Use',
  },
]

export function FeaturedProperties() {
  return (
    <section className="bg-background overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-foreground mb-12 font-serif text-4xl">
          Portfolio Highlights
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {props.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative h-[400px] overflow-hidden"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8">
                <h3 className="translate-y-4 font-serif text-2xl text-white transition-transform duration-500 group-hover:translate-y-0">
                  {p.name}
                </h3>
                <p className="text-primary text-sm tracking-widest uppercase opacity-0 transition-opacity delay-100 duration-500 group-hover:opacity-100">
                  {p.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
