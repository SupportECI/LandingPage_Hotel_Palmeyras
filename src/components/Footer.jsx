'use client'

import logo from '../assets/palmeyras - Don bosco.png'

import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 text-gray-600">

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >

          {/* HOTEL INFO */}

          <motion.div variants={itemVariants}>

            <div className="mb-6">

              <img src={logo} width={90} alt="Logo_Palmeyras" 
              className="h-12 md:h-18 w-auto object-contain scale-[2] md:scale-[2.5] origin-left ml-4 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
              />

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Vive la experiencia hotelera más exclusiva con lujo,
                comodidad y servicios diseñados para una estancia inolvidable.
              </p>

            </div>


            {/* CONTACT */}

            <div className="space-y-4">

              <div className="flex items-center gap-3">

                <MapPin className="w-5 h-5 text-red-500" />

                <p className="text-sm">
                  17A. Pte. Sur 749, Xamaipak, Tuxtla Gutiérrez, Chis
                </p>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="w-5 h-5 text-red-500" />

                <a
                  href="tel:+529617015000"
                  className="text-sm hover:text-gray-900 transition"
                >
                  +52 (961) 701 5000
                </a>

              </div>

              <div className="flex items-center gap-3">

                <Mail className="w-5 h-5 text-red-500" />

                <a
                  href="mailto:Palmeyrasinn@gmail.com"
                  className="text-sm hover:text-gray-900 transition"
                >
                  Palmeyrasinn@gmail.com
                </a>

              </div>

            </div>


            {/* SOCIAL */}

            <div className="flex gap-3 mt-6">

              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (

                <a
                  key={i}
                  href="https://www.facebook.com/share/14cDzw7zaAf/?mibextid=wwXIfr"
                  target='_blank'
                  className="
                  inline-flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  bg-white
                  border border-gray-200
                  text-gray-600
                  hover:bg-red-600
                  hover:text-white
                  hover:border-red-600
                  transition
                  "
                >

                  <Icon className="w-5 h-5" />

                </a>

              ))}

            </div>

          </motion.div>



          {/* INFORMATION */}

          <motion.div variants={itemVariants}>

            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6">
              Información
            </h4>

            <ul className="space-y-4">

              {[
                'Sobre Nosotros',
                'Habitaciones',
                'Servicios',
                'Promociones',
                'Galería',
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="
                    text-sm
                    text-gray-600
                    hover:text-red-600
                    transition
                    "
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>



          {/* CUSTOMER SERVICE */}

          <motion.div variants={itemVariants}>

            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6">
              Servicio al Cliente
            </h4>

            <ul className="space-y-4">

              {[
                'Contáctanos',
                'Reservas',
                'Términos & Condiciones',
                'Política de Privacidad',
                'Política de Cancelación',
              ].map((item) => (

                <li key={item}>

                  <a
                    href="#"
                    className="
                    text-sm
                    text-gray-600
                    hover:text-red-600
                    transition
                    "
                  >
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </motion.div>



          {/* EVENTS */}

          <motion.div variants={itemVariants}>

            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-6">
              Eventos Próximos
            </h4>

            <div className="space-y-5">

              {[
                {
                  title: 'Boda de Primavera',
                  date: 'Marzo 15, 2026',
                },
                {
                  title: 'Conferencia Internacional',
                  date: 'Marzo 20, 2026',
                },
                {
                  title: 'Gala de Lujo',
                  date: 'Abril 10, 2026',
                },
              ].map((event, i) => (

                <div key={i}>

                  <p className="text-sm font-semibold text-gray-900">
                    {event.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {event.date}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

        </motion.div>



        {/* COPYRIGHT */}

        <div className="mt-16 pt-8 border-t border-gray-200">

          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-gray-500"
          >

            © 2026 Palmeyras Inn. Todos los derechos reservados.

          </motion.p>

        </div>

      </div>

    </footer>
  )
}