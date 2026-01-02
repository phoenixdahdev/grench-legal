export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="text-foreground mb-8 font-serif text-4xl md:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12 text-sm tracking-widest uppercase">
          Last Updated: January 1, 2026
        </p>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p className="lead">
            Grench Legal ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you visit our website.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information that you voluntarily provide to
            us when you contact us via our forms, such as your name, email
            address, and phone number. We also automatically collect certain
            technical data through cookies (as detailed in our Cookie Banner).
          </p>

          <h3>2. Attorney-Client Privilege</h3>
          <p>
            Submission of information through this website does{' '}
            <strong>not</strong> create an attorney-client relationship. Please
            do not submit confidential or sensitive legal information through
            our public contact forms until an attorney-client relationship has
            been formally established via a written engagement letter.
          </p>

          <h3>3. How We Use Your Information</h3>
          <ul>
            <li>
              To respond to your inquiries and provide legal consultation.
            </li>
            <li>To improve our website functionality and user experience.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h3>4. Data Security</h3>
          <p>
            We implement high-standard security measures to protect your
            personal data. However, no electronic transmission over the internet
            is guaranteed to be 100% secure.
          </p>

          <h3>5. Contact Us</h3>
          <p>
            If you have questions about this policy, please contact us at{' '}
            <a href="mailto:privacy@grenchlegal.com" className="text-primary">
              privacy@grenchlegal.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
