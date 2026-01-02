import { ContactForm } from '~/components/sections/contact/contact-form'
import { PropertyHero } from '~/components/sections/property/property-hero'
import { LegalAdvantage } from '~/components/sections/property/legal-advantage'
import { ServicesDetail } from '~/components/sections/property/services-detail'
import { FeaturedProperties } from '~/components/sections/property/featured-properties'

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
