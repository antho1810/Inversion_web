export default function ProgressBar({
  actual,
  objetivo,
}) {
  const porcentaje = (actual / objetivo) * 100;
  console.log(actual)
  console.log(objetivo)

  return (
    <div className="mt-4">
      <div className="flex justify-between text-sm mb-2">
        <span>${actual.toLocaleString()}</span>
        <span>${objetivo.toLocaleString()}</span>

      </div>

      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{
            width: `${porcentaje}%`,
          }}
        />
      </div>

      <p className="text-sm text-gray-600 mt-2">
        {porcentaje.toFixed(1)}% financiado
      </p>
    </div>
  );
}