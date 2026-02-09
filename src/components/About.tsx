'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { FiCode, FiLayers, FiUsers, FiZap } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCode,
    title: 'Full Stack',
    description: 'PHP, JavaScript, Python, Node.js, Laravel, React.js'
  },
  {
    icon: FiLayers,
    title: 'Base de données',
    description: 'MySQL, MongoDB, PostgreSQL, NoSQL'
  },
  {
    icon: FiUsers,
    title: 'Travail d\'équipe',
    description: 'Git, Scrum, Kanban, Jira, Communication'
  },
  {
    icon: FiZap,
    title: 'DevOps',
    description: 'CI/CD, Cloud natif, Docker, Monitoring'
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            À propos de <span className="gradient-text">Moi</span>
          </h2>
          <p className="section-subtitle">
            Découvrez mon parcours et ma passion pour le développement web
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Profile Image Container */}
              <div className="aspect-square rounded-3xl overflow-hidden gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative">
                  <Image
                    src="/images/profile.png"
                    alt="Khadija Lahlou"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2"
              >
                <span className="text-sm font-semibold gradient-text">OFPPT 2025</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2"
              >
                <span className="text-sm font-semibold gradient-text-2">Full Stack Dev</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Développeuse passionnée par la <span className="gradient-text">création web</span>
            </h3>
            <div className="space-y-4 text-gray-300 mb-8">
              <p>
                Je suis Khadija Lahlou, développeuse web full stack diplômée en 2025 de l&apos;OFPPT.
                J&apos;ai acquis une solide expérience à travers ma formation pratique et mes projets,
                en développement web, en gestion de bases de données et en conception d&apos;interfaces.
              </p>
              <p>
                Actuellement en stage pré-emploi chez YMH Innovation à Casablanca, je travaille
                sur des fonctionnalités en Python et JavaScript sous Odoo, et je développe
                des interfaces modernes avec Next.js pour optimiser l&apos;expérience utilisateur.
              </p>
              <p>
                Je suis à la recherche d&apos;un poste dans lequel je pourrai mettre mes compétences
                au service de projets innovants tout en continuant à apprendre et à évoluer.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
              <div className="glass rounded-xl p-3">
                <span className="text-gray-500">Localisation</span>
                <p className="text-white font-medium">Casablanca, Maroc</p>
              </div>
              <div className="glass rounded-xl p-3">
                <span className="text-gray-500">Âge</span>
                <p className="text-white font-medium">20 ans</p>
              </div>
              <div className="glass rounded-xl p-3">
                <span className="text-gray-500">Diplôme</span>
                <p className="text-white font-medium">Technicien Spécialisé</p>
              </div>
              <div className="glass rounded-xl p-3">
                <span className="text-gray-500">Permis</span>
                <p className="text-white font-medium">Type B</p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-3">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
