'use client'

import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const info = [
  {
    icon: MapPin,
    title: 'Headquarters',
    details: ['100 Wall Street, Suite 500', 'New York, NY 10005'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['contact@grenchlegal.com', 'media@grenchlegal.com'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon-Fri: 9am - 7pm EST', 'Sat: By Appointment'],
  },
]

export function ContactInfo() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {info.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="border-primary/20 group-hover:bg-primary group-hover:border-primary mb-6 flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300">
                <item.icon className="text-primary group-hover:text-background h-5 w-5 transition-colors" />
              </div>
              <h3 className="text-foreground mb-4 font-serif text-xl">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.details.map((line, i) => (
                  <p key={i} className="text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
