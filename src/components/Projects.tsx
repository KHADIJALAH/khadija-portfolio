'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'JetStream - Gestion de Voyages',
    description: 'Application web complète de gestion de voyages développée pendant mon stage chez Hooked Digital. Interface moderne avec gestion des réservations, clients et itinéraires.',
    image: '/images/project1.jpg',
    tags: ['Laravel', 'Tailwind CSS', 'MySQL', 'PHP', 'REST API'],
    category: 'fullstack',
    github: 'https://github.com/khadijalahlou/jetstream',
    live: '#',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Modules Odoo Personnalisés',
    description: 'Développement de modules personnalisés pour Odoo ERP chez YMH Innovation. Fonctionnalités avancées en Python et JavaScript pour optimiser les processus métier.',
    image: '/images/project2.jpg',
    tags: ['Python', 'JavaScript', 'Odoo', 'PostgreSQL', 'XML'],
    category: 'backend',
    github: 'https://github.com/khadijalahlou',
    live: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'Interface Next.js Moderne',
    description: 'Interfaces utilisateur modernes et réactives développées avec Next.js pour améliorer l\'expérience utilisateur des applications Odoo.',
    image: '/images/project3.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com/khadijalahlou',
    live: '#',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Portfolio Personnel',
    description: 'Mon portfolio personnel avec un design moderne, des animations fluides et une expérience utilisateur optimisée.',
    image: '/images/project4.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com/khadijalahlou/portfolio',
    live: '#',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 5,
    title: 'Application CRUD Laravel',
    description: 'Application de gestion complète avec authentification, CRUD, validation et interface admin responsive.',
    image: '/images/project5.jpg',
    tags: ['Laravel', 'Bootstrap', 'MySQL', 'PHP', 'Blade'],
    category: 'fullstack',
    github: 'https://github.com/khadijalahlou',
    live: '#',
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 6,
    title: 'API REST Node.js',
    description: 'API RESTful avec Node.js et Express, authentification JWT, documentation Swagger et tests unitaires.',
    image: '/images/project6.jpg',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    category: 'backend',
    github: 'https://github.com/khadijalahlou',
    live: '#',
    color: 'from-sky-500 to-blue-500'
  },
]

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mes <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle">
            Découvrez mes réalisations récentes et les technologies utilisées
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FiFolder className="text-white/30 text-8xl" />
                    </div>
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      >
                        <FiGithub size={20} />
                      </motion.a>
                      {project.live !== '#' && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/khadijalahlou"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FiGithub />
            Voir plus sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
