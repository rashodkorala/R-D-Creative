export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-surface border-t border-surface-border"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline — Times New Roman */}
        <h2
          className="font-display text-5xl sm:text-6xl lg:text-7xl text-ink mb-6 leading-tight"
          style={{ fontWeight: 400 }}
        >
          Let&rsquo;s build something.
        </h2>

        {/* Subtext — Helvetica */}
        <p className="text-base text-muted font-ui leading-relaxed max-w-sm mx-auto mb-10">
          Based in St.&nbsp;John&rsquo;s, NL. Working with local businesses
          and brands across Newfoundland.
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="mailto:hello@rdcreative.ca"
            className="text-sm font-ui text-muted hover:text-ink transition-colors underline underline-offset-4"
          >
            hello@rdcreative.ca
          </a>
          <a
            href="mailto:hello@rdcreative.ca"
            className="inline-flex items-center gap-2 bg-ink text-white text-sm font-ui px-8 py-4 hover:bg-muted transition-colors"
            style={{ borderRadius: '8px' }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
