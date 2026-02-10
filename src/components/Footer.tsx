'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'

const navLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Parcours', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/KHADIJALAH', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/khadija-lahlou-48a8062b9', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:khadijadev728@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative pt-20 pb-8 px-4">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="text-3xl font-bold gradient-text mb-4 inline-block">
              Khadija Lahlou
            </a>
            <p className="text-gray-400 mb-6">
              Développeuse Web Full Stack passionnée par la création
              d&apos;applications web modernes et innovantes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  {...(social.label !== 'Email' && { target: '_blank', rel: 'noopener noreferrer' })}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:khadijadev728@gmail.com" className="hover:text-purple-400 transition-colors">
                  khadijadev728@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+212603175493" className="hover:text-purple-400 transition-colors">
                  +212 603 175 493
                </a>
              </li>
              <li>Bouskoura, Casablanca, Maroc</li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2 text-green-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Disponible pour opportunités
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-2">
            &copy; {new Date().getFullYear()} Khadija Lahlou. Fait avec
            <FiHeart className="text-red-500" />
            au Maroc
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
