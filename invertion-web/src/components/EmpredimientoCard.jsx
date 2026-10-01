import Link from "next/link"
export default function EmprendimientoCard({
  id,
  nombre,
  ciudad,
  descripcion,
  meta,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Imagen</span>
      </div>

      <div className="p-5">
        <p className="text-sm text-blue-600 font-medium">
          {ciudad}
        </p>

        <h3 className="text-xl font-bold mt-1">
          {nombre}
        </h3>

        <p className="text-gray-600 mt-3">
          {descripcion}
        </p>

        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Meta de financiación
          </p>

          <p className="font-semibold text-lg">
            {meta}
          </p>
        </div>
        <Link className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" href={`/emprendimiento/${id}`}>
          Ver más
      </Link>
{/* 
    <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" onClick={() => {
        windows.location.href=`emprendimiento/${id}` }}>
          Ver más
        </button> */}
      </div>
    </div>
  );
}