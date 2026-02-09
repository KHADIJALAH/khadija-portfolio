'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm text-purple-300">
            Bienvenue sur mon portfolio
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-white">Je suis </span>
          <span className="gradient-text">Khadija Lahlou</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            <span className="gradient-text-2 font-semibold">Développeuse Web Full Stack</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Diplômée de l&apos;OFPPT, passionnée par le développement web,
            la gestion de bases de données et la conception d&apos;interfaces.
            Je transforme vos idées en applications web modernes et performantes.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2"
          >
            Voir mes projets
            <FiArrowDown className="animate-bounce" />
          </motion.a>
          <motion.a
            href="/cv-khadija-lahlou.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2"
          >
            <FiDownload />
            Télécharger CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/khadijalahlou', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/khadija-lahlou', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:khadijadev728@gmail.com', label: 'Email' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all"
              aria-label={social.label}
            >
              <social.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-10 w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-lg bg-gradient-to-r from-pink-500/20 to-orange-500/20 blur-sm"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
