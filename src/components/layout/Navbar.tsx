'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import clsx from 'clsx'

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // At top of page with menu closed → light text for hero visibility
  const atTop = !scrolled && !menuOpen

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          // NOTE: no backdrop-blur here — backdrop-filter creates a new CSS
          // containing block that traps fixed children and breaks positioning.
          scrolled || menuOpen
            ? 'bg-parchment border-b border-surface-border'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Wordmark — Times New Roman */}
          <Link
            href="/"
            className={clsx(
              'font-display text-lg sm:text-xl transition-colors',
              atTop ? 'text-white' : 'text-ink hover:text-olive'
            )}
          >
            R&amp;D Creative Agency
          </Link>

          {/* Desktop nav — Helvetica */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  'text-sm transition-colors',
                  atTop
                    ? 'text-white/80 hover:text-white'
                    : 'text-muted hover:text-ink'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={clsx(
              'md:hidden p-2 -mr-2 transition-colors',
              atTop ? 'text-white' : 'text-ink'
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/*
        Mobile full-screen overlay — rendered OUTSIDE <header> as a sibling.
        This avoids the backdrop-filter containing-block bug: if the overlay
        were inside <header> and backdrop-filter were applied, `position:fixed`
        children would be trapped inside the header's stacking context.
      */}
      <div
        className={clsx(
          'fixed inset-0 z-[49] bg-parchment flex flex-col items-center justify-center transition-opacity duration-300 md:hidden',
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-6 w-full px-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[2.5rem] leading-tight text-ink hover:text-olive transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-10 bg-ink text-white text-sm font-ui px-10 py-4 hover:bg-muted transition-colors"
          style={{ borderRadius: '8px' }}
        >
          Get in touch
        </Link>
      </div>
    </>
  )
}
