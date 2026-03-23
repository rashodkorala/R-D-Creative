'use client'

import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background — dark cinematic gradient (no image dependency) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,255,0,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 80% 100%, rgba(232,255,0,0.04) 0%, transparent 50%),
            linear-gradient(160deg, #0f0f0e 0%, #0A0A0A 40%, #0d0d0b 100%)
          `,
        }}
        aria-hidden
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,245,240,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,245,240,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-accent" />
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            R-D Creative Agency
          </p>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-7xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] leading-none tracking-wider text-text-primary max-w-5xl">
          WE MAKE LOCAL BRANDS{' '}
          <span
            className="text-accent"
            style={{ WebkitTextStroke: '0px' }}
          >
            IMPOSSIBLE
          </span>{' '}
          TO IGNORE.
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-lg lg:text-xl text-text-secondary max-w-2xl leading-relaxed">
          Websites. Design. Photography. Film.{' '}
          <br className="hidden sm:block" />
          Built for the venues and businesses that define your city.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 border border-border text-text-primary text-sm font-medium px-8 py-4 rounded-sm hover:border-text-secondary transition-colors"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-bg-primary text-sm font-semibold px-8 py-4 rounded-sm hover:bg-accent/90 transition-colors"
          >
            Start a Project →
          </a>
        </div>

        {/* Stats row — social proof */}
        <div className="mt-16 pt-8 border-t border-border grid grid-cols-3 gap-8 max-w-lg">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '4', label: 'Creative Disciplines' },
            { value: '100%', label: 'Local Focus' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-accent tracking-wider">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest text-text-muted uppercase">Scroll</span>
        <ChevronDown size={16} className="text-text-muted" />
      </div>
    </section>
  )
}
