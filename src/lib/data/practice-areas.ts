export interface PracticeArea {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  services: string[]
  quote?: string
  faqs?: { question: string; answer: string }[]
  stats?: { value: string; label: string }[]
}

export const practiceAreas: PracticeArea[] = [
  {
    id: '01',
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    shortDescription: 'Business set-up, regulatory compliance & commercial agreements.',
    fullDescription:
      'Business success requires strategy, compliance, and a solid foundation. At Grench Legal, we provide the guidance and legal framework your company needs to grow, operate efficiently, and navigate regulatory landscapes. From business formation to securing government licenses and ensuring ongoing regulatory compliance, our corporate and commercial team builds unshakable foundations for your enterprise.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
    quote:
      "We don't just advise; we enable businesses to thrive and achieve results.",
    services: [
      'Corporate Formation & Governance – Establishing businesses, drafting constitutions, and maintaining compliant corporate structures.',
      'Contract Drafting & Negotiation – Preparing and reviewing agreements to protect commercial interests.',
      'Shareholder & Corporate Dispute Resolution – Resolving conflicts to safeguard business continuity.',
      'Regulatory Compliance & Licensing – Assisting with government permits, approvals, and ongoing regulatory adherence.',
      'Business Advisory & Commercial Strategy – Providing practical legal solutions to support growth and market entry.',
    ],
    stats: [
      { value: '$4.5B+', label: 'Transaction Value' },
      { value: '500+', label: 'Entities Formed' },
      { value: '100%', label: 'Commitment' },
    ],
    faqs: [
      {
        question: 'How early should legal counsel be involved in M&A?',
        answer:
          'Immediately. The initial LOI sets the stage for the entire deal structure. Engaging us early prevents costly leverage loss.',
      },
      {
        question: 'Do you handle cross-border transactions?',
        answer:
          'Yes. We maintain a network of global partnerships to execute seamless international deals.',
      },
    ],
  },
  {
    id: '02',
    slug: 'employment-matters',
    title: 'Employment Matters',
    shortDescription: 'Workplace disputes, contracts, and compliance.',
    fullDescription:
      'We advise employers on labour law compliance, workplace policies, and dispute management, while safeguarding employees against wrongful and unfair dismissal in line with international best practices.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Drafting and review of employee handbooks and workplace policies',
      'Non-compete, confidentiality, and NDA drafting and enforcement',
      'Defence and prosecution of claims arising from unlawful or wrongful termination',
      'Termination management and severance structuring',
    ],
    stats: [
      { value: '98%', label: 'Settlement Rate' },
      { value: '1000+', label: 'Disputes Resolved' },
    ],
    faqs: [
      {
        question: 'Are non-competes still enforceable?',
        answer:
          'It depends heavily on jurisdiction and specific terms. We craft agreements designed to withstand modern scrutiny.',
      },
    ],
  },
  {
    id: '03',
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    shortDescription: 'Copyrights, trademarks, and asset protection.',
    fullDescription:
      "Innovation is a valuable business asset. At Grench Legal, we go beyond registration to provide strategic protection and enforcement of intellectual property rights. From patents, trademarks, and copyrights to infringement actions and risk-management strategies, we ensure your ideas remain protected, commercialised, and exclusively yours.",
    image:
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Trademark searches, registration, and brand protection',
      'Copyright protection and registration',
      'Industrial design protection and filings',
      'Intellectual property enforcement and litigation',
      'Drafting and negotiation of IP licensing and assignment agreements',
      'Intellectual property portfolio management and advisory',
    ],
    stats: [
      { value: '5000+', label: 'Trademarks Secured' },
      { value: 'Zero', label: 'Tolerance for Infringement' },
    ],
    faqs: [
      {
        question: 'How do I protect my trade secrets?',
        answer:
          'Through a combination of NDAs, access controls, and robust employment policies, which we design tailored to your IP.',
      },
    ],
  },
  {
    id: '04',
    slug: 'probate-estate',
    title: 'Probate & Estate',
    shortDescription: 'Wills, trusts, and compassionate administration.',
    fullDescription:
      'At Grench Legal, we provide thoughtful and structured estate planning aimed at preserving wealth, ensuring orderly succession, and minimising disputes. From drafting wills and estate plans to probate and estate administration, we manage each process with precision, discretion, and respect for your legacy.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Comprehensive estate planning and succession structuring',
      'Drafting, review, and safekeeping of wills',
      'Processing of Grants and Letters of Administration',
      'Probate and estate administration',
      'Probate and inheritance litigation',
      'Asset protection and family trust advisory',
    ],
    stats: [
      { value: '$2B+', label: 'Assets Protected' },
      { value: '30+', label: 'Years Experience' },
    ],
  },
  {
    id: '05',
    slug: 'real-estate',
    title: 'Real Estate',
    shortDescription: 'Transactions, zoning, and property law.',
    fullDescription:
      'We advise and represent developers, investors, and property owners on real estate transactions, property management, and disputes. Our work spans acquisitions, leasing, processing and perfection of title documents, and court representation in landlord-tenant matters, including recovery of possession.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec2aa24e565?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Property Acquisition & Management',
      'Commercial Leasing',
      'Title Documentation & Perfection',
      'Landlord-Tenant Representation & Recovery of Possession',
      'Real Estate Dispute Resolution',
    ],
    stats: [
      { value: '15M+', label: 'Sq Ft Leased' },
      { value: '250+', label: 'Closings Annually' },
    ],
  },
  {
    id: '06',
    slug: 'entertainment-law',
    title: 'Entertainment Law',
    shortDescription: 'Representation for talent and production companies.',
    fullDescription:
      "The entertainment and creative industry demands clarity, structure, and strong legal protection. At Grench Legal, we advise and represent artistes, creatives, producers, managers, and studios on the legal and commercial aspects of their work. We ensure that creative rights are secured, contracts are fair, and financial interests are properly protected.\n\nFrom structuring and negotiating agreements to resolving disputes, we provide practical, commercially focused counsel that safeguards our clients' careers and investments.We do not merely advise; we intervene to protect value and change outcomes.",
    image:
      'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2000&auto=format&fit=crop',
    services: [
      'Artist, Talent & Creative Agreements',
      'Artist Management & Recording Contracts',
      'Production & Content Development Legal Services',
      'Distribution, Licensing & Publishing Agreements',
      'Royalty Structuring & Dispute Resolution',
      'Image, Brand & Intellectual Property Rights Protection',
    ],
    stats: [
      { value: 'A-List', label: 'Client Roster' },
      { value: 'Global', label: 'Reach' },
    ],
  },
]
