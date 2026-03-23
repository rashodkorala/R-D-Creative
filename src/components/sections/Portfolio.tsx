import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2
            className="font-display text-4xl lg:text-5xl text-ink"
            style={{ fontWeight: 400 }}
          >
            Selected work
          </h2>
          <Link
            href="/work/moov"
            className="text-sm font-ui text-muted hover:text-ink transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3-column 16:9 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="bg-surface border border-surface-border overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer block"
              style={{ borderRadius: '12px' }}
            >
              {/* Photo area — 16:9 */}
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: '16/9', background: project.gradient }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-300 flex items-center justify-center">
                  <span
                    className="text-white text-xs font-ui opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/50 px-5 py-2 flex items-center gap-2"
                    style={{ borderRadius: '999px', letterSpacing: '0.04em' }}
                  >
                    View project
                    <ArrowRight size={11} />
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-ui text-muted border border-surface-border px-3 py-1"
                      style={{ borderRadius: '999px', letterSpacing: '0.04em' }}
                    >
                      {tag}
                    </span>
                  ))}
                  <span
                    className="text-[10px] font-ui text-muted/60 ml-auto"
                    style={{ letterSpacing: '0.04em' }}
                  >
                    {project.year}
                  </span>
                </div>

                <h3
                  className="font-display text-2xl text-ink mb-1 leading-tight group-hover:text-olive transition-colors"
                  style={{ fontWeight: 400 }}
                >
                  {project.name}
                </h3>

                <p className="text-sm text-muted font-ui">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
