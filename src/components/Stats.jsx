'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Trophy, Sparkles } from 'lucide-react'

const stats = [
  {
    id: 1,
    name: 'Nuestras Habitaciones',
    value: '+50',
    description: 'Suites y habitaciones a tu alcance',
    icon: Building2,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Huéspedes Satisfechos',
    value: '15K+',
    description: 'Valoración promedio 4.8 ⭐',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Años de Excelencia',
    value: '25',
    description: 'Brindando experiencias inolvidables',
    icon: Trophy,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 4,
    name: 'Servicios Disponibles',
    value: '18+',
    description: 'Amenidades y facilidades premium',
    icon: Sparkles,
    color: 'from-green-500 to-emerald-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Stats() {
  return (
    /* CAMBIO: pt-16 (espacio arriba) y pb-4 (poco espacio abajo) 
       sm:pt-24 sm:pb-8 para pantallas grandes
    */
    <div className="pt-16 pb-4 sm:pt-24 sm:pb-8 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Por qué elegir nuestro hotel
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Números que hablan de nuestro compromiso con la excelencia
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.dl
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                className="relative overflow-hidden rounded-xl bg-white p-8 border border-gray-100 hover:border-gray-200 transition-all hover:shadow-md"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex rounded-lg bg-gradient-to-br ${stat.color} p-3 mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <dt className="text-sm font-semibold text-gray-600 mb-2">
                    {stat.name}
                  </dt>
                  <dd className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </dd>

                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.dl>
      </div>
    </div>
  )
}