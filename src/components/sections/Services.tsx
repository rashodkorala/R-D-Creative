import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES_DETAIL } from '@/lib/services-data'

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <h2 className="font-display text-4xl lg:text-5xl text-ink" style={{ fontWeight: 400 }}>
            What we do
          </h2>
          <p className="mt-4 text-sm text-muted font-ui max-w-xl leading-relaxed">
            From your first website to a full brand system and Shopify store — we handle
            the creative and technical work so you can focus on running the business.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DETAIL.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-surface border border-surface-border overflow-hidden hover:shadow-lg transition-all duration-300 group block"
              style={{ borderRadius: '12px' }}
            >
              {/* Colour block — 4:3 aspect ratio */}
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: '4/3', background: service.gradient }}
                aria-hidden
              >
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-all duration-300" />
              </div>

              {/* Card body */}
              <div className="p-5">
                {/* Tag pill */}
                <span
                  className="inline-block text-[10px] font-ui text-olive bg-parchment border border-surface-border px-3 py-1 mb-3"
                  style={{ borderRadius: '999px', letterSpacing: '0.08em' }}
                >
                  {service.tag}
                </span>

                {/* Title */}
                <h3
                  className="font-display text-xl text-ink mb-2 leading-snug group-hover:text-olive transition-colors"
                  style={{ fontWeight: 400 }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted font-ui leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTA */}
                <span className="text-sm text-olive font-ui group-hover:text-ink transition-colors flex items-center gap-1.5">
                  Learn more
                  <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
