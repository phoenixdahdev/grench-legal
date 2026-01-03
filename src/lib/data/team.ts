export interface TeamMember {
    id: string
    slug: string
    name: string
    role: string
    qualifications?: string
    specialty: string
    shortBio?: string
    fullBio: string
    image: string
    socials?: {
        linkedin?: string
        email?: string
        twitter?: string
    }
}

export const teamMembers: TeamMember[] = [
    {
        id: '01',
        slug: 'mirian-chioma-umeh',
        name: 'Mirian Chioma Umeh',
        role: 'Principal Associate',
        qualifications: 'LL.M, ACIS',
        specialty: 'Corporate Governance & Litigation',
        image: '/ceo.jpeg',
        fullBio:
            'Mirian Chioma Umeh, is the Principal Associate at Grench Legal, providing strategic legal advisory and dispute resolution services across multiple practice areas. She is currently pursuing a PhD in Law and brings deep expertise in corporate governance, regulatory compliance, and commercial practice.\n\nHer practice spans corporate and commercial law, including business set-up, contract negotiation, and corporate governance. She is also proficient in probate and matrimonial matters, intellectual property litigation, employment and labour issues, and regulatory advisory services. Known for her practical approach, meticulous attention to detail, and strong advocacy, she delivers solutions that are tailored, effective, and aligned with her clients’ objectives.',
    },
    {
        id: '02',
        slug: 'clement-akoka',
        name: 'Clement Akoka',
        role: 'Partner',
        qualifications: 'Esq.',
        specialty: 'Dispute Resolution & Commercial Agreements',
        image: '/team2.jpeg',
        fullBio:
            'Clement Akoka, Esq., is a Partner at Grench Legal, a Chartered Arbitrator, and a specialist in dispute resolution. He has extensive experience resolving complex disputes through both litigation and alternative dispute resolution, spanning employment law, property law, company matters, debt recovery, maritime law, and matrimonial causes.\n\nClement also has strong expertise in drafting and reviewing commercial agreements, ensuring that clients’ rights and interests are fully protected. He has advised numerous commercial and mortgage banks on mortgages and the perfection of title, combining legal insight with practical, commercial solutions.\n\nRenowned for his strategic approach and meticulous attention to detail, Clement elevates his clients’ position while delivering effective, results-oriented legal services.',
    },
    {
        id: '03',
        slug: 'adeyemo-temiloluwa-elizabeth',
        name: 'Adeyemo Temiloluwa Elizabeth',
        role: 'Secretary/Clerk',
        specialty: 'Administration & Operations',
        image: '/team3.jpeg',
        fullBio:
            'Adeyemo Temiloluwa Elizabeth is the Secretary/Clerk at Grench Legal, managing key administrative and secretarial functions to support the firm’s operations. She ensures seamless coordination, organization, and communication, helping the team deliver efficient and professional legal services to clients.',
    },
]
