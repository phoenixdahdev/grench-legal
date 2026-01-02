import { Navbar } from '~/components/layout/navbar'
import { Hero } from '~/components/sections/hero'
import { PracticeAreas } from '~/components/sections/practice-areas'
import { PropertyManagement } from '~/components/sections/property-management'
import { AboutIntro } from '~/components/sections/about-intro'
import { Footer } from '~/components/layout/footer'

export default function Home() {
  return (
    <main className="selection:bg-primary min-h-screen bg-black text-white selection:text-black">
      <Navbar />
      <Hero />
      <AboutIntro />
      <PracticeAreas />
      <PropertyManagement />
      <Footer />
    </main>
  )
}
