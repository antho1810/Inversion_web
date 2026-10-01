export default function SearchBar() {
  return (
    <section className="bg-white py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Buscar por ciudad..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Todas las categorías</option>
            <option>Gastronomía</option>
            <option>Tecnología</option>
            <option>Moda</option>
            <option>Servicios</option>
          </select>

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Buscar
          </button>

        </div>
      </div>
    </section>
  );
}