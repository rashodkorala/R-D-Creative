import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check } from 'lucide-react'
import { SERVICES_DETAIL, getService } from '@/lib/services-data'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return SERVICES_DETAIL.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title: `${service.title} — R&D Creative`,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  const currentIndex = SERVICES_DETAIL.findIndex((s) => s.slug === params.slug)
  const prev = SERVICES_DETAIL[currentIndex - 1] ?? null
  const next = SERVICES_DETAIL[currentIndex + 1] ?? null

  return (
    <div className="bg-parchment min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* back link */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-ui transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            All services
          </Link>

          {/* tag */}
          <div className="mb-5">
            <span
              className="text-[10px] font-ui text-white/50 border border-white/20 px-3 py-1 uppercase"
              style={{ borderRadius: '999px', letterSpacing: '0.1em' }}
            >
              {service.subtitle}
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-4"
            style={{ fontWeight: 400 }}
          >
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl font-display text-white/50 mb-6 max-w-xl" style={{ fontWeight: 400 }}>
            {service.tagline}
          </p>

          <p className="text-base text-white/70 font-ui leading-relaxed max-w-2xl">
            {service.description}
          </p>

        </div>
      </div>

      {/* ── Accent stripe ────────────────────────────────────────────────── */}
      <div
        className="w-full h-1.5"
        style={{ background: service.gradient }}
        aria-hidden
      />

      {/* ── What's included ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Main: includes list */}
          <div className="lg:col-span-2">
            <h2
              className="text-[10px] font-ui text-muted uppercase mb-8"
              style={{ letterSpacing: '0.1em' }}
            >
              What&rsquo;s included
            </h2>

            <ul className="space-y-0 border border-surface-border" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              {service.includes.map((item, i) => (
                <li
                  key={item}
                  className={[
                    'flex items-start gap-4 px-6 py-5 bg-surface hover:bg-parchment transition-colors',
                    i < service.includes.length - 1 ? 'border-b border-surface-border' : '',
                  ].join(' ')}
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
                    <Check size={11} color="white" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-ink font-ui leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            {/* Note */}
            {service.note && (
              <div className="mt-8 border-l-2 border-olive pl-5">
                <p className="text-sm text-muted font-ui leading-relaxed italic">
                  {service.note}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar: who it's for + CTA */}
          <div className="lg:col-span-1 space-y-6">

            <div
              className="bg-surface border border-surface-border p-6 sm:p-8"
              style={{ borderRadius: '12px' }}
            >
              <h2
                className="text-[10px] font-ui text-muted uppercase mb-5"
                style={{ letterSpacing: '0.1em' }}
              >
                Who it&rsquo;s for
              </h2>
              <ul className="space-y-3">
                {service.forClients.map((client) => (
                  <li key={client} className="flex items-start gap-3">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-olive flex-shrink-0" />
                    <span className="text-sm text-ink font-ui leading-snug">{client}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-ink p-6 sm:p-8"
              style={{ borderRadius: '12px' }}
            >
              <p
                className="font-display text-xl text-white mb-2 leading-tight"
                style={{ fontWeight: 400 }}
              >
                Ready to get started?
              </p>
              <p className="text-sm text-white/60 font-ui mb-6 leading-relaxed">
                Tell us what you need and we&rsquo;ll get back to you within one business day.
              </p>
              <a
                href="/#contact"
                className="block text-center bg-cta text-ink text-sm font-ui px-6 py-3.5 hover:bg-amber hover:text-white transition-all duration-200"
                style={{ borderRadius: '8px' }}
              >
                Get in touch
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* ── Other services ───────────────────────────────────────────────── */}
      {(prev || next) && (
        <div className="border-t border-surface-border bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">

            <h2
              className="text-[10px] font-ui text-muted uppercase mb-8"
              style={{ letterSpacing: '0.1em' }}
            >
              Other services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[prev, next].filter(Boolean).map((s) => s && (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-1.5 border border-surface-border bg-parchment hover:bg-white p-6 transition-colors"
                  style={{ borderRadius: '12px' }}
                >
                  <span
                    className="text-[10px] font-ui text-muted uppercase"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    {s.subtitle}
                  </span>
                  <span className="font-display text-xl text-ink group-hover:text-olive transition-colors" style={{ fontWeight: 400 }}>
                    {s.title}
                  </span>
                  <span className="text-xs text-muted font-ui">{s.tagline}</span>
                </Link>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
