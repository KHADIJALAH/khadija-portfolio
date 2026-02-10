'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'khadijadev728@gmail.com',
    href: 'mailto:khadijadev728@gmail.com',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: FiPhone,
    label: 'Téléphone',
    value: '+212 603 175 493',
    href: 'tel:+212603175493',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FiMapPin,
    label: 'Localisation',
    value: 'Bouskoura, Casablanca, Maroc',
    href: '#',
    color: 'from-green-500 to-emerald-500'
  },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/KHADIJALAH', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/khadija-lahlou-48a8062b9', label: 'LinkedIn' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Web3Forms - Free email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '2afe617e-a11c-47ec-b444-f77cf85e57b6',
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          to_email: 'khadijadev728@gmail.com',
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormState({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback: Open email client with pre-filled data
        const mailtoLink = `mailto:khadijadev728@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nom: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`
        window.open(mailtoLink, '_blank')
        setSubmitStatus('success')
        setFormState({ name: '', email: '', subject: '', message: '' })
      }
    } catch {
      // Fallback: Open email client with pre-filled data
      const mailtoLink = `mailto:khadijadev728@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Nom: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`
      window.open(mailtoLink, '_blank')
      setSubmitStatus('success')
      setFormState({ name: '', email: '', subject: '', message: '' })
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="section-subtitle">
            Vous avez un projet en tête ou une opportunité ? N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
            <p className="text-gray-400 mb-8">
              Je suis actuellement à la recherche d&apos;un poste en développement web
              où je pourrai mettre mes compétences au service de projets innovants.
              Je suis ouverte aux opportunités de CDI, CDD ou freelance.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 card-hover group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center`}>
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-white group-hover:text-purple-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-300 text-sm">Disponible pour de nouvelles opportunités</span>
            </motion.div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4">Retrouvez-moi sur</p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Sujet *</label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Opportunité d'emploi / Projet / Collaboration"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Décrivez votre projet ou votre proposition..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span className="text-green-400">✓</span>
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <FiSend />
                    Envoyer le message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center mt-4">
                En cliquant sur envoyer, votre application email s&apos;ouvrira avec le message pré-rempli.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
