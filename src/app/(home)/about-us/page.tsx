import { AboutHero } from '~/components/sections/about/about-hero'
import { Story } from '~/components/sections/about/story'
import { Values } from '~/components/sections/about/values'
import { Team } from '~/components/sections/about/team'
import { Awards } from '~/components/sections/about/awards'
import { Community } from '~/components/sections/about/community'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'From a singular vision to global influence. Learn about the history, values, and team behind Grench Legal.',
}

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
