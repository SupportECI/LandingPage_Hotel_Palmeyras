import { Users, Star, Clock } from "lucide-react";
import us from '../assets/us.webp'


export default function Nosotros() {
  return (
    <section className="w-full py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGEN */}
        <div className="relative">

          <img
            src={us}
            alt="Hotel Palmeyras"
            className="rounded-3xl object-cover h-[460px] w-full shadow-xl"
          />

          {/* Card flotante */}
          <div className="absolute -bottom-8 left-8 bg-white shadow-xl rounded-2xl px-6 py-5 flex items-center gap-4 border border-gray-100">

            <div className="bg-red-100 text-red-600 p-3 rounded-xl">
              <Star size={22} />
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                Experiencia de calidad
              </p>
              <p className="text-sm text-gray-500">
                Servicio destacado por nuestros huéspedes
              </p>
            </div>

          </div>

        </div>

        {/* CONTENIDO */}
        <div>

          <p className="text-red-600 font-medium mb-3">
            Palmeyras Inn & Suites
          </p>

          <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Un espacio diseñado para tu descanso en Tuxtla Gutiérrez
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            En Palmeyras Inn & Suites nos dedicamos a ofrecer una experiencia
            de hospedaje cómoda, tranquila y accesible para nuestros huéspedes.
            Nuestro hotel combina comodidad moderna con un ambiente acogedor
            pensado para brindar descanso y bienestar en cada estancia.
          </p>

          <p className="text-gray-600 mb-10 leading-relaxed">
            Ya sea que visites Tuxtla Gutiérrez por negocios o por placer,
            nuestro equipo trabaja cada día para ofrecer atención de calidad
            y un ambiente que te haga sentir como en casa.
          </p>

          {/* ESTADÍSTICAS */}
          <div className="grid grid-cols-3 gap-10">

            <div className="flex items-center gap-4">

              <div className="bg-gray-100 p-3 rounded-xl">
                <Users size={20} className="text-gray-700" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  10+
                </p>
                <p className="text-sm text-gray-500">
                  Habitaciones
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-gray-100 p-3 rounded-xl">
                <Star size={20} className="text-gray-700" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  5★
                </p>
                <p className="text-sm text-gray-500">
                  Atención
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="bg-gray-100 p-3 rounded-xl">
                <Clock size={20} className="text-gray-700" />
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  24/7
                </p>
                <p className="text-sm text-gray-500">
                  Recepción
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}