'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-6 left-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2"
      >
        <div className="border-border bg-background/80 flex items-center justify-between rounded-full border px-6 py-4 shadow-2xl backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="group relative z-50">
            <span className="group-hover:text-primary text-foreground font-serif text-xl font-bold tracking-tight transition-colors">
              Grench
              <span className="text-primary group-hover:text-foreground transition-colors">
                .
              </span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {['Practice Areas', 'Property Management', 'About Us'].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="group text-muted-foreground hover:text-foreground relative text-sm font-medium transition-colors"
                >
                  {item}
                  <span className="bg-primary absolute -bottom-1 left-0 h-[1px] w-0 transition-all group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hover:bg-primary bg-foreground text-background hidden rounded-full px-6 py-2 text-sm font-semibold transition-all hover:scale-105 md:inline-flex"
            >
              Book Consultation
            </Link>

            <button
              className="hover:text-primary text-foreground transition-colors md:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background/95 fixed inset-0 z-[60] flex flex-col items-center justify-center backdrop-blur-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white/50 transition-colors hover:text-white"
            >
              <X className="h-8 w-8" />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {[
                'Practice Areas',
                'Property Management',
                'About Us',
                'Contact',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary text-foreground font-serif text-4xl font-thin transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="absolute bottom-12 text-sm text-zinc-500">
              Grench Legal Services
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
