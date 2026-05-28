'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Star, Users, Clock, Wifi, Coffee, ParkingCircle, Waves, X, Snowflake } from 'lucide-react'

// IMPORTACIÓN DE LA IMAGEN LOCAL PARA QUE VITE LA PROCESE
import room1 from '../assets/room1.webp'
import room2 from '../assets/room2.webp'
import interior1 from '../assets/interior1.webp'



const rooms = [
  { 
    id: 1, category: 'SHORT TIME', name: 'Estancia Corta', rating: 4.8, reviews: 124, guests: '2 pers.', duration: '3-24h', 
    amenities: ['WiFi', 'Café', 'Parking', 'Piscina'], price: 290, pricePerHour: '/4h', 
    images: [room1, interior1],   
    description: 'Nuestra Suite Ejecutiva ofrece un equilibrio perfecto entre trabajo y descanso, con acabados de alta calidad.' 
  },
  { 
    id: 2, category: 'ALL NIGHT', name: 'Estancia Completa', rating: 4.6, reviews: 89, guests: '2 pers.', duration: '3-24h', 
    amenities: ['WiFi', 'Café', 'Parking', 'Clima'], price: 550, pricePerHour: '/Toda la noche', 
    images: [room2, interior1], 
    description: 'Espacio amplio y elegante diseñado para quienes buscan un nivel superior de confort.' 
  },
]

const amenityIcons = {
  WiFi: Wifi,
  Café: Coffee,
  Parking: ParkingCircle,
  Piscina: Waves,
  Clima: Snowflake,
}

const RoomCard = ({ room, openModal }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/40"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => openModal(room)}>
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[11px] font-semibold text-red-600 px-3 py-1 rounded-full shadow-sm tracking-wide">
          {room.category}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base font-bold text-gray-900 leading-tight pr-2 cursor-pointer" onClick={() => openModal(room)}>
            {room.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">{room.rating}</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-4">{room.reviews} reseñas</p>

        <div className="flex gap-4 mb-4 text-gray-500 text-xs">
          <div className="flex items-center gap-1.5"><Users size={14} /><span>{room.guests}</span></div>
          <div className="flex items-center gap-1.5"><Clock size={14} /><span>{room.duration}</span></div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {room.amenities.slice(0, 3).map((amenity) => {
            const IconComponent = amenityIcons[amenity] || Wifi
            return (
              <div key={amenity} className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md">
                <IconComponent size={12} />
                <span>{amenity}</span>
              </div>
            )
          })}
        </div>

        <div className="flex items-end justify-between">
          <div>
            <span className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide block">Desde</span>
            <div className="text-2xl font-bold text-gray-900 leading-none">
              ${room.price}
              <span className="text-gray-400 text-xs font-normal ml-1">{room.pricePerHour}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const closeModal = () => {
    setSelectedRoom(null)
    setCurrentImageIndex(0)
  }

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nuestras Habitaciones</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Espacios diseñados para ofrecerte descanso, lujo y comodidad en cada estancia.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} openModal={setSelectedRoom} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedRoom && (
          <Dialog open={true} onClose={closeModal} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row"
              >
                {/* GALERÍA MODAL */}
                <div className="w-full md:w-1/2 bg-gray-100 flex flex-col relative">
                  <div className="aspect-[4/3] md:aspect-auto md:h-[400px] w-full relative">
                    <img
                      src={selectedRoom.images[currentImageIndex]}
                      alt={selectedRoom.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {selectedRoom.category}
                    </div>
                  </div>
                  <div className="flex gap-2 p-4 bg-white overflow-x-auto">
                    {selectedRoom.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`relative h-16 w-24 shrink-0 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-red-600' : 'border-transparent opacity-60'}`}
                      >
                        <img src={img} className="w-full h-full object-cover" alt="Vista" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* INFO MODAL */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col relative">
                  <button onClick={closeModal} className="absolute top-6 right-6 text-gray-400 hover:text-red-600 transition-colors">
                    <X size={24} />
                  </button>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{selectedRoom.name}</h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{selectedRoom.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-700"><Users size={18} className="text-gray-400"/> Capacidad: {selectedRoom.guests}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-700"><Clock size={18} className="text-gray-400"/> Duración: {selectedRoom.duration}</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase">Comodidades</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedRoom.amenities.map(amenity => {
                        const IconComponent = amenityIcons[amenity] || Wifi;
                        return (
                          <div key={amenity} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="bg-red-50 p-1.5 rounded-md text-red-600"><IconComponent size={14} /></div>
                            {amenity}
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-500 font-medium">Precio</span>
                      <div className="text-3xl font-bold text-gray-900">${selectedRoom.price}<span className="text-sm font-normal text-gray-500 ml-1">{selectedRoom.pricePerHour}</span></div>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all hover:-translate-y-0.5">
                      Reservar
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