'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-zinc-950 pt-32 pb-12"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-24 grid gap-12 md:grid-cols-12 lg:gap-24">
          {/* Main Call to Action */}
          <div className="md:col-span-12 lg:col-span-5">
            <h2 className="mb-8 font-serif text-4xl text-white md:text-5xl">
              Let's secure your <br />
              <span className="text-primary italic">future together.</span>
            </h2>

            <div className="space-y-2">
              <a
                href="mailto:contact@grenchlegal.com"
                className="hover:text-primary block text-xl text-zinc-300 transition-colors"
              >
                contact@grenchlegal.com
              </a>
              <a
                href="tel:+15551234567"
                className="hover:text-primary block text-xl text-zinc-300 transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="mt-12 flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:border-primary hover:text-primary flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h3 className="mb-8 text-sm font-bold tracking-widest text-white uppercase">
              Sitemap
            </h3>
            <ul className="space-y-4">
              {[
                'Home',
                'Practice Areas',
                'Property Management',
                'About Us',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-zinc-500 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="mb-8 text-sm font-bold tracking-widest text-white uppercase">
              Legal
            </h3>
            <ul className="space-y-4">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Disclaimer',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-zinc-500 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-12 text-xs tracking-widest text-zinc-600 uppercase md:flex-row">
          <p>© 2025 Grench Legal.</p>
          <p>Designed with Precision.</p>
        </div>
      </div>

      {/* Massive Typographic Background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 overflow-hidden leading-none opacity-[0.03] select-none">
        <span className="-mb-[4vw] block text-center font-serif text-[15vw] font-bold whitespace-nowrap text-white lg:text-[18vw]">
          GRENCH LEGAL
        </span>
      </div>
    </footer>
  )
}
