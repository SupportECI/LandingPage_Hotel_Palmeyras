import { useState } from "react";
import { X } from "lucide-react";

import areas from '../assets/areas-comunes.mp4';
// Asegúrate de que esta ruta sea correcta
import room1 from '../assets/habitacion.webp'; 
import room2 from '../assets/room2.webp'; 

export default function Galeria() {
  const [itemActivo, setItemActivo] = useState(null);

  const elementos = [
    {
      src: areas,
      isVideo: true,
      titulo: "Áreas Comunes",
    },
    {
      src: room1,
      titulo: "Habitación Doble",
    },
    {
      // ⚠️ Usé room1 aquí de nuevo para evitar el error de imagen rota. 
      // Cúando tengas otra, cámbialo.
      src: room2, 
      titulo: "Confort y Descanso",
    },
  ];

  return (
    <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">
          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Descanso garantizado
          </h2>
          <p className="text-gray-500 max-w-md">
            En Palmeyras Inn nos enfocamos en lo que más importa: tu comodidad. 
            Nuestras habitaciones están diseñadas para ofrecerte la tranquilidad que buscas.
          </p>
        </div>

        {/* GRID CORREGIDO: Adaptable y sin alturas destructivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. Columna Izquierda (Video) */}
          {/* Al usar 'absolute inset-0' en el video, esta columna tomará 
              automáticamente la misma altura que la columna derecha */}
          <div
            className="relative overflow-hidden rounded-3xl cursor-pointer group min-h-[400px]"
            onClick={() => setItemActivo(elementos[0])}
          >
            <video
              src={elementos[0].src}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Degradado oscuro para que el texto siempre se lea bien */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-white z-10">
              <h3 className="text-xl font-semibold">{elementos[0].titulo}</h3>
            </div>
          </div>

          {/* 2. Columna Derecha (Fotos) */}
          <div className="flex flex-col gap-6">
            
            {/* Foto 1 */}
            <div
              className="relative overflow-hidden rounded-3xl cursor-pointer group h-[250px] md:h-[300px]"
              onClick={() => setItemActivo(elementos[1])}
            >
              <img
                src={elementos[1].src}
                alt={elementos[1].titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white z-10">
                <p className="font-medium">{elementos[1].titulo}</p>
              </div>
            </div>

            {/* Foto 2 */}
            <div
              className="relative overflow-hidden rounded-3xl cursor-pointer group h-[250px] md:h-[300px]"
              onClick={() => setItemActivo(elementos[2])}
            >
              <img
                src={elementos[2].src}
                alt={elementos[2].titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white z-10">
                <p className="font-medium">{elementos[2].titulo}</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* LIGHTBOX */}
      {itemActivo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setItemActivo(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 bg-white/10 rounded-full p-2 transition-colors">
            <X size={32} />
          </button>
          
          {itemActivo.isVideo ? (
            <video 
              src={itemActivo.src} 
              className="max-w-full max-h-full rounded-2xl shadow-2xl" 
              controls 
              autoPlay 
            />
          ) : (
            <img 
              src={itemActivo.src} 
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" 
              alt={itemActivo.titulo} 
            />
          )}
        </div>
      )}
    </section>
  );
}