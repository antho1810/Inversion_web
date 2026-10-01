export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Descubre emprendimientos con potencial
          </h1>

          <p className="text-xl text-blue-100 mb-8">
            Conecta emprendedores e inversionistas de una manera simple,
            transparente y enfocada en el crecimiento local.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Explorar proyectos
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
              Publicar emprendimiento
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}