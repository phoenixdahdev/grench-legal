'use client'

import { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'
import { ThemeProvider } from 'next-themes'

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root>
      <ThemeProvider defaultTheme="system" attribute="class" enableSystem>
        {children}
      </ThemeProvider>
    </ReactLenis>
  )
}
