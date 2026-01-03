import { Team } from '~/components/sections/about/team'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team | Grench Legal',
  description:
    'Meet the dedicated legal experts and partners at Grench Legal. We bring strategic insight and resolute advocacy to every case.',
}

export default function TeamPage() {
  return (
    <div className="pt-20">
      <div className="bg-background relative py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-foreground font-serif text-5xl font-medium md:text-6xl">
            Our Team
          </h1>
          <p className="text-muted-foreground mt-4 text-xl">
            The minds behind our strategic victories.
          </p>
        </div>
      </div>
      <Team />
    </div>
  )
}
