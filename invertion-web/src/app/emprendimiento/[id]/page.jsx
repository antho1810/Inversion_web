import { emprendimientos } from "@/data/empredimientos";
import ProgressBar from "@/components/ProgressBar";

export default async function EmprendimientoDetalle({ params }) {
  const { id } = await params;

  const emprendimiento = emprendimientos.find(
    (item) => item.id === id
  );

  if (!emprendimiento) {
    return (
      <div className="max-w-5xl mx-auto p-10">
        <h1 className="text-3xl font-bold">
          Emprendimiento no encontrado
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <span className="text-blue-600 font-medium">
          {emprendimiento.ciudad}
        </span>

        <h1 className="text-5xl font-bold mt-2">
          {emprendimiento.nombre}
        </h1>

        <p className="text-gray-600 mt-6">
          {emprendimiento.descripcion}
        </p>

        <div className="mt-8">
          <h3 className="font-semibold text-xl">
            Meta de financiación
          </h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {emprendimiento.meta}
          </p>
          <ProgressBar
actual={emprendimiento.actual}
objetivo={emprendimiento.objetivo}
/>
        </div>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Me interesa invertir
        </button>
      </div>
    </div>
  );
}