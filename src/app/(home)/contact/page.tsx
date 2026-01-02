import { ContactHero } from '~/components/sections/contact/contact-hero'
import { ContactInfo } from '~/components/sections/contact/contact-info'
import { ContactForm } from '~/components/sections/contact/contact-form'

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  )
}
