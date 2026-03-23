export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  tag: string
  tagline: string
  description: string
  gradient: string
  includes: string[]
  forClients: string[]
  note?: string
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: 'shopify',
    title: 'Shopify & E-commerce',
    subtitle: 'Web',
    tag: 'WEB',
    tagline: 'Online stores built to sell.',
    description:
      'Full Shopify store builds — from theme setup and product pages to checkout optimisation and analytics. We handle the technical side so you can focus on the product.',
    gradient: 'linear-gradient(135deg, #2D3A4A 0%, #3D4F6B 50%, #2A3550 100%)',
    includes: [
      'Custom Shopify theme design & build',
      'Product & collection page design',
      'Mobile-first checkout optimisation',
      'Payment gateway & shipping setup',
      'SEO foundations & meta setup',
      'Google Analytics / Meta Pixel integration',
      'Staff training & handoff documentation',
    ],
    forClients: [
      'Product brands launching online',
      'Brick-and-mortar stores moving to e-commerce',
      'Merch stores for venues, bands, and events',
      'Existing Shopify stores needing a redesign',
    ],
    note: 'We build on Shopify because it\'s the right tool for most product-based businesses. If you have different requirements, ask us — we\'re not dogmatic about the stack.',
  },
  {
    slug: 'websites',
    title: 'Websites & Landing Pages',
    subtitle: 'Web',
    tag: 'WEB',
    tagline: 'Your brand, online — properly.',
    description:
      'Brand websites and campaign landing pages for local businesses that need a serious online presence. Fast to load, easy to update, built to last.',
    gradient: 'linear-gradient(135deg, #243B35 0%, #3B6B5A 55%, #2D4A45 100%)',
    includes: [
      'Custom design (no templates)',
      'Responsive, mobile-first build',
      'CMS setup for self-managed content',
      'Contact forms & booking integrations',
      'On-page SEO & structured data',
      'Performance optimisation',
      'Domain & hosting guidance',
    ],
    forClients: [
      'Hospitality venues and restaurants',
      'Local service businesses',
      'Event promoters and creative studios',
      'Brands launching a campaign or product',
    ],
    note: 'Every site we build is designed from scratch for the client — no off-the-shelf themes. The result is faster, more distinctive, and easier to maintain.',
  },
  {
    slug: 'design',
    title: 'Graphic Design & Branding',
    subtitle: 'Design',
    tag: 'DESIGN',
    tagline: 'Identity built to last.',
    description:
      'Brand identity from the ground up — or a sharp refresh of what you already have. Logos, guidelines, print, and the full system your business actually needs.',
    gradient: 'linear-gradient(135deg, #4A2D1A 0%, #8B5A2A 55%, #6B4020 100%)',
    includes: [
      'Logo design (primary, secondary, mark)',
      'Brand guidelines document',
      'Colour palette & typography system',
      'Business cards & stationery',
      'Signage & print artwork',
      'Social media profile assets',
      'Brand refresh of existing identity',
    ],
    forClients: [
      'New businesses needing a full identity',
      'Established brands ready for a refresh',
      'Venues expanding or rebranding',
      'Anyone who\'s been winging it visually',
    ],
    note: 'A proper brand system pays for itself. When every touchpoint looks intentional, customers trust you faster.',
  },
  {
    slug: 'merch',
    title: 'Merch',
    subtitle: 'Design & Production',
    tag: 'MERCH',
    tagline: 'Concept to customer doorstep.',
    description:
      'End-to-end merch — from initial design through print and fulfilment. We handle sourcing, setup, and production so you just approve the designs and watch orders come in.',
    gradient: 'linear-gradient(135deg, #3A4820 0%, #5E7030 55%, #404D28 100%)',
    includes: [
      'Garment & product design',
      'Print-on-demand store setup',
      'Quality sourcing & supplier management',
      'Bulk print runs for events or retail',
      'Fulfilment integration with your Shopify',
      'Packaging & unboxing design',
      'Photography for product listings',
    ],
    forClients: [
      'Venues and hospitality brands',
      'Bands and touring artists',
      'Events and festivals',
      'Local brands building a product line',
    ],
    note: 'Whether you need 30 T-shirts for your bar staff or a full on-demand store shipping worldwide, the process is the same — we design, you approve, it ships.',
  },
  {
    slug: 'photography',
    title: 'Product Photography',
    subtitle: 'Photography',
    tag: 'PHOTO',
    tagline: 'Shots that sell.',
    description:
      'Commercial-grade product and venue photography. Clean studio work or atmospheric on-location — whatever your product or space demands.',
    gradient: 'linear-gradient(135deg, #32323E 0%, #505060 55%, #404050 100%)',
    includes: [
      'Studio or on-location shoot',
      'Product photography on white or styled sets',
      'Venue & hospitality photography',
      'Full post-production & colour grade',
      'Web-optimised & print-ready file delivery',
      'Commercial usage licence',
      'Shot list planning & art direction',
    ],
    forClients: [
      'E-commerce brands needing product shots',
      'Restaurants and cafés updating their menus',
      'Retail shops launching online',
      'Venues creating atmosphere imagery',
    ],
    note: 'Good photography is the difference between a product page that converts and one that doesn\'t. We\'ve seen the numbers.',
  },
  {
    slug: 'film',
    title: 'Film & Video',
    subtitle: 'Film',
    tag: 'FILM',
    tagline: 'Stories told with craft.',
    description:
      'Brand films, promo content, and social-first video that stops the scroll. From a single reel to a full campaign, we handle every frame.',
    gradient: 'linear-gradient(135deg, #18181E 0%, #28283A 55%, #1E1E30 100%)',
    includes: [
      'Pre-production planning & scripting',
      'Professional shoot (crew, gear, locations)',
      'Colour grade & professional edit',
      'Motion graphics & titling',
      'Social cuts (Reels, TikTok, Stories)',
      'Music licensing & sound design',
      'File delivery in all required formats',
    ],
    forClients: [
      'Venues promoting events or atmosphere',
      'Brands launching a product or campaign',
      'Businesses needing an evergreen brand film',
      'Events wanting professional coverage',
    ],
    note: 'Every project starts with a brief conversation about what the video needs to do. We don\'t pick up a camera until we know the answer to that.',
  },
]

export function getService(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug)
}
