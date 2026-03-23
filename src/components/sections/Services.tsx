import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row — mirroring the "Popular destinations" header in the reference */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="What We Do"
            heading="EVERY TOOL YOU NEED"
            subheading="One agency, four disciplines — handled with the same level of craft across the board."
          />

          {/* Category tags — like the right-side tour type tags in the reference */}
          <div className="flex flex-col gap-2 lg:min-w-[180px]">
            {['Digital', 'Design', 'Photography', 'Film'].map((tag, i) => (
              <div
                key={tag}
                className="flex items-center justify-between bg-bg-elevated border border-border px-4 py-2 rounded-sm text-sm text-text-secondary hover:border-accent hover:text-text-primary transition-all cursor-pointer"
              >
                <span>{tag}</span>
                <span className="text-xs text-text-muted">/{['3 services', '4 formats', 'studio', 'promo'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards grid — matches the 3-card layout in the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
