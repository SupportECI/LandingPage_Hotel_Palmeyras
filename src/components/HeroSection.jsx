'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    /* CAMBIO: Quitamos min-h-screen y flex-center. 
       Usamos py-20 para dar espacio arriba y abajo.
    */
    <section className="relative w-full bg-white pt-37 pb-12 overflow-hidden">
    
      {/* --- CONTENIDO --- */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Subtítulo */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className=" text-sm font-semibold text-red-600 mb-2 tracking-wide" 
        >
          Experiencia de Lujo Incomparable
        </motion.span>

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight"
        >
          Tu Destino de
          <br />
          <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            Lujo Awaits
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-600 mb-6 max-w-2xl font-light leading-relaxed"
        >
          Descubre las mejores habitaciones de lujo, servicios excepcionales y experiencias inolvidables que harán de tu estadía algo verdaderamente especial.
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
        >
          <a
            href="#reservar"
            className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            Reservar Ahora
            <ArrowRight size={18} />
          </a>

          <button
            className="px-8 py-3 border-2 border-gray-400 text-gray-700 hover:border-gray-600 hover:text-gray-900 rounded-lg font-semibold transition-all duration-300"
          >
            Explorar Rooms
          </button>
        </motion.div>

        {/* Texto pequeño */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm text-gray-500 flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sin tarjeta de crédito requerida
        </motion.p>
      </div>
    </section>
  )
}

export default HeroSection