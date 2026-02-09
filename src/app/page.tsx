'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="blob absolute top-20 -left-40 w-96 h-96 bg-purple-600/30" />
        <div className="blob absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/20" style={{ animationDelay: '2s' }} />
        <div className="blob absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600/20" style={{ animationDelay: '4s' }} />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
