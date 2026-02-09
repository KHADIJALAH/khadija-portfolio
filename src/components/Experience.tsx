'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    id: 1,
    role: 'Stagiaire Développeuse Web',
    company: 'YMH Innovation',
    location: 'Casablanca, Maroc',
    period: 'Août 2025 - En cours',
    description: 'Stage pré-emploi en développement web avec focus sur les technologies modernes et ERP.',
    achievements: [
      'Développement de fonctionnalités en Python et JavaScript sous Odoo',
      'Création d\'interfaces modernes avec Next.js',
      'Optimisation de l\'expérience utilisateur',
      'Travail en équipe sur des projets clients'
    ],
    color: 'from-purple-500 to-pink-500',
    current: true
  },
  {
    id: 2,
    role: 'Stagiaire Développeuse Web',
    company: 'Hooked Digital',
    location: 'Casablanca, Maroc',
    period: 'Mars 2025',
    description: 'Développement d\'une application web complète de gestion de voyages.',
    achievements: [
      'Développement complet de l\'application JetStream',
      'Utilisation de Laravel comme framework backend',
      'Design responsive avec Tailwind CSS',
      'Gestion de base de données et API REST'
    ],
    color: 'from-blue-500 to-cyan-500',
    current: false
  },
]

const education = [
  {
    id: 1,
    degree: 'Diplôme Technicien Spécialisé',
    field: 'Développement Digital',
    school: 'OFPPT',
    period: '2023 - 2025',
    description: 'Formation complète en développement web full stack, bases de données et conception d\'interfaces.'
  },
  {
    id: 2,
    degree: 'Baccalauréat',
    field: 'Sciences Physiques - Option Français',
    school: 'École IBN SINA, SAFI',
    period: '2022 - 2023',
    description: 'Mention Assez Bien'
  },
]

const certifications = [
  {
    name: 'Certification Python',
    issuer: 'Cisco',
    description: 'Programmation orientée objet, manipulation de données et automatisation'
  },
  {
    name: 'Certification JavaScript',
    issuer: 'Cisco',
    description: 'Développement dynamique, manipulation du DOM et applications front-end/back-end'
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mon <span className="gradient-text">Parcours</span>
          </h2>
          <p className="section-subtitle">
            Mon expérience professionnelle et mon parcours académique
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FiBriefcase className="text-purple-500" />
              Expérience Professionnelle
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative pl-8 pb-12 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-gray-900 ${exp.current ? 'animate-pulse' : ''}`} />

                  <div className="glass-card rounded-xl p-6 card-hover">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium mb-3">
                        En cours
                      </span>
                    )}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-400">
                        <p className="flex items-center gap-2">
                          <FiCalendar />
                          {exp.period}
                        </p>
                        <p className="flex items-center gap-2 mt-1">
                          <FiMapPin />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            {/* Education */}
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              Formation
            </h3>
            <div className="space-y-6 mb-10">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 card-hover"
                >
                  <p className="text-sm text-purple-400 mb-2">{edu.period}</p>
                  <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                  <p className="text-sm text-gray-300 mb-1">{edu.field}</p>
                  <p className="text-gray-400 text-sm mb-2">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="glass-card rounded-xl p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white">{cert.name}</h4>
                        <p className="text-sm text-purple-400">{cert.issuer}</p>
                        <p className="text-xs text-gray-500 mt-1">{cert.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
