import { Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { SOCIAL_LINKS, CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(232,255,0,0.05) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-accent" />
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">Get In Touch</p>
          <div className="w-8 h-px bg-accent" />
        </div>

        <h2 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wider text-text-primary leading-none mb-6">
          READY TO ELEVATE YOUR BRAND?
        </h2>

        <p className="text-lg text-text-secondary max-w-xl mx-auto leading-relaxed mb-12">
          Get in touch — we&apos;ll have a no-pressure chat about what you need and how we can help make it happen.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center gap-3 bg-accent text-bg-primary font-semibold px-8 py-4 rounded-sm hover:bg-accent/90 transition-colors"
          >
            <Mail size={18} />
            Email Us
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-border text-text-primary font-medium px-8 py-4 rounded-sm hover:border-accent hover:text-accent transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-10">
          <p className="text-xs tracking-widest text-text-muted uppercase mb-6">Find Us Online</p>
          <div className="flex items-center justify-center gap-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.platform}
                  href={social.href}
                  aria-label={social.platform}
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors group"
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline">{social.platform}</span>
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
