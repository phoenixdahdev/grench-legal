export interface PracticeArea {
    id: string
    slug: string
    title: string
    shortDescription: string
    fullDescription: string
    image: string
    services: string[]
    faqs?: { question: string; answer: string }[]
    stats?: { value: string; label: string }[]
}

export const practiceAreas: PracticeArea[] = [
    {
        id: '01',
        slug: 'corporate-commercial',
        title: 'Corporate & Commercial',
        shortDescription: 'Mergers, acquisitions, and strategic formation.',
        fullDescription:
            'Business is war by other means. We provide the strategic armor and weaponry your company needs to conquer new markets and defend its territory. From complex cross-border mergers to ironclad operating agreements, our corporate team ensures your foundation is unshakeable.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
        services: [
            'Mergers & Acquisitions',
            'Corporate Formation & Governance',
            'Contract Negotiation & Drafting',
            'Shareholder Dispute Resolution',
            'Regulatory Compliance',
        ],
        stats: [
            { value: '$4.5B+', label: 'Transaction Value' },
            { value: '500+', label: 'Entities Formed' },
            { value: '100%', label: 'Commitment' },
        ],
        faqs: [
            {
                question: 'How early should legal counsel be involved in M&A?',
                answer: 'Immediately. The initial LOI sets the stage for the entire deal structure. Engaging us early prevents costly leverage loss.'
            },
            {
                question: 'Do you handle cross-border transactions?',
                answer: 'Yes. We maintain a network of global partnerships to execute seamless international deals.'
            }
        ]
    },
    {
        id: '02',
        slug: 'employment-matters',
        title: 'Employment Matters',
        shortDescription: 'Workplace disputes, contracts, and compliance.',
        fullDescription:
            'The workforce is your greatest asset and your biggest liability. We help employers navigate the minefield of labor laws, protecting you from frivolous claims while ensuring your policies promote a culture of excellence and accountability.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop',
        services: [
            'Executive Compensation Packages',
            'Non-Compete & NDA Enforcement',
            'Workplace Discrimination Defense',
            'Employee Handbook Creation',
            'Termination & Severance Strategy',
        ],
        stats: [
            { value: '98%', label: 'Settlement Rate' },
            { value: '1000+', label: 'Disputes Resolved' },
        ],
        faqs: [
            {
                question: 'Are non-competes still enforceable?',
                answer: 'It depends heavily on jurisdiction and specific terms. We craft agreements designed to withstand modern scrutiny.'
            }
        ]
    },
    {
        id: '03',
        slug: 'intellectual-property',
        title: 'Intellectual Property',
        shortDescription: 'Copyrights, trademarks, and asset protection.',
        fullDescription:
            'Your ideas are the currency of the future. We don\'t just register them; we defend them with ferocity. Whether it\'s a patent infringement suit or a global trademark strategy, we ensure your intellectual capital remains exclusively yours.',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop',
        services: [
            'Trademark Registration & Litigation',
            'Copyright Protection',
            'Trade Secret Audits',
            'Licensing Agreements',
            'IP Portfolio Management',
        ],
        stats: [
            { value: '5000+', label: 'Trademarks Secured' },
            { value: 'Zero', label: 'Tolerance for Infringement' },
        ],
        faqs: [
            {
                question: 'How do I protect my trade secrets?',
                answer: 'Through a combination of NDAs, access controls, and robust employment policies, which we design tailored to your IP.'
            }
        ]
    },
    {
        id: '04',
        slug: 'probate-estate',
        title: 'Probate & Estate',
        shortDescription: 'Wills, trusts, and compassionate administration.',
        fullDescription:
            'Legacy is what remains. We meticulously craft estate plans that preserve your wealth for generations, minimizing tax burdens and family disputes. When the time comes, our probate team executes your wishes with precision and dignity.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
        services: [
            'Comprehensive Estate Planning',
            'Trust Administration',
            'Probate Litigation',
            'Asset Protection Trusts',
            'Elder Law & Guardianships',
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
            'Real estate is not just land; it is power. We represent developers, investors, and owners in high-stakes transactions and litigation. From zoning battles to complex commercial leases, we clear the path for your vision.',
        image: 'https://images.unsplash.com/photo-1460317442991-0ec2aa24e565?q=80&w=2000&auto=format&fit=crop',
        services: [
            'Commercial Lease Negotiation',
            'Development & Zoning',
            'Landlord-Tenant Litigation',
            'Title Dispute Resolution',
            'Closing Services',
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
            'In an industry built on smoke and mirrors, you need someone who sees things clearly. We represent talent, producers, and studios, ensuring that creative rights are protected and financial participations are honored.',
        image: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2000&auto=format&fit=crop',
        services: [
            'Artist Management Contracts',
            'Production Legal Services',
            'Distribution Agreements',
            'Royalty Disputes',
            'Image Rights Protection',
        ],
        stats: [
            { value: 'A-List', label: 'Client Roster' },
            { value: 'Global', label: 'Reach' },
        ],
    },
]
