const SERVICES = [
  {
    id: 1,
    title: 'Shopify & E-commerce',
    description: 'Online store builds, product pages, and full checkout flow.',
    tag: 'WEB',
    gradient: 'linear-gradient(135deg, #2D3A4A 0%, #3D4F6B 50%, #2A3550 100%)',
  },
  {
    id: 2,
    title: 'Websites & Landing Pages',
    description: 'Brand sites and campaign pages for local businesses.',
    tag: 'WEB',
    gradient: 'linear-gradient(135deg, #243B35 0%, #3B6B5A 55%, #2D4A45 100%)',
  },
  {
    id: 3,
    title: 'Graphic Design & Branding',
    description: 'Logos, print, and brand systems built to last.',
    tag: 'DESIGN',
    gradient: 'linear-gradient(135deg, #4A2D1A 0%, #8B5A2A 55%, #6B4020 100%)',
  },
  {
    id: 4,
    title: 'Merch',
    description: 'Concept to production to on-demand sales, handled end to end.',
    tag: 'MERCH',
    gradient: 'linear-gradient(135deg, #3A4820 0%, #5E7030 55%, #404D28 100%)',
  },
  {
    id: 5,
    title: 'Product Photography',
    description: 'Commercial-grade shooting for product and venue.',
    tag: 'PHOTO',
    gradient: 'linear-gradient(135deg, #32323E 0%, #505060 55%, #404050 100%)',
  },
  {
    id: 6,
    title: 'Film & Video',
    description: 'Brand films and promo content for venues and campaigns.',
    tag: 'FILM',
    gradient: 'linear-gradient(135deg, #18181E 0%, #28283A 55%, #1E1E30 100%)',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-display text-4xl lg:text-5xl text-ink" style={{ fontWeight: 400 }}>
            What we do
          </h2>
          <p className="mt-4 text-sm text-muted font-ui max-w-xl leading-relaxed">
            From your first website to a full brand system and Shopify store — we handle
            the creative and technical work so you can focus on running the business.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-surface border border-surface-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ borderRadius: '12px' }}
            >
              {/* Photo placeholder — 4:3 aspect ratio */}
              <div
                className="w-full"
                style={{ aspectRatio: '4/3', background: service.gradient }}
                aria-hidden
              />

              {/* Card body */}
              <div className="p-5">
                {/* Tag pill */}
                <span
                  className="inline-block text-[10px] font-ui text-olive bg-parchment border border-surface-border px-3 py-1 mb-3"
                  style={{ borderRadius: '999px', letterSpacing: '0.08em' }}
                >
                  {service.tag}
                </span>

                {/* Title — Times New Roman */}
                <h3
                  className="font-display text-xl text-ink mb-2 leading-snug"
                  style={{ fontWeight: 400 }}
                >
                  {service.title}
                </h3>

                {/* Description — Helvetica */}
                <p className="text-sm text-muted font-ui leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="text-sm text-olive font-ui hover:text-ink transition-colors"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
