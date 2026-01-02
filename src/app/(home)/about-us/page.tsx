import { AboutHero } from '~/components/sections/about/about-hero'
import { Story } from '~/components/sections/about/story'
import { Values } from '~/components/sections/about/values'
import { Team } from '~/components/sections/about/team'
import { Awards } from '~/components/sections/about/awards'
import { Community } from '~/components/sections/about/community'

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <AboutHero />
      <Story />
      <Values />
      <Awards />
      <Team />
      <Community />
    </div>
  )
}
