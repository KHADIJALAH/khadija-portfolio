'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiBootstrap, SiFigma,
  SiNodedotjs, SiLaravel, SiPhp, SiPython,
  SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGitlab, SiGithub, SiJira, SiDocker, SiSonarqube
} from 'react-icons/si'
import { SiOdoo } from 'react-icons/si'

const skillCategories = [
  {
    title: 'Développement Full-Stack',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PHP', icon: SiPhp, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'Python', icon: SiPython, level: 85 },
      { name: 'Node.js', icon: SiNodedotjs, level: 80 },
      { name: 'Laravel', icon: SiLaravel, level: 88 },
    ]
  },
  {
    title: 'Front-end & UI/UX',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', icon: SiReact, level: 88 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss3, level: 92 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
      { name: 'Bootstrap', icon: SiBootstrap, level: 88 },
      { name: 'Figma', icon: SiFigma, level: 80 },
    ]
  },
  {
    title: 'Back-end & Bases de données',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 90 },
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
      { name: 'Odoo', icon: SiOdoo, level: 85 },
    ]
  },
  {
    title: 'Gestion de projet & DevOps',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
      { name: 'GitLab', icon: SiGitlab, level: 85 },
      { name: 'Jira', icon: SiJira, level: 80 },
      { name: 'Docker', icon: SiDocker, level: 70 },
      { name: 'SonarQube', icon: SiSonarqube, level: 75 },
    ]
  },
]

const softSkills = [
  'Travail en équipe',
  'Esprit d\'équipe',
  'Autonomie',
  'Sens des responsabilités',
  'Adaptabilité',
  'Capacité d\'analyse',
  'Flexibilité',
  'Communication',
]

const languages = [
  { name: 'Arabe', level: 'Courant', percent: 100 },
  { name: 'Français', level: 'Technique', percent: 85 },
  { name: 'Anglais', level: 'Technique', percent: 75 },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
          <p className="section-subtitle">
            Technologies et outils que j&apos;utilise pour donner vie à vos projets
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="text-xl text-gray-400" />
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
              Compétences Personnelles
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="px-4 py-2 rounded-full glass text-gray-300 text-sm hover:bg-purple-500/20 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Langues
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-sm text-gray-500">{lang.level}</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${lang.percent}%` } : {}}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-4">Méthodologies</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Scrum', 'Kanban', 'Agile', 'CI/CD'].map((method, index) => (
              <motion.span
                key={method}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-300"
              >
                {method}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
