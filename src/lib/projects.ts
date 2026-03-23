export interface Project {
  slug: string
  name: string
  tagline: string
  tags: string[]
  year: string
  description: string
  gradient: string
  overview: string
  challenge: string
  solution: string
  deliverables: string[]
  services: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'moov',
    name: 'MOOV',
    tagline: 'Smart alarm. Dark commerce.',
    tags: ['Shopify', 'Branding'],
    year: '2024',
    description: 'Dark-themed e-commerce store for a smart alarm product.',
    gradient: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 45%, #22203C 100%)',
    services: ['Shopify', 'Web Design'],
    overview:
      'MOOV is a smart alarm product targeting young professionals who want a better morning routine. The brand needed a premium digital storefront that matched the product\'s high-tech aesthetic — dark, minimal, and conversion-focused.',
    challenge:
      'The product existed before the brand did. There was no visual language, no tone of voice, and no online presence. Everything had to be built from scratch while keeping the focus on driving sales from day one.',
    solution:
      'We designed a dark Shopify theme with strong typographic hierarchy, custom product pages built to highlight the hardware, and a checkout flow tuned for conversion. The brand system — deep navy, near-black, and electric accents — was developed in parallel and applied throughout.',
    deliverables: [
      'Custom Shopify theme',
      'Product page design & development',
      'Brand identity system',
      'Mobile-optimised checkout flow',
      'Analytics & conversion setup',
    ],
  },
  {
    slug: 'rob-roy',
    name: 'Rob Roy',
    tagline: 'Scottish soul. Newfoundland roots.',
    tags: ['Branding', 'Web'],
    year: '2024',
    description: "Identity and digital presence for a St. John's venue.",
    gradient: 'linear-gradient(135deg, #3A1E0A 0%, #6B3A1A 45%, #8B4C22 100%)',
    services: ['Branding', 'Web Design', 'Print'],
    overview:
      'Rob Roy is a pub in the heart of St. John\'s with a Scottish heritage and a fiercely local following. They needed a brand identity and website that could carry the warmth of the place — without feeling like a theme-pub cliché.',
    challenge:
      'The venue had loyal regulars but no consistent visual identity. Their online presence was scattered — an old Facebook page, a Google listing, no website. New customers had no way to get a feel for the place before walking in.',
    solution:
      'We rooted the brand in craft and locality: a hand-finished wordmark, a warm amber-and-dark-wood palette, and a website that leads with atmosphere before information. The events page pulls in a simple feed so they can update it themselves without touching code.',
    deliverables: [
      'Logo & full brand identity',
      'Brand guidelines document',
      'Website design & development',
      'Menu design (print & digital)',
      'Social media templates',
      'Signage artwork files',
    ],
  },
  {
    slug: 'konfusion',
    name: 'Konfusion',
    tagline: 'Where St. John\'s comes alive.',
    tags: ['Branding', 'Web'],
    year: '2023',
    description: "Visual identity and web for St. John's nightlife.",
    gradient: 'linear-gradient(135deg, #18082A 0%, #2E1048 45%, #3C1860 100%)',
    services: ['Branding', 'Web Design', 'Print'],
    overview:
      'Konfusion is a nightclub in downtown St. John\'s. In a saturated nightlife market, standing out means more than having a good night — it means having a brand that people recognise before they even walk through the door.',
    challenge:
      'The club\'s previous identity was inconsistent across flyers, social media, and signage. There was no system — every promoter used different fonts, colours, and layouts. The brand felt cheap relative to the actual experience.',
    solution:
      'We built a bold typographic identity anchored in a deep purple palette with high-contrast accent colours. A tight set of brand rules — headline lockups, DJ graphic templates, and a flyer grid — gave the promotion team a system they could actually use without breaking the brand.',
    deliverables: [
      'Logo & visual identity',
      'Brand guidelines & asset library',
      'Website design & development',
      'Event flyer template system',
      'Social media template pack',
      'Wristband & print assets',
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
