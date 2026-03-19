import { useState } from "react";
import { X, BedDouble, Bath, Expand } from "lucide-react";

export default function Galeria() {

  const [imagenActiva, setImagenActiva] = useState(null);

  const imagenes = [
    {
      src: "./src/assets/room.jpg",
      titulo: "Habitación Deluxe",
      size: "2,169",
      beds: "3",
      bath: "2",
    },
    {
      src: "./src/assets/room.jpg",
      titulo: "Suite Ejecutiva",
      size: "1,540",
      beds: "2",
      bath: "1",
    },
    {
      src: "./src/assets/room.jpg",
      titulo: "Área de descanso",
      size: "980",
      beds: "1",
      bath: "1",
    },
    {
      src: "./src/assets/room.jpg",
      titulo: "Vista del hotel",
      size: "1,200",
      beds: "2",
      bath: "1",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-end">

          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Explora nuestros espacios
          </h2>

          <p className="text-gray-500 max-w-md">
            Descubre la comodidad y tranquilidad de Palmeyras Inn a través
            de nuestras habitaciones y espacios diseñados para tu descanso.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">

          {/* Imagen grande */}
          <div
            className="md:row-span-2 relative overflow-hidden rounded-3xl cursor-pointer group"
            onClick={() => setImagenActiva(imagenes[0].src)}
          >
            <img
              src={imagenes[0].src}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Card cristal */}
            <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-white">

              <h3 className="text-lg font-semibold mb-2">
                {imagenes[0].titulo}
              </h3>

              <div className="flex items-center gap-4 text-sm opacity-90">

                <div className="flex items-center gap-1">
                  <Expand size={14} />
                  {imagenes[0].size} sq.ft
                </div>

                <div className="flex items-center gap-1">
                  <BedDouble size={14} />
                  {imagenes[0].beds}
                </div>

                <div className="flex items-center gap-1">
                  <Bath size={14} />
                  {imagenes[0].bath}
                </div>

              </div>

            </div>

          </div>

          {/* Imagen horizontal */}
          <div
            className="md:col-span-2 relative overflow-hidden rounded-3xl cursor-pointer group"
            onClick={() => setImagenActiva(imagenes[1].src)}
          >
            <img
              src={imagenes[1].src}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute bottom-6 left-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">
              {imagenes[1].titulo}
            </div>

          </div>

          {/* Imagen */}
          <div
            className="relative overflow-hidden rounded-3xl cursor-pointer group"
            onClick={() => setImagenActiva(imagenes[2].src)}
          >
            <img
              src={imagenes[2].src}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
              {imagenes[2].titulo}
            </div>

          </div>

          {/* Imagen */}
          <div
            className="relative overflow-hidden rounded-3xl cursor-pointer group"
            onClick={() => setImagenActiva(imagenes[3].src)}
          >
            <img
              src={imagenes[3].src}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute bottom-4 left-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
              {imagenes[3].titulo}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}