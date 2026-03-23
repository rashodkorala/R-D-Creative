import { Target, Zap, Clock } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ClientTypeBadge from '@/components/ui/ClientTypeBadge'
import { CLIENT_TYPES } from '@/lib/constants'

const FEATURES = [
  {
    icon: Target,
    title: 'Local-First Focus',
    description: 'We understand local audiences, local platforms, and what actually works in your community.',
  },
  {
    icon: Zap,
    title: 'We Know Your Scene',
    description: 'From the energy of a nightclub to the warmth of a local eatery — we speak your language.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Local businesses move fast. So do we. No agency red tape, no month-long timelines.',
  },
]

export default function WhoWeWorkWith() {
  return (
    <section id="clients" className="py-24 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Clients"
          heading="BUILT FOR THE BUSINESSES THAT KEEP THE CITY ALIVE"
          align="center"
        />

        {/* Client type badges — like the pill/tag elements in the reference */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CLIENT_TYPES.map((client) => (
            <ClientTypeBadge key={client.label} client={client} />
          ))}
        </div>

        {/* Feature callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="p-6 border border-border rounded-sm hover:border-accent/30 transition-colors bg-bg-primary"
              >
                <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-sm flex items-center justify-center mb-4">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
