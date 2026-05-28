import { MapPin, Navigation, Car, Coffee, Building } from "lucide-react";
import fachada from '../assets/fachada.webp'


export default function Ubicacion() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Ubicación Privilegiada
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Palmeyras Inn & Suites se encuentra en una zona estratégica
            de Tuxtla Gutiérrez, cerca de los principales puntos de la ciudad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <div className="relative">
            <img
              src={fachada}
              alt="Ubicación hotel"
              className="rounded-3xl shadow-xl object-cover w-full h-[420px]"
            />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg flex items-center gap-3">
              <MapPin className="text-red-600" />
              <p className="text-sm font-medium text-gray-800">
                Tuxtla Gutiérrez, Chiapas
              </p>
            </div>
          </div>

          {/* Información */}
          <div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Cerca de Todo
            </h3>

            <p className="text-gray-600 mb-10">
              Nuestro hotel está ubicado en una zona accesible y segura,
              permitiendo a nuestros huéspedes llegar fácilmente a
              restaurantes, centros comerciales y atracciones turísticas.
            </p>

            {/* Puntos cercanos */}
            <div className="grid grid-cols-2 gap-6">

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <Coffee className="text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Restaurantes</p>
                  <p className="text-sm text-gray-500">A 5 minutos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <Building className="text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Centro</p>
                  <p className="text-sm text-gray-500">A 10 minutos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <Car className="text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Aeropuerto</p>
                  <p className="text-sm text-gray-500">A 35 minutos</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <Navigation className="text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900">Parques</p>
                  <p className="text-sm text-gray-500">A 8 minutos</p>
                </div>
              </div>

            </div>

            {/* Botón */}
            <a
              href="https://www.google.com/travel/hotels/s/7pQeqjDVbJCUFtEEA"
              target="_blank"
              className="inline-block mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
            >
              Abrir en Google Maps
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}