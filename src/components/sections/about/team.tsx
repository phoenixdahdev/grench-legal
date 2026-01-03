'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const team = [
  {
    name: 'Alexander Grench',
    role: 'Principal Associate',
    specialty: 'Corporate Litigation',
    image: '/ceo.jpeg',
  },
  {
    name: 'Clement Akoka',
    role: 'Senior Partner',
    specialty: 'Intellectual Property',
    image: '/team2.jpeg',
  },
  {
    name: 'Adeyemo temiloluwa Elizabeth',
    role: 'Clerk',
    specialty: 'Commercial Property',
    image: '/team3.jpeg',
  },
]

export function Team() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-foreground mb-4 font-serif text-4xl md:text-5xl">
            Commanding Minds
          </h2>
          <p className="text-muted-foreground text-lg">
            Meet the partners leading the charge.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-muted relative mb-6 aspect-3/4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-primary text-sm font-medium tracking-wider">
                    Focus Area
                  </span>
                  <span className="font-serif text-lg text-white">
                    {member.specialty}
                  </span>
                </div>
              </div>

              <h3 className="text-foreground group-hover:text-primary font-serif text-2xl transition-colors">
                {member.name}
              </h3>
              <p className="text-muted-foreground/80 mt-1 text-xs tracking-wider uppercase">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
