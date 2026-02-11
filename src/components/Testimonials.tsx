'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Hooked Digital Team',
    role: 'Casablanca',
    image: null,
    initials: 'HD',
    content: 'Khadija developed the JetStream application with professionalism and creativity. Her attention to detail and ability to understand project requirements were remarkable.',
    rating: 5,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    name: 'YMH Innovation Team',
    role: 'Casablanca',
    image: null,
    initials: 'YI',
    content: 'An exceptional intern who masters both Odoo and modern technologies like Next.js. Her adaptability and willingness to learn are impressive.',
    rating: 5,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    name: 'Institute Trainers',
    role: 'Training Institute',
    image: null,
    initials: 'OF',
    content: 'Khadija stood out through her dedication and commitment throughout her training. Her final projects demonstrate her technical expertise.',
    rating: 5,
    color: 'from-green-500 to-emerald-500'
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 px-4 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What my colleagues and trainers say about my work
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-8 left-8 text-6xl text-purple-500/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonials[currentIndex].color} flex items-center justify-center`}>
                    <span className="text-xl font-bold text-white">
                      {testimonials[currentIndex].initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-8 right-8 flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { value: '2', label: 'Professional Internships' },
            { value: '2025', label: 'Graduation Year' },
            { value: '2', label: 'Cisco Certifications' },
            { value: '100%', label: 'Commitment' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              className="text-center glass-card rounded-2xl p-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
