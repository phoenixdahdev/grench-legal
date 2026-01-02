import { Hero } from '~/components/sections/hero'
import { AboutIntro } from '~/components/sections/about-intro'
import { PracticeAreas } from '~/components/sections/practice-areas'
import { Process } from '~/components/sections/process'
import { PropertyManagement } from '~/components/sections/property-management'
import { Testimonials } from '~/components/sections/testimonials'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grench Legal - Global Corporate & Litigation Counsel',
  description:
    'Grench Legal provides aggressive, strategic counsel for high-net-worth individuals and multinational corporations. Specializing in M&A, Intellectual Property, and Property Management.',
}

export default function Home() {
  return (
    <div className="selection:bg-primary bg-background text-foreground min-h-screen selection:text-black">
      <Hero />
      <AboutIntro />
      <PracticeAreas />
      <Process />
      <PropertyManagement />
      <Testimonials />
    </div>
  )
}
