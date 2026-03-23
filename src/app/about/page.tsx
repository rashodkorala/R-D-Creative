import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "About — R&D Creative",
  description:
    "We're a small team of designers, developers, and filmmakers based in St. John's, NL — working with local venues and brands across Newfoundland.",
}

const VALUES = [
  {
    title: 'Local first',
    body: "St. John's is our home, not a market. We know the venues, the culture, and the people. That context shows up in the work.",
  },
  {
    title: 'Craft over volume',
    body: "We'd rather do fewer projects properly than churn through work. Quality takes time and we protect that time for every client.",
  },
  {
    title: 'Honest work',
    body: "No inflated proposals, no scope creep surprises. We tell you what you need, what it costs, and we deliver what we promise.",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-parchment min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="bg-ink pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p
            className="text-[10px] font-ui text-white/40 uppercase mb-5"
            style={{ letterSpacing: '0.12em' }}
          >
            About us
          </p>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-2xl mb-5"
            style={{ fontWeight: 400 }}
          >
            Creative built for St.&nbsp;John&rsquo;s.
          </h1>

          <p className="text-base sm:text-lg text-white/65 font-ui leading-relaxed max-w-xl">
            We&rsquo;re a small team of designers, developers, and filmmakers working with
            local venues and brands across Newfoundland.
          </p>

        </div>
      </div>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <div className="bg-parchment py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

            {/* Pull-quote */}
            <div className="lg:sticky lg:top-24">
              <p
                className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug"
                style={{ fontWeight: 400 }}
              >
                &ldquo;We care about the places and businesses that make St.&nbsp;John&rsquo;s what it is.&rdquo;
              </p>
            </div>

            {/* Narrative */}
            <div className="space-y-6">
              <p className="text-base text-muted font-ui leading-relaxed">
                R&amp;D Creative started because we kept seeing the same problem: great local
                businesses with no real online presence. Venues we loved, brands we believed in
                — all underselling themselves with outdated sites, inconsistent design, and
                photography that didn&rsquo;t do the product justice.
              </p>
              <p className="text-base text-muted font-ui leading-relaxed">
                We&rsquo;re not a large agency with layers of account managers. We&rsquo;re a tight
                team — you&rsquo;ll work directly with the people building your project, from
                first conversation to launch. That&rsquo;s how we keep the work sharp and the
                process fast.
              </p>
              <p className="text-base text-muted font-ui leading-relaxed">
                Everything we build is for St.&nbsp;John&rsquo;s first. We understand the market,
                the audience, and the pace of business here. If you&rsquo;re a local brand that
                needs creative work done properly, we&rsquo;re the right team.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <div className="bg-surface border-t border-surface-border py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p
            className="text-[10px] font-ui text-olive uppercase mb-10"
            style={{ letterSpacing: '0.12em' }}
          >
            What we believe
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-surface-border" style={{ borderRadius: '12px', overflow: 'hidden' }}>
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={[
                  'p-7 sm:p-8 bg-surface hover:bg-parchment transition-colors',
                  i < VALUES.length - 1
                    ? 'border-b sm:border-b-0 sm:border-r border-surface-border'
                    : '',
                ].join(' ')}
              >
                <h3
                  className="font-display text-xl text-ink mb-3 leading-snug"
                  style={{ fontWeight: 400 }}
                >
                  {v.title}
                </h3>
                <p className="text-sm text-muted font-ui leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── See the work ─────────────────────────────────────────────────── */}
      <div className="border-t border-surface-border bg-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#portfolio"
            className="group flex items-center justify-between py-8 sm:py-10"
          >
            <span
              className="font-display text-xl sm:text-2xl text-ink group-hover:text-olive transition-colors"
              style={{ fontWeight: 400 }}
            >
              Actions speak louder. See the work.
            </span>
            <ArrowRight
              size={20}
              className="text-muted group-hover:text-olive group-hover:translate-x-1 transition-all"
            />
          </Link>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight"
            style={{ fontWeight: 400 }}
          >
            Ready to work together?
          </h2>
          <p className="text-white/60 font-ui text-base mb-8 max-w-sm mx-auto">
            Based in St.&nbsp;John&rsquo;s. Working with brands across Newfoundland.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-cta text-ink text-sm font-ui px-8 py-4 hover:bg-amber hover:text-white transition-all duration-200"
            style={{ borderRadius: '8px' }}
          >
            Get in touch
          </a>
        </div>
      </section>

    </div>
  )
}
