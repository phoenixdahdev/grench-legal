'use client'

import { motion } from 'motion/react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 pt-20">
      <div className="bg-noise pointer-events-none absolute inset-0 z-10 opacity-20" />

      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 h-full w-[50vw] origin-top-left skew-x-12 bg-linear-to-b from-zinc-900 via-zinc-950 to-zinc-950 opacity-50" />
      <div className="bg-primary/10 absolute top-1/4 right-[10%] h-64 w-64 rounded-full blur-[100px]" />

      <div className="relative z-20 container mx-auto grid items-center gap-12 px-6 lg:grid-cols-12">
        {/* Left Content - Editorial Style */}
        <div className="flex flex-col gap-8 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="bg-primary h-[1px] w-12" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Established Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl leading-[0.95] font-medium text-white md:text-7xl xl:text-8xl"
          >
            Defending Rights.
            <br />
            <span className="text-zinc-500 italic">Securing</span>{' '}
            <span className="text-primary">Legacies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="my-4 max-w-xl border-l-2 border-zinc-800 pl-6 text-xl leading-relaxed text-zinc-400"
          >
            A premier law firm and property management consultancy dedicated to
            navigating the complexities of your world with precision and
            discretion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-4 flex flex-wrap gap-6"
          >
            <Link
              href="#contact"
              className="group bg-primary text-primary-foreground relative overflow-hidden px-8 py-4 font-semibold transition-all hover:pr-12"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <span className="absolute top-1/2 right-4 translate-x-4 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </Link>
            <Link
              href="#practice-areas"
              className="border-primary/30 hover:border-primary border-b px-8 py-4 text-white transition-colors"
            >
              Explore Our Expertise
            </Link>
          </motion.div>
        </div>

        {/* Right Visual - Abstract/Minimal */}
        <motion.div
          className="relative hidden h-[600px] lg:col-span-4 lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Vertical Separator Line */}
          <div className="absolute top-10 bottom-10 left-0 w-[1px] bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-between py-20 pl-12 font-serif text-2xl text-zinc-500 italic opacity-50">
            <div>"Justice"</div>
            <div className="text-right">"Integrity"</div>
            <div>"Strategy"</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
