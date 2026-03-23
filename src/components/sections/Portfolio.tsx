const PORTFOLIO = [
  {
    id: 1,
    name: 'MOOV',
    tags: ['Shopify', 'Branding'],
    description: "Dark-themed e-commerce store for a smart alarm product.",
    gradient: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 45%, #22203C 100%)',
  },
  {
    id: 2,
    name: 'Rob Roy',
    tags: ['Branding', 'Web'],
    description: "Identity and digital presence for a St. John\u2019s venue.",
    gradient: 'linear-gradient(135deg, #3A1E0A 0%, #6B3A1A 45%, #8B4C22 100%)',
  },
  {
    id: 3,
    name: 'Konfusion',
    tags: ['Branding', 'Web'],
    description: "Visual identity and web for St. John\u2019s nightlife.",
    gradient: 'linear-gradient(135deg, #18082A 0%, #2E1048 45%, #3C1860 100%)',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <h2
            className="font-display text-4xl lg:text-5xl text-ink"
            style={{ fontWeight: 400 }}
          >
            Selected work
          </h2>
        </div>

        {/* 3-column 16:9 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PORTFOLIO.map((project) => (
            <div
              key={project.id}
              className="bg-surface border border-surface-border overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              style={{ borderRadius: '12px' }}
            >
              {/* Photo area — 16:9 */}
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: '16/9', background: project.gradient }}
              >
                {/* Hover overlay with "View project" pill */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-all duration-300 flex items-center justify-center">
                  <span
                    className="text-white text-xs font-ui opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/50 px-5 py-2"
                    style={{ borderRadius: '999px', letterSpacing: '0.04em' }}
                  >
                    View project
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Service tag pills */}
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
                </div>

                {/* Project name — Times New Roman */}
                <h3
                  className="font-display text-2xl text-ink mb-1 leading-tight"
                  style={{ fontWeight: 400 }}
                >
                  {project.name}
                </h3>

                <p className="text-sm text-muted font-ui">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
