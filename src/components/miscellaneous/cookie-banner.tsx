'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsent = document.cookie
      .split('; ')
      .find((row) => row.startsWith('grench-cookie-consent='))

    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    document.cookie =
      'grench-cookie-consent=accepted; path=/; max-age=31536000; SameSite=Lax'
    setIsVisible(false)
  }

  const handleDecline = () => {
    document.cookie =
      'grench-cookie-consent=declined; path=/; max-age=31536000; SameSite=Lax'
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 z-50 w-[90vw] max-w-sm md:left-8"
        >
          <div className="bg-background/90 border-border relative overflow-hidden rounded-xl border p-6 shadow-2xl backdrop-blur-md">
            <button
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground absolute top-4 right-4 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex gap-4">
              <div className="shrink-0 pt-1">
                <Image
                  src="/cookie.png"
                  alt="Cookie"
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-md"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-foreground font-serif text-lg">
                  Digital Privacy
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use cookies to enhance your experience and analyze our
                  traffic. No sensitive legal data is ever tracked.
                </p>
                <div className="flex gap-3 pt-1">
                  <button
                    onClick={handleAccept}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={handleDecline}
                    className="text-muted-foreground hover:text-foreground text-xs font-medium underline-offset-4 transition-colors hover:underline"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
