import EmprendimientoCard from "@/components/EmpredimientoCard";
import { emprendimientos } from "@/data/empredimientos";

export default function EmprendimientosDestacados() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Emprendimientos destacados
          </h2>

          <p className="mt-3 text-gray-600">
            Descubre proyectos con potencial y apoya ideas innovadoras.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {emprendimientos.map((emprendimiento) => (
            <EmprendimientoCard
              key={emprendimiento.id}
              {...emprendimiento}
            />
          ))}
        </div>
      </div>
    </section>
  );
}