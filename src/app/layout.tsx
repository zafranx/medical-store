import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'राहुल मेडिकल स्टोर - Rahul Medical Store',
  description: 'अंग्रेजी एवं आयुर्वेदिक दवाइयाँ - English and Ayurvedic Medicines in Rewa',
  keywords: 'medical store, pharmacy, ayurvedic medicines, rewa, rahul medical store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 to-green-50`}>
        {children}
      </body>
    </html>
  )
}