import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a>
            InvierteLocal
          </a>
          

          {/* Menú */}
          <div className="hidden md:flex items-center gap-8">
            <a>
              Inicio
            </a>

            <a>
              Empredimientos
            </a>

            <a>
              Cómo funciona
            </a>
          </div>

          {/* Botones */}
          <div className="flex items-center gap-3">
              <Link className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition" href={`/login`}>
          Iniciar sesión
      </Link>
            <Link className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" href={`/registro`}>
          Registrarse
      </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}