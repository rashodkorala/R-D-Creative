const TESTIMONIALS = [
  {
    quote:
      "R&D turned our old site into something we're actually proud to show people. We saw a noticeable jump in bookings within the first month.",
    name: 'Jamie M.',
    business: 'Rob Roy Pub',
    service: 'Web & Branding',
  },
  {
    quote:
      "The merch they designed for us sold out in two weeks. The quality was spot on and the whole process was painless from our end.",
    name: 'Sarah K.',
    business: 'Konfusion',
    service: 'Merch',
  },
  {
    quote:
      "Professional, fast, and they actually got what we were going for without us having to over-explain. The photos speak for themselves.",
    name: 'Liam T.',
    business: 'Local Brand Owner',
    service: 'Photography',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-parchment border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p
            className="text-[10px] font-ui text-olive uppercase mb-3"
            style={{ letterSpacing: '0.12em' }}
          >
            What clients say
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl text-ink"
            style={{ fontWeight: 400 }}
          >
            Trusted by St.&nbsp;John&rsquo;s.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-surface-border flex flex-col p-7 sm:p-8"
              style={{ borderRadius: '12px' }}
            >
              {/* Large opening quote */}
              <span
                className="font-display text-6xl text-olive leading-none mb-4 select-none"
                style={{ fontWeight: 400, opacity: 0.25 }}
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="font-display text-[1.1rem] text-ink leading-relaxed flex-1 mb-6"
                style={{ fontWeight: 400 }}
              >
                {t.quote}
              </p>

              {/* Divider */}
              <div className="border-t border-surface-border mb-5" />

              {/* Attribution */}
              <div>
                <p className="text-sm text-ink font-ui font-medium">{t.name}</p>
                <p className="text-xs text-muted font-ui mt-0.5">
                  {t.business}
                  <span className="mx-1.5 opacity-40">/</span>
                  {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
