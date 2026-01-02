'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '~/components/miscellaneous/theme-toggle'

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-background relative overflow-hidden pt-32 pb-12"
    >
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-24 grid gap-12 md:grid-cols-12 lg:gap-24">
          <div className="md:col-span-12 lg:col-span-5">
            <h2 className="text-foreground mb-8 font-serif text-4xl md:text-5xl">
              Let&apos;s secure your <br />
              <span className="text-primary italic">future together.</span>
            </h2>

            <div className="space-y-2">
              <a
                href="mailto:contact@grenchlegal.com"
                className="hover:text-primary text-muted-foreground block text-xl transition-colors"
              >
                contact@grenchlegal.com
              </a>
              <a
                href="tel:+15551234567"
                className="hover:text-primary text-muted-foreground block text-xl transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div className="mt-12 flex gap-4">
              {[
                { icon: '/facebook.svg', href: '#' },
                { icon: '/x.svg', href: '#' },
                { icon: '/instagram.svg', href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="hover:border-primary border-border hover:bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full border transition-all hover:scale-110"
                >
                  <Image
                    src={social.icon}
                    alt="Social Icon"
                    width={20}
                    height={20}
                    className="opacity-60 transition-opacity hover:opacity-100 dark:invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-6 lg:col-span-3 lg:col-start-7">
            <h3 className="text-foreground mb-8 text-sm font-bold tracking-widest uppercase">
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-6 lg:col-span-3">
            <h3 className="text-foreground mb-8 text-sm font-bold tracking-widest uppercase">
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-4 border-t pt-12 text-xs tracking-widest uppercase md:flex-row">
          <p>© 2025 Grench Legal.</p>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <p>Designed with Precision.</p>
          </div>
        </div>
      </div>

      {/* Massive Typographic Background */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 overflow-hidden leading-none opacity-[0.03] select-none">
        <span className="text-foreground -mb-[4vw] block text-center font-serif text-[15vw] font-bold whitespace-nowrap lg:text-[18vw]">
          GRENCH LEGAL
        </span>
      </div>
    </footer>
  )
}
