import { Service } from '@/lib/types'

const CARD_GRADIENTS = [
  'from-[#1a1a0e] via-[#111108] to-[#0a0a05]',
  'from-[#1a0f08] via-[#110a05] to-[#0a0703]',
  'from-[#081418] via-[#050d11] to-[#03080a]',
  'from-[#10081a] via-[#0a0511] to-[#06030a]',
]

interface Props {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: Props) {
  const Icon = service.icon
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length]

  return (
    <div
      className="service-card group relative flex flex-col bg-bg-secondary border border-border rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image area — cinematic gradient placeholder (replace with real image via background-image CSS) */}
      <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${gradient}`}>
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(rgba(232,255,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,0,1) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(232,255,0,0.12) 0%, transparent 70%)' }}
          aria-hidden
        />

        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 via-transparent to-transparent" />

        {/* Tag badge — like the flag/rating badge in the reference */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-bg-primary/80 backdrop-blur-sm text-text-secondary text-xs px-3 py-1 rounded-sm border border-border">
            {service.tag}
          </span>
        </div>

        {/* Icon badge */}
        <div className="absolute top-3 right-3 w-9 h-9 bg-accent/10 border border-accent/30 rounded-sm flex items-center justify-center">
          <Icon size={16} className="text-accent" />
        </div>
      </div>

      {/* Content — styled like the destination info below the image */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-text-muted uppercase tracking-widest mb-1">{service.subtitle}</p>
        <h3 className="font-display text-2xl tracking-wider text-text-primary mb-3 group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed flex-1">{service.description}</p>

        {/* "View tour" style CTA — matches reference card button */}
        <a
          href="#contact"
          className="mt-5 block text-center text-sm font-medium bg-bg-elevated border border-border text-text-secondary hover:bg-accent hover:text-bg-primary hover:border-accent transition-all duration-200 py-3 rounded-sm"
        >
          Start a project →
        </a>
      </div>
    </div>
  )
}
