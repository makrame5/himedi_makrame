import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import '../styles/animations.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Makrame Himedi - Portfolio',
  description: 'Portfolio de Makrame Himedi - Étudiant en ingénierie digitale pour les métiers de la santé. Spécialisé en télémédecine, IA médicale et computer vision.',
  keywords: ['portfolio', 'ingénierie digitale', 'santé', 'télémédecine', 'IA médicale', 'computer vision', 'IoT médical'],
  authors: [{ name: 'Makrame Himedi' }],
  creator: 'Makrame Himedi',
  publisher: 'Makrame Himedi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: '#3b82f6',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-inter bg-[#F9FAFB]`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
