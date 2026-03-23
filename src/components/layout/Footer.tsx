export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Wordmark */}
          <p className="font-display text-2xl text-ink" style={{ fontWeight: 400 }}>
            R&amp;D Creative Agency
          </p>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#services"
              className="text-sm text-muted hover:text-ink font-ui transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-sm text-muted hover:text-ink font-ui transition-colors"
            >
              Work
            </a>
            <a
              href="mailto:hello@rdcreative.ca"
              className="text-sm text-muted hover:text-ink font-ui transition-colors"
            >
              hello@rdcreative.ca
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-border">
          <p className="text-xs text-muted font-ui">
            &copy; {new Date().getFullYear()} R&amp;D Creative Agency. St.&nbsp;John&rsquo;s, NL.
          </p>
        </div>
      </div>
    </footer>
  )
}
