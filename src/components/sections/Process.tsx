import { PROCESS_STEPS } from '@/lib/constants'

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-24 bg-surface border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 lg:mb-16">
          <p
            className="text-[10px] font-ui text-olive uppercase mb-3"
            style={{ letterSpacing: '0.12em' }}
          >
            How we work
          </p>
          <h2
            className="font-display text-4xl lg:text-5xl text-ink"
            style={{ fontWeight: 400 }}
          >
            Simple process.<br className="hidden sm:block" /> Serious results.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0">

          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[2.25rem] left-[22%] right-[22%] h-px bg-surface-border z-0"
            aria-hidden
          />

          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center pb-12 md:pb-0 md:px-10"
            >
              {/* Number circle */}
              <div className="w-[4.5rem] h-[4.5rem] border border-surface-border bg-surface flex items-center justify-center mb-6 flex-shrink-0" style={{ borderRadius: '50%' }}>
                <span
                  className="font-display text-2xl text-olive leading-none"
                  style={{ fontWeight: 400 }}
                >
                  {String(step.step).padStart(2, '0')}
                </span>
              </div>

              {/* Vertical connector — mobile only */}
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  className="md:hidden absolute left-[1.375rem] top-[4.5rem] w-px bg-surface-border"
                  style={{ height: '3rem' }}
                  aria-hidden
                />
              )}

              <h3
                className="font-display text-xl text-ink mb-3 leading-snug"
                style={{ fontWeight: 400 }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-muted font-ui leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}

        </div>

        {/* CTA nudge */}
        <div className="mt-14 lg:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-ui text-muted hover:text-ink transition-colors"
          >
            <span className="w-8 h-px bg-current" aria-hidden />
            Discovery starts with a conversation
            <span className="w-8 h-px bg-current" aria-hidden />
          </a>
        </div>

      </div>
    </section>
  )
}
