import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "R&D Creative — Creative built for St. John's.",
  description:
    "Websites, design, film, and merch for venues and local brands in St. John's, NL.",
  openGraph: {
    title: "R&D Creative — Creative built for St. John's.",
    description:
      'Full-service creative agency for hospitality venues and local brands.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-parchment text-ink font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
