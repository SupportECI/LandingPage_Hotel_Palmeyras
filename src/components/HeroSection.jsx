'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1920",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1920"
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    /* CAMBIO: bg-black para que no haya destellos blancos entre transiciones */
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden">
      
      {/* --- SLIDER DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img 
              src={slides[index]} 
              alt="Fondo Hotel" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- CONTENIDO (Z-20 para estar al frente) --- */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Subtítulo */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm font-semibold text-red-600 mb-2 tracking-wide uppercase" 
        >
          Experiencia de Lujo Incomparable
        </motion.span>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-xl"
        >
          Tu Destino de
          <br />
          <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Lujo Awaits
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-200 mb-8 max-w-2xl font-light leading-relaxed drop-shadow-md"
        >
          Descubre las mejores habitaciones de lujo, servicios excepcionales y experiencias inolvidables que harán de tu estadía algo verdaderamente especial.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <a
            href="#reservar"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-red-600/20 flex items-center gap-2"
          >
            Reservar Ahora
            <ArrowRight size={18} />
          </a>

          <button
            className="px-8 py-3 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm rounded-lg font-semibold transition-all duration-300"
          >
            Explorar Rooms
          </button>
        </motion.div>

        {/* Texto pequeño */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm text-gray-400 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sin tarjeta de crédito requerida
        </motion.p>
      </div>

      {/* Indicadores de slide (Opcional) */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-500 ${index === i ? 'w-8 bg-red-600' : 'w-3 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection