'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'ShopVibe - E-Commerce Store',
    description: 'Modern and complete online store with cart, wishlist, category filters, Stripe checkout page, and smooth animations. Responsive design with polished UX.',
    image: '/images/project1.jpg',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Stripe', 'Framer Motion'],
    category: 'fullstack',
    github: 'https://github.com/KHADIJALAH/ecommerce-store',
    live: '#',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    description: 'SaaS analytics dashboard with NextAuth authentication, interactive Recharts graphs, user management, advanced data tables and dark/light theme.',
    image: '/images/project2.jpg',
    tags: ['Next.js 14', 'TypeScript', 'NextAuth', 'Recharts', 'Zustand', 'TanStack Table'],
    category: 'fullstack',
    github: 'https://github.com/KHADIJALAH/saas-dashboard',
    live: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'InvoiceFlow - Invoice Management',
    description: 'Complete invoicing application with custom PHP MVC framework. Invoice, client, product and report management with a modern Tailwind CSS dashboard.',
    image: '/images/project3.jpg',
    tags: ['PHP', 'MVC', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    category: 'fullstack',
    github: 'https://github.com/KHADIJALAH/php-mvc-framework',
    live: '#',
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 4,
    title: 'JetStream - Travel Management',
    description: 'Travel management platform with trip planning, booking system, budget tracker, interactive maps and destination discovery. Modern responsive design.',
    image: '/images/project4.jpg',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    category: 'fullstack',
    github: 'https://github.com/KHADIJALAH/jetstream-app',
    live: '#',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    id: 5,
    title: 'LaLibrary - Book Management',
    description: 'Library management system with book catalog, borrowing system, user authentication, shopping cart and admin dashboard for managing inventory.',
    image: '/images/project5.jpg',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    category: 'fullstack',
    github: 'https://github.com/KHADIJALAH/Lalibrary',
    live: '#',
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 6,
    title: 'Personal Portfolio',
    description: 'My personal portfolio with a modern dark theme design, smooth Framer Motion animations, contact form and interactive navigation.',
    image: '/images/project6.jpg',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'frontend',
    github: 'https://github.com/KHADIJALAH/khadija-portfolio',
    live: 'https://khadija-portfolio-nine.vercel.app',
    color: 'from-violet-500 to-purple-500'
  },
]

const categories = [
  { id: 'all', label: 'All' },
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Discover my recent work and the technologies used
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
            href="https://github.com/KHADIJALAH"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FiGithub />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
