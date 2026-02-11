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
  description: 'Portfolio of Khadija Lahlou - Full Stack Developer passionate about building modern and innovative web applications.',
  keywords: ['developer', 'web developer', 'full stack', 'react', 'next.js', 'portfolio'],
  authors: [{ name: 'Khadija Lahlou' }],
  openGraph: {
    title: 'Khadija Lahlou | Full Stack Developer',
    description: 'Full Stack Developer passionate about building modern web applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
