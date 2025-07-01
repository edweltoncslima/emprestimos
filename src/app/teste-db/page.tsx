"use client";

import { useState, useEffect } from "react";

export default function TesteDB() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [setupMessage, setSetupMessage] = useState("");

  const fetchClientes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/clientes');
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao buscar clientes');
      }
      const data = await response.json();
      setClientes(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const setupTestData = async () => {
    setSetupMessage("Criando dados de teste...");
    try {
      const response = await fetch('/api/setup-test', { method: 'POST' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar dados de teste');
      }
      const data = await response.json();
      setSetupMessage(data.message);
      // Buscar clientes após criar dados de teste
      await fetchClientes();
    } catch (err: any) {
      setSetupMessage(`Erro: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Teste do Banco de Dados
        </h1>

        {/* Botão para criar dados de teste */}
        <div className="mb-8">
          <button
            onClick={setupTestData}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mr-4"
          >
            Criar Dados de Teste
          </button>
          <button
            onClick={fetchClientes}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Atualizar Lista
          </button>
        </div>

        {setupMessage && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
            {setupMessage}
          </div>
        )}

        {loading && (
          <div className="text-center">
            <p className="text-gray-600">Carregando...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong>Erro:</strong> {error}
          </div>
        )}

        {!loading && !error && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Clientes no Banco ({clientes.length})
            </h2>
            
            {clientes.length === 0 ? (
              <p className="text-gray-600">Nenhum cliente encontrado no banco.</p>
            ) : (
              <div className="space-y-4">
                {clientes.map((cliente: any) => (
                  <div key={cliente.id} className="border rounded p-4">
                    <h3 className="font-medium">{cliente.nome}</h3>
                    <p className="text-gray-600">{cliente.email}</p>
                    <p className="text-gray-600">{cliente.telefone}</p>
                    <p className="text-gray-600">{cliente.cpf}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <a 
            href="/"
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
} 