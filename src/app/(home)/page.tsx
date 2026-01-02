import { Hero } from '~/components/sections/hero'
import { AboutIntro } from '~/components/sections/about-intro'
import { PracticeAreas } from '~/components/sections/practice-areas'
import { Process } from '~/components/sections/process'
import { PropertyManagement } from '~/components/sections/property-management'
import { Testimonials } from '~/components/sections/testimonials'

export default function Home() {
  return (
    // Updated container to use theme variables
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
