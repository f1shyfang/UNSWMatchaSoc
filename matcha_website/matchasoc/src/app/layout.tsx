import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: {
    default: 'UNSW Matcha Society ',
    template: '%s | UNSW Matcha Society'
  },
  description: 'The UNSW Matcha Society celebrates  Matcha and mindfulness. Join our community for matcha tastings, and events.',
  keywords: [
    'UNSW Matcha Society',
    'Japanese Tea Culture',
    'Matcha',
    'Tea Ceremony',
    'UNSW Student Society',
    'Mindfulness',
    'Japanese Culture',
    'Student Events',
    'Tea Tasting',
    'Cultural Exchange'
  ],
  authors: [{ name: 'UNSW Matcha Society Executive Team' }],
  creator: 'UNSW Matcha Society',
  publisher: 'UNSW Matcha Society',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.unswmatchasoc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.unswmatchasoc.com',
    title: 'UNSW Matcha Society | Japanese Tea Culture & Community',
    description: 'The UNSW Matcha Society celebrates Japanese tea culture and mindfulness. Join our community for traditional tea ceremonies, matcha tastings, and cultural exchange events.',
    siteName: 'UNSW Matcha Society',
    images: [
      {
        url: '/images/assets/matcha-logo.png',
        width: 1200,
        height: 630,
        alt: 'UNSW Matcha Society Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNSW Matcha Society | Japanese Tea Culture & Community',
    description: 'The UNSW Matcha Society celebrates Japanese tea culture and mindfulness. Join our community for traditional tea ceremonies, matcha tastings, and cultural exchange events.',
    images: ['/images/assets/matcha-logo.png'],
    creator: '@UNSWMatchaSoc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  other: {
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data - Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UNSW Matcha Society",
              "url": "https://www.unswmatchasoc.com",
              "logo": "https://www.unswmatchasoc.com/images/assets/matcha-logo.png",
              "description": "The UNSW Matcha Society celebrates Japanese tea culture and mindfulness. Join our community for traditional tea ceremonies, matcha tastings, and cultural exchange events.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sydney",
                "addressRegion": "NSW",
                "addressCountry": "AU",
                "postalCode": "2052"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@unswmatchasoc.com"
              },
              "sameAs": [
                "https://www.facebook.com/UNSWMatchaSoc",
                "https://www.instagram.com/unswmatchasoc",
                "https://www.linkedin.com/company/unsw-matcha-society"
              ],
              "foundingDate": "2024",
              "alumniOf": {
                "@type": "Organization",
                "name": "University of New South Wales",
                "url": "https://www.unsw.edu.au"
              }
            })
          }}
        />

        {/* Google Analytics (inline as before) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
