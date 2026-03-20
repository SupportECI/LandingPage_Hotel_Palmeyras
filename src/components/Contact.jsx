import { Phone, Mail, MapPin } from "lucide-react";

export default function Contacto() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* encabezado */}
        <div className="mb-14">
          <h2 className="text-4xl font-semibold text-gray-900">
            Contacto
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl">
            Si tienes alguna duda sobre disponibilidad, reservas o servicios,
            nuestro equipo estará encantado de ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* información */}
          <div className="space-y-6 bg-slate-0 p-6 rounded-3xl border border-slate-200">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-600 font-semibold">Contacto</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">Hablemos</h3>
              <p className="text-gray-500 mt-2">Nuestro equipo está disponible para ayudarte en reservas, servicios y consultas.</p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-red-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Teléfono</p>
                <p className="text-gray-500">+52 961 000 0000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-red-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Correo</p>
                <p className="text-gray-500">contacto@palmeyrasinn.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-red-600 mt-1" size={20} />
              <div>
                <p className="font-semibold text-gray-900">Ubicación</p>
                <p className="text-gray-500">Tuxtla Gutiérrez, Chiapas</p>
              </div>
            </div>
          </div>

          {/* formulario */}
          <form className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block text-sm text-slate-600">
                Nombre
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition"
                />
              </label>

              <label className="block text-sm text-slate-600">
                Correo
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition"
                />
              </label>
            </div>

            <label className="block text-sm text-slate-600">
              Mensaje
              <textarea
                rows="4"
                placeholder="Escribe tu mensaje..."
                className="mt-1 w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 focus:border-red-600 focus:ring-2 focus:ring-red-100 outline-none transition resize-none"
              />
            </label>

            <button
              className="w-full md:w-auto block bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Enviar mensaje
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}