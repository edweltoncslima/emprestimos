export default function TesteCSSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Teste de CSS
        </h1>
        <p className="text-gray-600 mb-4">
          Se você consegue ver este texto com estilos, o CSS está funcionando!
        </p>
        <div className="space-y-2">
          <div className="bg-blue-100 text-blue-800 p-2 rounded">Classe bg-blue-100</div>
          <div className="bg-green-100 text-green-800 p-2 rounded">Classe bg-green-100</div>
          <div className="bg-red-100 text-red-800 p-2 rounded">Classe bg-red-100</div>
        </div>
      </div>
    </div>
  );
} 