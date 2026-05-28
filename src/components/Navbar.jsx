'use client'

import logoPalmeyras from '../assets/palmeyras - Don bosco.png'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  Disclosure,
} from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  SparklesIcon,
  FireIcon,
  HomeIcon,
  MapPinIcon,
  PhotoIcon,
  BuildingOfficeIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

import '../navbar-animations.css'


/* ICONOS PARA SUBMENUS */

const habitacionesIcon = {
  'Estándar': HomeIcon,
  'Superior': BuildingOfficeIcon,
  'Suite': SparklesIcon,
  'Suite Ejecutiva': SparklesIcon,
  'Deluxe': SparklesIcon,
}

const serviciosIcon = {
  'Spa & Wellness': SparklesIcon,
  'Restaurante Gourmet': FireIcon,
  'Piscina Infinity': SparklesIcon,
  'Gimnasio': BuildingOfficeIcon,
  'Bar & Lounge': FireIcon,
}

const experienciasIcon = {
  'Tours Locales': MapPinIcon,
  'Eventos': BuildingOfficeIcon,
  'Bodas': HeartIcon,
}


/* NAVEGACIÓN COMPLETA */

const navigation = [
  { name: 'Inicio', href: '#' },

  {
    name: 'Habitaciones',
    children: [
      { name: 'Estándar', href: '#estandar' },
      { name: 'Superior', href: '#superior' },
      { name: 'Suite', href: '#suite' },
      { name: 'Suite Ejecutiva', href: '#suite-ejecutiva' },
      { name: 'Deluxe', href: '#deluxe' },
    ],
  },

  {
    name: 'Servicios',
    children: [
      { name: 'Spa & Wellness', href: '#spa' },
      { name: 'Restaurante Gourmet', href: '#restaurante' },
      { name: 'Piscina Infinity', href: '#piscina' },
      { name: 'Gimnasio', href: '#gym' },
      { name: 'Bar & Lounge', href: '#bar' },
    ],
  },

  {
    name: 'Experiencias',
    children: [
      { name: 'Tours Locales', href: '#tours' },
      { name: 'Eventos', href: '#eventos' },
      { name: 'Bodas', href: '#bodas' },
    ],
  },

  { name: 'Galería', href: '#galeria', icon: PhotoIcon },
  { name: 'Ubicación', href: '#ubicacion', icon: MapPinIcon },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">

      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >

        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">Palmeyras Inn</span>
            <img
              src={logoPalmeyras}
              alt="Palmeyras Inn logo"
              className="h-12 md:h-18 w-auto object-contain scale-[2] md:scale-[2.5] origin-left ml-4 drop-shadow-[0_0_2px_rgba(0,0,0,0.8)]"
            />
          </a>
        </div>


        {/* BOTON MOBILE */}

        <div className="flex lg:hidden">

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 transition"
          >

            <Bars3Icon className="h-6 w-6" />

          </button>

        </div>



        {/* LINKS DESKTOP */}

        <div className="hidden lg:flex lg:gap-x-8">

          {navigation.map((item) =>

            item.children ? (

              <Popover key={item.name} className="relative">

                <Popover.Button className="group flex items-center gap-x-1 text-sm font-medium text-gray-900 hover:text-red-600 transition">

                  {item.name}

                  <ChevronDownIcon
                    className="h-4 w-4 text-gray-400 group-hover:text-red-600 transition-transform duration-300 group-hover:rotate-180"
                  />

                </Popover.Button>


                <Popover.Panel
                  className="
                  absolute left-0 mt-4 w-64
                  rounded-2xl bg-white
                  border border-gray-100
                  shadow-xl
                  transition-all duration-300
                  data-[closed]:opacity-0
                  data-[closed]:translate-y-2
                  data-[open]:opacity-100
                  data-[open]:translate-y-0
                  "
                >

                  <div className="p-4">

                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-3">
                      {item.name}
                    </p>


                    {item.children.map((sub) => {

                      let Icon

                      if (item.name === 'Habitaciones') Icon = habitacionesIcon[sub.name]
                      if (item.name === 'Servicios') Icon = serviciosIcon[sub.name]
                      if (item.name === 'Experiencias') Icon = experienciasIcon[sub.name]

                      return (

                        <a
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                        >

                          {Icon && <Icon className="h-5 w-5 text-gray-400" />}

                          {sub.name}

                        </a>

                      )

                    })}

                  </div>

                </Popover.Panel>

              </Popover>

            ) : (

              <a
                key={item.name}
                href={item.href}
                className="relative group text-sm font-medium text-gray-900 hover:text-red-600 transition"
              >

                {item.icon && <item.icon className="inline h-4 w-4 mr-1" />}

                {item.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              </a>

            )

          )}

        </div>



        {/* BOTON RESERVAR */}

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          <a
            href="#reserva"
            className="
            inline-flex items-center gap-2
            rounded-xl
            bg-red-600
            px-5 py-2.5
            text-sm font-semibold
            text-white
            hover:bg-red-700
            transition
            shadow-sm
            "
          >

            Reservar

          </a>

        </div>

      </nav>



      {/* MENU MOBILE */}

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >

        <div className="fixed inset-0 bg-black/30 z-40" />

        <DialogPanel
          className="
          fixed inset-y-0 right-0 z-50
          w-full max-w-sm
          bg-white
          p-6
          shadow-2xl
          overflow-y-auto
          transition-transform
          duration-300
          "
        >

          {/* HEADER MOBILE */}

          <div className="flex items-center justify-between">

            <img
              src="./src/assets/Palmeyras_1.svg"
              className="h-8"
            />

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >

              <XMarkIcon className="h-6 w-6" />

            </button>

          </div>



          {/* LINKS MOBILE */}

          <div className="mt-6 space-y-2">

            {navigation.map((item) =>

              item.children ? (

                <Disclosure key={item.name}>

                  <Disclosure.Button
                    className="
                    flex w-full items-center justify-between
                    rounded-lg
                    px-4 py-3
                    text-base font-medium
                    text-gray-900
                    hover:bg-red-50
                    hover:text-red-600
                    transition
                    "
                  >

                    {item.name}

                    <ChevronDownIcon className="h-5 w-5 transition ui-open:rotate-180" />

                  </Disclosure.Button>


                  <Disclosure.Panel className="space-y-1 px-6 pb-2">

                    {item.children.map((sub) => (

                      <a
                        key={sub.name}
                        href={sub.href}
                        className="
                        block rounded-lg
                        px-4 py-2
                        text-sm text-gray-700
                        hover:bg-red-50
                        hover:text-red-600
                        transition
                        "
                      >

                        {sub.name}

                      </a>

                    ))}

                  </Disclosure.Panel>

                </Disclosure>

              ) : (

                <a
                  key={item.name}
                  href={item.href}
                  className="
                  block rounded-lg
                  px-4 py-3
                  text-base font-medium
                  text-gray-900
                  hover:bg-red-50
                  hover:text-red-600
                  transition
                  "
                >

                  {item.name}

                </a>

              )

            )}


            <a
              href="#reserva"
              className="
              block text-center
              mt-4
              rounded-xl
              bg-red-600
              px-4 py-3
              font-semibold
              text-white
              hover:bg-red-700
              transition
              "
            >

              Reservar

            </a>

          </div>

        </DialogPanel>

      </Dialog>

    </header>

  )

}