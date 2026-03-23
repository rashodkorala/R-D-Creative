import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'R-D Creative — Local Brands. Bold Work.',
  description:
    'R-D Creative Agency delivers websites, Shopify stores, graphic design, merch, product photography, and filmmaking for local businesses, pubs, bars, restaurants, and nightclubs.',
  openGraph: {
    title: 'R-D Creative — Local Brands. Bold Work.',
    description:
      'Full-service creative agency for local businesses. Websites, design, photography, and film.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain bg-bg-primary text-text-primary font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
