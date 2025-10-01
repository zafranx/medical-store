import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'राहुल मेडिकल स्टोर रीवा - Rahul Medical Store Rewa | Best Pharmacy in Rewa MP',
  description: 'राहुल मेडिकल स्टोर रीवा - रीवा की सर्वश्रेष्ठ मेडिकल स्टोर। अंग्रेजी व आयुर्वेदिक दवाइयाँ, होम डिलीवरी, 24/7 सेवा। Rahul Medical Store - Best medical store in Rewa. English & Ayurvedic medicines, home delivery, emergency service. Call: +91 8719054515',
  keywords: 'medical store rewa, pharmacy rewa, chemist rewa, rahul medical store, rewa medical shop, medicine shop rewa, ayurvedic store rewa, pharmacy near me rewa, best medical store rewa, रीवा मेडिकल स्टोर, रीवा केमिस्ट, रीवा दवा दुकान, राहुल मेडिकल स्टोर रीवा, medical store in rewa madhya pradesh, rewa mp medical store, 24 hour pharmacy rewa, home delivery medicine rewa',
  authors: [{ name: 'Rahul Medical Store' }],
  creator: 'Rahul Medical Store',
  publisher: 'Rahul Medical Store',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://rahulmedicalstore.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'राहुल मेडिकल स्टोर रीवा - Best Medical Store in Rewa MP',
    description: 'रीवा की सर्वश्रेष्ठ मेडिकल स्टोर। अंग्रेजी व आयुर्वेदिक दवाइयाँ। होम डिलीवरी उपलब्ध। Call: +91 8719054515',
    url: 'https://rahulmedicalstore.com',
    siteName: 'Rahul Medical Store Rewa',
    locale: 'hi_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rahul Medical Store Rewa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'राहुल मेडिकल स्टोर रीवा - Best Medical Store in Rewa',
    description: 'अंग्रेजी व आयुर्वेदिक दवाइयाँ। होम डिलीवरी उपलब्ध। Call: +91 8719054515',
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
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <head>
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Rewa" />
        <meta name="geo.position" content="24.5355;81.2919" />
        <meta name="ICBM" content="24.5355, 81.2919" />
        <link rel="canonical" href="https://rahulmedicalstore.com" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-green-50`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Pharmacy',
              name: 'Rahul Medical Store',
              description: 'Best medical store in Rewa offering English and Ayurvedic medicines with home delivery service',
              image: 'https://rahulmedicalstore.com/logo.jpg',
              telephone: '+918719054515',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Rewa',
                addressLocality: 'Rewa',
                addressRegion: 'MP',
                postalCode: '486001',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '24.5355',
                longitude: '81.2919',
              },
              url: 'https://rahulmedicalstore.com',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '08:00',
                closes: '22:00',
              },
              priceRange: '₹₹',
              currenciesAccepted: 'INR',
              paymentAccepted: 'Cash, UPI, Card',
            }),
          }}
        />
      </body>
    </html>
  )
}