import SectionHeading from '@/components/ui/SectionHeading'
import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="How We Work"
          heading="SIMPLE PROCESS. SERIOUS RESULTS."
          subheading="We cut the fluff and get straight to the work that matters."
        />

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px bg-border z-0" aria-hidden />

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-8 pb-12 md:pb-0"
            >
              {/* Step number circle */}
              <div className="w-20 h-20 border-2 border-accent rounded-sm flex items-center justify-center bg-bg-primary mb-6 flex-shrink-0">
                <span className="font-display text-5xl text-accent tracking-wider leading-none">
                  {String(step.step).padStart(2, '0')}
                </span>
              </div>

              {/* Vertical connector (mobile only) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="md:hidden absolute left-10 top-20 w-px h-12 bg-border" aria-hidden />
              )}

              <h3 className="font-display text-2xl tracking-wider text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA nudge */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <span className="w-8 h-px bg-current" />
            Ready to get started? Let&apos;s talk.
            <span className="w-8 h-px bg-current" />
          </a>
        </div>
      </div>
    </section>
  )
}
