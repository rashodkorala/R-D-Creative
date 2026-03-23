import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { PROJECTS, getProject } from '@/lib/projects'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}
  return {
    title: `${project.name} — R&D Creative`,
    description: project.overview,
  }
}

export default function WorkDetailPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug)
  const prev = PROJECTS[currentIndex - 1] ?? null
  const next = PROJECTS[currentIndex + 1] ?? null

  return (
    <div className="bg-parchment min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div
        className="relative w-full flex flex-col justify-end overflow-hidden"
        style={{ minHeight: '55vh', background: project.gradient }}
      >
        {/* subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.55) 100%)',
          }}
          aria-hidden
        />

        {/* back link */}
        <div className="absolute top-20 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-ui transition-colors"
            >
              <ArrowLeft size={14} />
              All work
            </Link>
          </div>
        </div>

        {/* project title */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-ui text-white/70 border border-white/30 px-3 py-1 uppercase"
                style={{ borderRadius: '999px', letterSpacing: '0.06em' }}
              >
                {tag}
              </span>
            ))}
            <span
              className="text-[10px] font-ui text-white/50 border border-white/20 px-3 py-1 uppercase"
              style={{ borderRadius: '999px', letterSpacing: '0.06em' }}
            >
              {project.year}
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
            style={{ fontWeight: 400 }}
          >
            {project.name}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-white/70 font-ui">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left — narrative */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div>
              <p
                className="font-display text-xl sm:text-2xl text-ink leading-relaxed"
                style={{ fontWeight: 400 }}
              >
                {project.overview}
              </p>
            </div>

            {/* Challenge / Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h2
                  className="text-[10px] font-ui text-muted uppercase mb-4"
                  style={{ letterSpacing: '0.1em' }}
                >
                  The challenge
                </h2>
                <p className="text-sm text-muted font-ui leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h2
                  className="text-[10px] font-ui text-muted uppercase mb-4"
                  style={{ letterSpacing: '0.1em' }}
                >
                  The approach
                </h2>
                <p className="text-sm text-muted font-ui leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

          </div>

          {/* Right — sidebar */}
          <div className="lg:col-span-1">
            <div
              className="bg-surface border border-surface-border p-6 sm:p-8"
              style={{ borderRadius: '12px' }}
            >
              <h2
                className="text-[10px] font-ui text-muted uppercase mb-5"
                style={{ letterSpacing: '0.1em' }}
              >
                Deliverables
              </h2>
              <ul className="space-y-3">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[6px] w-1 h-1 rounded-full bg-olive flex-shrink-0" />
                    <span className="text-sm text-ink font-ui leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-surface-border">
                <h2
                  className="text-[10px] font-ui text-muted uppercase mb-3"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Services
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-ui text-olive bg-parchment border border-surface-border px-3 py-1"
                      style={{ borderRadius: '999px', letterSpacing: '0.06em' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-surface-border">
                <h2
                  className="text-[10px] font-ui text-muted uppercase mb-1"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Year
                </h2>
                <p className="text-sm text-ink font-ui">{project.year}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Prev / Next navigation ───────────────────────────────────────── */}
      {(prev || next) && (
        <div className="border-t border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">

              {prev ? (
                <Link
                  href={`/work/${prev.slug}`}
                  className="group flex flex-col gap-1 py-8 sm:py-10 border-b sm:border-b-0 sm:border-r border-surface-border hover:bg-surface transition-colors px-2 sm:px-0 sm:pr-10"
                >
                  <span className="text-[10px] font-ui text-muted uppercase flex items-center gap-2" style={{ letterSpacing: '0.08em' }}>
                    <ArrowLeft size={12} />
                    Previous
                  </span>
                  <span className="font-display text-2xl text-ink group-hover:text-olive transition-colors" style={{ fontWeight: 400 }}>
                    {prev.name}
                  </span>
                  <span className="text-xs text-muted font-ui">{prev.tagline}</span>
                </Link>
              ) : (
                <div />
              )}

              {next && (
                <Link
                  href={`/work/${next.slug}`}
                  className="group flex flex-col gap-1 py-8 sm:py-10 hover:bg-surface transition-colors text-left sm:text-right sm:pl-10 px-2 sm:px-0"
                >
                  <span className="text-[10px] font-ui text-muted uppercase flex items-center gap-2 sm:justify-end" style={{ letterSpacing: '0.08em' }}>
                    Next
                    <ArrowRight size={12} />
                  </span>
                  <span className="font-display text-2xl text-ink group-hover:text-olive transition-colors" style={{ fontWeight: 400 }}>
                    {next.name}
                  </span>
                  <span className="text-xs text-muted font-ui">{next.tagline}</span>
                </Link>
              )}

            </div>
          </div>
        </div>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight"
            style={{ fontWeight: 400 }}
          >
            Ready to start your project?
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
