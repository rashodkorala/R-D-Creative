const CLIENT_TYPES = [
  { label: 'Pubs & Bars', descriptor: 'hospitality' },
  { label: 'Restaurants', descriptor: 'food & drink' },
  { label: 'Nightclubs', descriptor: 'nightlife' },
  { label: 'Retail Brands', descriptor: 'local makers' },
  { label: 'E-commerce', descriptor: 'online stores' },
  { label: 'Events', descriptor: 'promotions' },
]

export default function WhoWeWorkWith() {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — copy */}
          <div>
            <h2
              className="font-display text-4xl lg:text-5xl text-ink leading-tight mb-6 lg:mb-8"
              style={{ fontWeight: 400 }}
            >
              Built for venues and brands
            </h2>
            <p className="text-base text-muted font-ui leading-relaxed max-w-md">
              We work with St.&nbsp;John&rsquo;s venues, hospitality businesses, and local
              brands that need creative work done properly — from a single
              landing page to a full brand and Shopify build.
            </p>
          </div>

          {/* Right — category list (mirrors reference filter sidebar) */}
          <div
            className="border border-surface-border overflow-hidden bg-parchment"
            style={{ borderRadius: '12px' }}
          >
            {CLIENT_TYPES.map((client, i) => (
              <div
                key={client.label}
                className={[
                  'flex items-center justify-between px-6 py-4 font-ui text-sm hover:bg-surface transition-colors',
                  i < CLIENT_TYPES.length - 1 ? 'border-b border-surface-border' : '',
                ].join(' ')}
              >
                <span className="text-ink">{client.label}</span>
                <span
                  className="text-xs text-muted"
                  style={{ letterSpacing: '0.04em' }}
                >
                  / {client.descriptor}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
