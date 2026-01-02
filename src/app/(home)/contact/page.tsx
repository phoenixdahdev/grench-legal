import { ContactHero } from '~/components/sections/contact/contact-hero'
import { ContactInfo } from '~/components/sections/contact/contact-info'
import { ContactForm } from '~/components/sections/contact/contact-form'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Secure your future today. Contact Grench Legal for a confidential consultation regarding your corporate or legal needs.',
}

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}
