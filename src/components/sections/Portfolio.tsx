import SectionHeading from '@/components/ui/SectionHeading'

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Shopify Store Redesign',
    type: 'Web & E-Commerce',
    client: 'Local Apparel Brand',
    accent: '#E8FF00',
    bg: 'from-[#1a1a0e] to-[#0f0f07]',
    tall: true,
  },
  {
    id: 2,
    title: 'Brand Identity Package',
    type: 'Graphic Design',
    client: 'City Bar & Kitchen',
    accent: '#FF6B35',
    bg: 'from-[#1a0f0a] to-[#0f0a07]',
    tall: false,
  },
  {
    id: 3,
    title: 'Product Photography',
    type: 'Photography',
    client: 'Craft Brewery',
    accent: '#A8EDEA',
    bg: 'from-[#0a141a] to-[#070f14]',
    tall: false,
  },
  {
    id: 4,
    title: 'Promo Film',
    type: 'Filmmaking',
    client: 'Nightclub Venue',
    accent: '#C77DFF',
    bg: 'from-[#110a1a] to-[#0a0710]',
    tall: true,
  },
  {
    id: 5,
    title: 'Merch Design & Fulfilment',
    type: 'Design & Print',
    client: 'Music Festival',
    accent: '#06D6A0',
    bg: 'from-[#0a1a12] to-[#07100c]',
    tall: false,
  },
  {
    id: 6,
    title: 'Restaurant Landing Page',
    type: 'Web',
    client: 'Local Eatery',
    accent: '#FFB703',
    bg: 'from-[#1a1508] to-[#0f0e06]',
    tall: false,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <SectionHeading
            eyebrow="Our Work"
            heading="PROJECTS WE'RE PROUD OF"
          />
          <a
            href="#contact"
            className="self-start sm:self-auto text-sm text-text-secondary hover:text-accent transition-colors border-b border-current pb-0.5"
          >
            Start your project →
          </a>
        </div>

        {/* Masonry-style grid — mirrors the layered card layout in the reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`
                relative group overflow-hidden rounded-sm border border-border cursor-pointer
                bg-gradient-to-br ${item.bg}
                ${item.tall ? 'sm:row-span-2' : 'row-span-1'}
                hover:border-opacity-60 transition-all duration-300
              `}
              style={{ borderColor: `${item.accent}20` }}
            >
              {/* Decorative gradient blob */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${item.accent}30 0%, transparent 70%)`,
                }}
                aria-hidden
              />

              {/* Grid lines */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `linear-gradient(${item.accent} 1px, transparent 1px), linear-gradient(90deg, ${item.accent} 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
                aria-hidden
              />

              {/* Content overlay — shows on hover like in reference */}
              <div className="absolute inset-0 flex flex-col justify-between p-5">
                {/* Top badge */}
                <div className="flex items-start justify-between">
                  <span
                    className="text-xs px-3 py-1 rounded-sm border backdrop-blur-sm"
                    style={{ borderColor: `${item.accent}40`, color: item.accent, backgroundColor: `${item.accent}10` }}
                  >
                    {item.type}
                  </span>
                </div>

                {/* Bottom info */}
                <div>
                  <p className="text-xs text-text-muted mb-1">{item.client}</p>
                  <h3 className="font-display text-xl lg:text-2xl tracking-wider text-text-primary">
                    {item.title}
                  </h3>

                  {/* CTA — hidden, appears on hover like "Veiw tour" in reference */}
                  <div className="mt-3 h-0 overflow-hidden group-hover:h-10 transition-all duration-300">
                    <span
                      className="block text-center text-xs font-medium py-2.5 rounded-sm transition-colors"
                      style={{ backgroundColor: `${item.accent}20`, color: item.accent }}
                    >
                      View project →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
