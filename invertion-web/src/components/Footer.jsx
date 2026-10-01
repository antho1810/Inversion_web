export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          
          <div>
            <h3 className="text-xl font-bold text-white">
              InvierteLocal
            </h3>
            <p className="mt-3 text-sm">
              Conectamos emprendedores e inversionistas para impulsar
              proyectos con impacto local.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Navegación
            </h4>

            <ul className="mt-3 space-y-2">
              <li>
                <a>
                  Inicio
                </a>
              </li>

              <li>
                <a>
                  Emprendimientos
                </a>

              </li>

              <li>
                <a>
                  Cómo funciona
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">
              Contacto
            </h4>

            <p className="mt-3 text-sm">
              contacto@inviertelocal.com
            </p>

            <p className="text-sm">
              Valledupar, Colombia
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
          © 2026 InvierteLocal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
