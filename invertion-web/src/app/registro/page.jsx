export default function RegistroPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Crear cuenta
        </h1>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Crear cuenta
          </button>

        </form>
      </div>
    </main>
  );
}