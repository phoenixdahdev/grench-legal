import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and Conditions for using the Grench Legal website.',
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-background min-h-screen py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="text-foreground mb-8 font-serif text-4xl md:text-5xl">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mb-12 text-sm tracking-widest uppercase">
          Effective Date: January 1, 2026
        </p>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="lead">
            Please read these Terms of Service ("Terms") carefully before using
            the Grench Legal website. By accessing or using the Service, you
            agree to be bound by these Terms.
          </p>

          <h3>1. No Legal Advice</h3>
          <p>
            The materials on this website have been prepared by Grench Legal for
            informational purposes only and are not legal advice. This
            information is not intended to create, and receipt of it does not
            constitute, an attorney-client relationship. Internet subscribers
            and online readers should not act upon this information without
            seeking professional counsel.
          </p>

          <h3>2. Intellectual Property</h3>
          <p>
            The content, organization, graphics, design, compilation, and other
            matters related to the Site are protected under applicable
            copyrights, trademarks, and other proprietary rights. Copying,
            redistribution, use, or publication by you of any such matters or
            any part of the Site is strictly prohibited.
          </p>

          <h3>3. Limitation of Liability</h3>
          <p>
            In no event shall Grench Legal be liable for any special, direct,
            indirect, consequential, or incidental damages or any damages
            whatsoever, whether in an action of contract, negligence or other
            tort, arising out of or in connection with the use of the Service or
            the contents of the Service.
          </p>

          <h3>4. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the State of New York, without regard to its conflict of law
            provisions.
          </p>
        </div>
      </div>
    </div>
  )
}
