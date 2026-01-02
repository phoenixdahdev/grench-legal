'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export function Hero() {
  return (
    <section className="bg-background relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="bg-noise pointer-events-none absolute inset-0 z-10 opacity-5 dark:opacity-20" />
      <div className="from-muted via-background to-background absolute top-0 right-0 h-full w-[50vw] origin-top-left skew-x-12 bg-linear-to-b opacity-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950" />
      <div className="bg-primary/10 absolute top-1/4 right-[10%] h-64 w-64 rounded-full blur-[100px]" />
      <div className="relative z-20 container mx-auto grid items-center gap-12 px-6 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <div className="bg-primary h-px w-12" />
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Smart delivery.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-foreground font-serif text-5xl leading-[0.95] font-medium md:text-7xl xl:text-8xl"
          >
            Legal certainty.
            <br />
            <span className="text-muted-foreground italic">Securing</span>{' '}
            <span className="text-primary">Legacies.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="border-border text-muted-foreground my-4 max-w-xl border-l-2 pl-6 text-xl leading-relaxed"
          >
            A dedicated law firm offering legal and corporate secretarial
            services, with strong expertise in legal practice and chartered
            secretarial and administrative support.
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
              className="border-primary/30 hover:border-primary text-foreground border-b px-8 py-4 transition-colors"
            >
              Explore Our Expertise
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative hidden h-150 lg:col-span-4 lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="via-border absolute top-10 bottom-10 left-0 w-px bg-linear-to-b from-transparent to-transparent" />

          <div className="text-muted-foreground absolute inset-0 flex flex-col justify-between py-20 pl-12 font-serif text-2xl italic opacity-50">
            <div>&quot;Justice&quot;</div>
            <div className="text-right">&quot;Integrity&quot;</div>
            <div>&quot;Strategy&quot;</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
