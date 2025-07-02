'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}

export default function NovoEmprestimoPage() {
  const { user } = useUser();
  const router = useRouter();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    clienteId: '',
    valor: '',
    taxaJuros: '',
    prazoMeses: '',
    dataEmprestimo: new Date().toISOString().split('T')[0],
    observacoes: ''
  });

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await fetch('/api/clientes');
      if (!response.ok) {
        throw new Error('Erro ao buscar clientes');
      }
      const data = await response.json();
      setClientes(data);
    } catch (err) {
      setError('Erro ao carregar clientes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calcularValorTotal = () => {
    const valor = parseFloat(formData.valor) || 0;
    const prazoMeses = parseFloat(formData.prazoMeses) || 0;

    if (valor && prazoMeses) {
      // Taxa fixa de 20%
      const valorTotal = valor * 1.20; // 20% de juros
      const valorParcela = valorTotal / prazoMeses;
      return {
        valorTotal: valorTotal.toFixed(2),
        valorParcela: valorParcela.toFixed(2)
      };
    }
    return { valorTotal: '0,00', valorParcela: '0,00' };
  };

  const formatCurrency = (value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(numValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/emprestimos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          valor: parseFloat(formData.valor),
          taxaJuros: 20, // Taxa fixa de 20%
          prazoMeses: parseInt(formData.prazoMeses),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar empréstimo');
      }

      const emprestimo = await response.json();
      router.push(`/emprestimos/${emprestimo.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar empréstimo');
    } finally {
      setSubmitting(false);
    }
  };

  const { valorTotal, valorParcela } = calcularValorTotal();

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-10 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Voltar
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Novo Empréstimo</h1>
            <p className="text-gray-600 mt-2">
              Crie um novo empréstimo para um cliente
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Cliente */}
              <div>
                <label htmlFor="clienteId" className="block text-sm font-medium text-gray-700 mb-2">
                  Cliente *
                </label>
                <select
                  id="clienteId"
                  name="clienteId"
                  value={formData.clienteId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione um cliente</option>
                  {clientes.map((cliente) => (
                    <option key={cliente.id} value={cliente.id}>
                      {cliente.nome} - {cliente.email}
                    </option>
                  ))}
                </select>
              </div>

              {/* Valor */}
              <div>
                <label htmlFor="valor" className="block text-sm font-medium text-gray-700 mb-2">
                  Valor do Empréstimo (R$) *
                </label>
                <input
                  type="number"
                  id="valor"
                  name="valor"
                  value={formData.valor}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0,00"
                />
              </div>

              {/* Taxa de Juros (Fixa 20%) */}
              <div>
                <label htmlFor="taxaJuros" className="block text-sm font-medium text-gray-700 mb-2">
                  Taxa de Juros (Fixa 20%)
                </label>
                <input
                  type="text"
                  id="taxaJuros"
                  name="taxaJuros"
                  value="20"
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500"
                />
                <p className="text-sm text-gray-500 mt-1">Taxa fixa de 20% aplicada automaticamente</p>
              </div>

              {/* Prazo */}
              <div>
                <label htmlFor="prazoMeses" className="block text-sm font-medium text-gray-700 mb-2">
                  Prazo (dias) *
                </label>
                <select
                  id="prazoMeses"
                  name="prazoMeses"
                  value={formData.prazoMeses}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione o prazo</option>
                  <option value="20">20 dias</option>
                  <option value="24">24 dias</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Cobrança diária com 20% de juros</p>
              </div>

              {/* Data do Empréstimo */}
              <div>
                <label htmlFor="dataEmprestimo" className="block text-sm font-medium text-gray-700 mb-2">
                  Data do Empréstimo
                </label>
                <input
                  type="date"
                  id="dataEmprestimo"
                  name="dataEmprestimo"
                  value={formData.dataEmprestimo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Observações */}
              <div>
                <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
                  Observações
                </label>
                <textarea
                  id="observacoes"
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Observações sobre o empréstimo..."
                />
              </div>

              {/* Resumo do Cálculo */}
              {(formData.valor && formData.prazoMeses) && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-blue-900 mb-2">Resumo do Cálculo</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-700">Valor Emprestado:</span>
                      <span className="ml-2 font-medium text-blue-900">{formatCurrency(formData.valor)}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Juros (20%):</span>
                      <span className="ml-2 font-medium text-blue-900">{formatCurrency((parseFloat(formData.valor) * 0.20).toString())}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Valor Total:</span>
                      <span className="ml-2 font-medium text-blue-900">{formatCurrency(valorTotal)}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Valor da Parcela:</span>
                      <span className="ml-2 font-medium text-blue-900">{formatCurrency(valorParcela)}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-xs text-blue-700">
                      <strong>Cobrança:</strong> {formData.prazoMeses} parcelas diárias de {formatCurrency(valorParcela)} cada
                    </p>
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Criando...' : 'Criar Empréstimo'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 