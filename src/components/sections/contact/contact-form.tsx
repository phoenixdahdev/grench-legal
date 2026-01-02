'use client'

import { motion } from 'motion/react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

export function ContactForm() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2 className="text-foreground mb-6 font-serif text-4xl">
              Send a Message
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Whether you are facing a complex legal challenge or seeking to
              optimize your property portfolio, our team is ready to deploy.
            </p>
            <p className="text-primary text-sm font-medium tracking-widest uppercase">
              * Confidentiality Guaranteed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="group relative">
                  <input
                    type="text"
                    id="name"
                    required
                    className="peer border-border text-foreground focus:border-primary w-full border-b bg-transparent py-4 placeholder-transparent transition-colors focus:outline-none"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="name"
                    className="text-primary peer-placeholder-shown:text-muted-foreground peer-focus:text-primary absolute -top-3 left-0 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs"
                  >
                    Full Name
                  </label>
                </div>

                <div className="group relative">
                  <input
                    type="email"
                    id="email"
                    required
                    className="peer border-border text-foreground focus:border-primary w-full border-b bg-transparent py-4 placeholder-transparent transition-colors focus:outline-none"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="email"
                    className="text-primary peer-placeholder-shown:text-muted-foreground peer-focus:text-primary absolute -top-3 left-0 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="group relative">
                <Select>
                  <SelectTrigger className="border-border text-foreground focus:ring-primary focus:border-primary w-full rounded-none border-0 border-b bg-transparent px-0 py-4 text-base focus:ring-0">
                    <SelectValue placeholder="Select Inquiry Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="legal">Legal Representation</SelectItem>
                    <SelectItem value="property">
                      Property Management
                    </SelectItem>
                    <SelectItem value="other">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
                <label
                  htmlFor="type"
                  className="text-primary absolute -top-3 left-0 text-xs"
                >
                  Inquiry Type
                </label>
              </div>

              <div className="group relative">
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="peer border-border text-foreground focus:border-primary w-full resize-none border-b bg-transparent py-4 placeholder-transparent transition-colors focus:outline-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className="text-primary peer-placeholder-shown:text-muted-foreground peer-focus:text-primary absolute -top-3 left-0 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="group bg-primary text-primary-foreground relative mt-4 w-full overflow-hidden px-8 py-4 font-semibold transition-all hover:pr-12 md:w-auto"
              >
                <span className="relative z-10">Send Securely</span>
                <span className="absolute top-1/2 right-4 translate-x-4 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
