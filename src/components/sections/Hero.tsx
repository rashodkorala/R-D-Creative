'use client'

const FILTER_ITEMS = ['Web & Shopify', 'Design & Merch', 'Film', 'Photography']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background — atmospheric gradient evoking St. John's harbour at golden hour */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(26, 26, 26, 0.15) 0%,
              rgba(26, 26, 26, 0.1) 45%,
              rgba(26, 26, 26, 0.6) 80%,
              rgba(26, 26, 26, 0.78) 100%
            ),
            linear-gradient(
              140deg,
              #1a3a4a 0%,
              #2d4a35 20%,
              #7a5c18 45%,
              #5a3520 70%,
              #1e2030 100%
            )
          `,
        }}
        aria-hidden
      />

      {/* Subtle film-grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
        }}
        aria-hidden
      />

      {/* Hero content — bottom-anchored, padded to clear filter bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-52 sm:pb-44 lg:pb-32">
        <h1
          className="font-display text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] text-white leading-tight max-w-3xl"
          style={{ fontWeight: 400 }}
        >
          Creative built for St.&nbsp;John&rsquo;s.
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/75 font-ui max-w-xs sm:max-w-sm lg:max-w-md leading-relaxed">
          Websites, design, film, and merch for venues and local brands.
        </p>

        <a
          href="#contact"
          className="mt-8 sm:mt-10 inline-flex items-center bg-cta text-ink text-sm font-ui px-7 sm:px-8 py-3.5 sm:py-4 hover:bg-amber hover:text-white transition-all duration-200"
          style={{ borderRadius: '8px' }}
        >
          Work with us
        </a>
      </div>

      {/* Bottom filter bar — parchment, Helvetica uppercase */}
      <div className="absolute bottom-0 left-0 right-0 bg-parchment border-t border-surface-border z-10">

        {/* Desktop: horizontal row */}
        <div className="hidden lg:flex items-stretch max-w-7xl mx-auto px-6 lg:px-8 h-14">
          {FILTER_ITEMS.map((item) => (
            <a
              key={item}
              href="#services"
              className="flex items-center px-6 text-[11px] font-ui text-muted hover:text-ink transition-colors border-r border-surface-border uppercase whitespace-nowrap flex-shrink-0"
              style={{ letterSpacing: '0.08em' }}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center px-6 text-[11px] font-ui text-amber hover:text-ink transition-colors uppercase whitespace-nowrap ml-auto"
            style={{ letterSpacing: '0.08em' }}
          >
            Get in touch →
          </a>
        </div>

        {/* Mobile: 2×2 grid + full-width CTA */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2">
            {FILTER_ITEMS.map((item, i) => (
              <a
                key={item}
                href="#services"
                className={[
                  'flex items-center justify-center py-4 px-3 text-[10px] font-ui text-muted hover:text-ink transition-colors uppercase text-center leading-tight',
                  i % 2 === 0 ? 'border-r border-surface-border' : '',
                  i < 2 ? 'border-b border-surface-border' : '',
                ].join(' ')}
                style={{ letterSpacing: '0.07em' }}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="flex items-center justify-center py-3.5 text-[10px] font-ui text-amber hover:text-ink transition-colors uppercase border-t border-surface-border"
            style={{ letterSpacing: '0.08em' }}
          >
            Get in touch →
          </a>
        </div>

      </div>
    </section>
  )
}
