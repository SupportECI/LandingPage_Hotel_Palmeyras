'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Star, Users, Clock, Wifi, Coffee, ParkingCircle, Waves, X } from 'lucide-react'

const rooms = [
  { id: 1, category: 'PREMIUM', name: 'Suite Ejecutiva', rating: 4.8, reviews: 124, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking', 'Piscina'], price: 135, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 2, category: 'DELUXE', name: 'Habitación Deluxe', rating: 4.6, reviews: 89, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking'], price: 105, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 3, category: 'LUXURY', name: 'Suite Presidencial', rating: 4.9, reviews: 56, guests: '4 pers.', duration: '3-24h', amenities: ['WiFi', 'Piscina', 'Parking'], price: 240, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 4, category: 'CLASSIC', name: 'Habitación Clásica', rating: 4.5, reviews: 102, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Café'], price: 85, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 5, category: 'FAMILY', name: 'Suite Familiar', rating: 4.7, reviews: 78, guests: '5 pers.', duration: '3-24h', amenities: ['WiFi', 'Parking', 'Piscina'], price: 180, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 6, category: 'VIP', name: 'Habitación VIP', rating: 4.8, reviews: 95, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking'], price: 150, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 7, category: 'ROMANCE', name: 'Suite Romántica', rating: 4.9, reviews: 67, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Piscina'], price: 200, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
  { id: 8, category: 'COMFORT', name: 'Habitación Confort', rating: 4.6, reviews: 81, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Parking'], price: 95, pricePerHour: '/3h', images: ['./src/assets/room.jpg', 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop', 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'], descripcion: 'Confort tradicional a un excelente precio.' },
]

const amenityIcons = {
  WiFi: Wifi,
  Café: Coffee,
  Parking: ParkingCircle,
  Piscina: Waves,
}

const RoomCard = ({ room, openModal }) => {

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  return (

    <motion.div
      variants={itemVariants}
      className="
      group
      bg-white
      rounded-2xl
      overflow-hidden
      border border-gray-100
      hover:border-red-200
      transition-all duration-500
      hover:shadow-xl
      hover:shadow-gray-200/40
      "
    >

      {/* images */}

      <div className="relative h-48 overflow-hidden bg-gray-100 cursor pointer"
        onClick={() => openModal(room)}
      >

        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />

        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-red-600 px-3 py-1 rounded-full shadow-sm tracking-wide">
          {room.category}
        </div>

        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <span className='bg-black/60 text-white text-sm font-medium px-4 py-2 rounded-lg backdrop-blur-sm flex items-center gap-2 cursor-pointer'>
            Ver Detalles
          </span>
        </div>

      </div>


      {/* CONTENT */}

      <div className="p-5">

        <div className="flex justify-between items-start mb-2">

          <h3 className="text-base font-bold text-gray-900 leading-tight pr-2 cursor-pointer"
            onClick={() => openModal(room)}>
            {room.name}
          </h3>

          <div className="flex items-center gap-1">

            <Star size={14} className="text-yellow-400 fill-yellow-400" />

            <span className="text-sm font-semibold text-gray-900">
              {room.rating}
            </span>

          </div>

        </div>


        <p className="text-xs text-gray-400 mb-4">
          {room.reviews} reseñas
        </p>


        {/* INFO */}

        <div className="flex gap-4 mb-4 text-gray-500 text-xs">

          <div className="flex items-center gap-1.5">
            <Users size={14} />
            <span>{room.guests}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span>{room.duration}</span>
          </div>

        </div>


        {/* AMENITIES */}

        <div className="flex flex-wrap gap-2 mb-5">

          {room.amenities.slice(0, 3).map((amenity) => {

            const IconComponent = amenityIcons[amenity] || Wifi

            return (

              <div
                key={amenity}
                className="
                flex items-center gap-1
                text-xs
                text-gray-500
                bg-gray-50
                px-2.5 py-1
                rounded-md
                "
              >

                <IconComponent size={12} />

                <span>{amenity}</span>

              </div>

            )

          })}

        </div>


        {/* PRICE */}

        <div className="flex items-end justify-between">

          <div>

            <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide block">
              Desde
            </span>

            <div className="text-2xl font-bold text-gray-900 leading-none">

              ${room.price}

              <span className="text-gray-400 text-xs font-normal ml-1">
                {room.pricePerHour}
              </span>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  )

}

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const closeModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  }

  return (

    <section className="py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto">


        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">

            Nuestras Habitaciones

          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">

            Espacios diseñados para ofrecerte descanso, lujo y comodidad en cada estancia.

          </p>

        </motion.div>


        {/* GRID */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
        >

          {rooms.map((room) => (
            <RoomCard key={room.id} room={room}
              openModal={setSelectedRoom}
            />
          ))}

        </motion.div>

      </div>

      {/* 4. EL MODAL (Dialog de Headless UI) SEGURO */}
      <AnimatePresence>
        {selectedRoom && (
          <Dialog open={true} onClose={closeModal} className="relative z-50">
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Contenedor del panel centrado */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row"
              >

                {/* Lado Izquierdo: Galería de Imágenes */}
                <div className="w-full md:w-1/2 bg-gray-100 flex flex-col relative">
                  {/* Botón Cerrar (Mobile flotante) */}
                  <button onClick={closeModal} className="md:hidden absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors">
                    <X size={20} />
                  </button>

                  {/* Imagen Principal Grande (Con validación de seguridad) */}
                  <div className="aspect-[4/3] md:aspect-auto md:h-[400px] w-full relative">
                    <img
                      // Aquí está la magia: Si no existe "images", usa "image" normal. Si no, usa un placeholder.
                      src={(selectedRoom.images && selectedRoom.images[currentImageIndex]) || selectedRoom.image || ''}
                      alt={selectedRoom.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wide">
                      {selectedRoom.category}
                    </div>
                  </div>

                  {/* Miniaturas de la galería (Solo si hay más de 1 imagen) */}
                  {selectedRoom.images && selectedRoom.images.length > 1 && (
                    <div className="flex gap-2 p-4 bg-white overflow-x-auto">
                      {selectedRoom.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative h-16 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-red-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                          <img src={img} className="w-full h-full object-cover" alt={`Vista ${idx + 1}`} />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Lado Derecho: Información */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col relative">
                  {/* Botón Cerrar (Desktop) */}
                  <button onClick={closeModal} className="hidden md:block absolute top-6 right-6 text-gray-400 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors">
                    <X size={24} />
                  </button>

                  <div className="mb-6 pr-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedRoom.name}</h2>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold text-gray-900">{selectedRoom.rating}</span>
                        <span className="text-gray-500">({selectedRoom.reviews || 0} reseñas)</span>
                      </div>
                    </div>
                  </div>

                  {/* Descripción con texto por defecto si no existe */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {selectedRoom.description || 'Disfruta de una estancia inolvidable en esta hermosa habitación, equipada con todo lo necesario para tu máximo confort.'}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Users size={18} className="text-gray-400" /> Capacidad: {selectedRoom.guests}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Clock size={18} className="text-gray-400" /> Duración: {selectedRoom.duration}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Comodidades incluidas</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {/* Validación por si amenities no existe */}
                      {(selectedRoom.amenities || []).map(amenity => {
                        const IconComponent = amenityIcons[amenity] || Wifi;
                        return (
                          <div key={amenity} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="bg-red-50 p-1.5 rounded-md text-red-600">
                              <IconComponent size={14} />
                            </div>
                            {amenity}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Precio y Botón de Acción */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 font-medium">Precio total</span>
                      <div className="text-3xl font-bold text-gray-900">
                        ${selectedRoom.price}
                        <span className="text-base font-normal text-gray-500 ml-1">{selectedRoom.pricePerHour}</span>
                      </div>
                    </div>

                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-red-600/30 transition-all hover:-translate-y-0.5">
                      Reservar Ahora
                    </button>
                  </div>
                </div>

              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

    </section>

  )

}