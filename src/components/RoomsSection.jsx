import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Clock, Wifi, Coffee, ParkingCircle, Waves } from 'lucide-react'

const rooms = [
  { id: 1, category: 'PREMIUM', name: 'Suite Ejecutiva', rating: 4.8, reviews: 124, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking', 'Piscina'], price: 135, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 2, category: 'DELUXE', name: 'Habitación Deluxe', rating: 4.6, reviews: 89, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking'], price: 105, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 3, category: 'LUXURY', name: 'Suite Presidencial', rating: 4.9, reviews: 56, guests: '4 pers.', duration: '3-24h', amenities: ['WiFi', 'Piscina', 'Parking'], price: 240, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 4, category: 'CLASSIC', name: 'Habitación Clásica', rating: 4.5, reviews: 102, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Café'], price: 85, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 5, category: 'FAMILY', name: 'Suite Familiar', rating: 4.7, reviews: 78, guests: '5 pers.', duration: '3-24h', amenities: ['WiFi', 'Parking', 'Piscina'], price: 180, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 6, category: 'VIP', name: 'Habitación VIP', rating: 4.8, reviews: 95, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Café', 'Parking'], price: 150, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 7, category: 'ROMANCE', name: 'Suite Romántica', rating: 4.9, reviews: 67, guests: '2 pers.', duration: '3-24h', amenities: ['WiFi', 'Piscina'], price: 200, pricePerHour: '/3h', image: './src/assets/room.jpg' },
  { id: 8, category: 'COMFORT', name: 'Habitación Confort', rating: 4.6, reviews: 81, guests: '3 pers.', duration: '3-24h', amenities: ['WiFi', 'Parking'], price: 95, pricePerHour: '/3h', image: './src/assets/room.jpg' },
]

const amenityIcons = {
  WiFi: Wifi,
  Café: Coffee,
  Parking: ParkingCircle,
  Piscina: Waves,
}

const RoomCard = ({ room }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-red-200 transition-all duration-500 hover:shadow-xl hover:shadow-gray-100/50"
    >
      <div className="relative h-44 overflow-hidden bg-gray-100">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-red-600 px-2 py-0.5 rounded shadow-sm tracking-wider">
          {room.category}
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-bold text-gray-900 truncate leading-tight pr-2">{room.name}</h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={10} className="text-yellow-400 fill-yellow-400" />
            <span className="text-[11px] font-bold text-gray-900">{room.rating}</span>
          </div>
        </div>
        
        <p className="text-[10px] text-gray-400 mb-3">{room.reviews} reseñas</p>

        <div className="flex gap-3 mb-4 text-gray-500 text-[11px]">
          <div className="flex items-center gap-1.5">
            <Users size={12} className="text-gray-400" />
            <span>{room.guests}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={12} className="text-gray-400" />
            <span>{room.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {room.amenities.slice(0, 3).map((amenity) => {
            const IconComponent = amenityIcons[amenity] || Wifi
            return (
              <div key={amenity} className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                <IconComponent size={10} />
                <span>{amenity}</span>
              </div>
            )
          })}
        </div>

        {/* Solo el precio, sin el botón */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[9px] text-gray-400 block uppercase font-medium">Desde</span>
            <div className="text-lg font-extrabold text-gray-900 leading-none">
              ${room.price}
              <span className="text-gray-400 text-[10px] font-normal ml-0.5">{room.pricePerHour}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function RoomsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-serif">
            Nuestras Habitaciones
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto">
            Lujo y confort diseñado para tu descanso
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}