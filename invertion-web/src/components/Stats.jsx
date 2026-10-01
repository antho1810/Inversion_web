export default function Stats() {
  const stats = [
    {
      numero: "+150",
      titulo: "Emprendimientos",
    },
    {
      numero: "+500",
      titulo: "Usuarios",
    },
    {
      numero: "+50",
      titulo: "Ciudades",
    },
    {
      numero: "$300M",
      titulo: "Capital proyectado",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.titulo}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                {stat.numero}
              </h3>

              <p className="mt-2 text-gray-600">
                {stat.titulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
