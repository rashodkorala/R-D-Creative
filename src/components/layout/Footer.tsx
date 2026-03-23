import { NAV_LINKS, SOCIAL_LINKS, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl tracking-wider text-text-primary">
              R-D <span className="text-accent">CREATIVE</span>
            </p>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              Full-service creative studio for local businesses. Websites, design, photography & film.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-4">Navigate</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-text-muted uppercase mb-4">Follow Us</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.platform}
                    className="w-10 h-10 border border-border rounded-sm flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 block text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} R-D Creative Agency. All rights reserved.</p>
          <p>Made with craft. Built to last.</p>
        </div>
      </div>
    </footer>
  )
}
