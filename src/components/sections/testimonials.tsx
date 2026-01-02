'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Grench Legal didn't just handle our IP suit; they dismantled the opposition entirely. Their strategic foresight is unmatched.",
    author: 'Jonathan R.',
    role: 'CEO, TechFlow Systems',
  },
  {
    quote:
      'Navigating a high-stakes divorce is never easy, but their team brought a level of calm and aggression that secured everything I fought for.',
    author: 'Elena M.',
    role: 'Private Client',
  },
  {
    quote:
      'Our real estate portfolio has never been more profitable. Their property management arm is as sharp as their legal team.',
    author: 'David K.',
    role: 'Director, K-Holdings',
  },
  {
    quote:
      'They saw the nuances in the contract that three other firms missed. That detail saved us millions in liability.',
    author: 'Sarah J.',
    role: 'VP Operations, OmniCorp',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = (dir: number) => {
    setDirection(dir)
    setCurrent(
      (prev) => (prev + dir + testimonials.length) % testimonials.length
    )
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  }

  return (
    <section className="bg-secondary/30 relative overflow-hidden py-32">
      <div className="relative container mx-auto max-w-4xl px-6">
        <h2 className="text-foreground mb-20 text-center font-serif text-4xl md:text-5xl">
          Voices of <span className="text-primary italic">Victory</span>
        </h2>

        <div className="relative flex min-h-75 items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full px-4 text-center"
            >
              <Quote className="text-primary/40 mx-auto mb-8 h-12 w-12" />
              <p className="text-foreground mb-10 font-serif text-xl leading-relaxed italic md:text-3xl">
                &quot;{testimonials[current].quote}&quot;
              </p>
              <div>
                <div className="text-primary text-base font-bold tracking-wider uppercase">
                  {testimonials[current].author}
                </div>
                <div className="text-muted-foreground mt-2 text-sm">
                  {testimonials[current].role}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <button
            onClick={() => slide(-1)}
            className="border-border hover:border-primary hover:text-primary text-muted-foreground rounded-full border p-3 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => slide(1)}
            className="border-border hover:border-primary hover:text-primary text-muted-foreground rounded-full border p-3 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
