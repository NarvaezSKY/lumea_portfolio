import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bodoni_Moda, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const bodoni = Bodoni_Moda({ subsets: ['latin'], variable: '--font-bodoni' })

export const metadata: Metadata = {
  title: 'Lumea — Manicure de autor',
  description: 'Semipermanente, Rubber, Soft Gel y Acrílico en Bogotá. Reserva tu cita con Lumea por WhatsApp.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#071a40',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${geist.variable} ${geistMono.variable} ${bodoni.variable}`}><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
