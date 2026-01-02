import { ContactForm } from '~/components/sections/contact/contact-form'
import { PropertyHero } from '~/components/sections/property/property-hero'
import { LegalAdvantage } from '~/components/sections/property/legal-advantage'
import { ServicesDetail } from '~/components/sections/property/services-detail'
import { FeaturedProperties } from '~/components/sections/property/featured-properties'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Property Management',
  description:
    'Integrated legal and property management services for high-value portfolios. We maximize yields while minimizing liability.',
}

export default function PropertyPage() {
  return (
    <div className="bg-background min-h-screen">
      <PropertyHero />
      <LegalAdvantage />
      <ServicesDetail />
      <FeaturedProperties />
      <div className="bg-secondary/10">
        <ContactForm />
      </div>
    </div>
  )
}
