import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Khadija Lahlou | Full Stack Developer',
  description: 'Portfolio de Khadija Lahlou - Développeuse Full Stack passionnée par la création d\'applications web modernes et innovantes.',
  keywords: ['developer', 'web developer', 'full stack', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'Khadija Lahlou' }],
  openGraph: {
    title: 'Khadija Lahlou | Full Stack Developer',
    description: 'Développeuse Full Stack passionnée par la création d\'applications web modernes',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
