'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
}

interface Emprestimo {
  id: string;
  valor: number;
  valorTotal: number;
  valorParcela: number;
  taxaJuros: number;
  prazoMeses: number;
  dataEmprestimo: string;
  status: 'ATIVO' | 'QUITADO' | 'INADIMPLENTE';
  observacoes?: string;
  cliente: Cliente;
}

export default function EditarEmprestimoPage() {
  const { user } = useUser();
  const router = useRouter();
  const params = useParams();
  const emprestimoId = params.id as string;

  const [emprestimo, setEmprestimo] = useState<Emprestimo | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    valor: '',
    taxaJuros: '',
    prazoMeses: '',
    dataEmprestimo: '',
    observacoes: '',
    status: 'ATIVO'
  });

  useEffect(() => {
    if (emprestimoId) {
      fetchEmprestimo();
    }
  }, [emprestimoId]);

  const fetchEmprestimo = async () => {
    try {
      const response = await fetch(`/api/emprestimos/${emprestimoId}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar empréstimo');
      }
      const data = await response.json();
      setEmprestimo(data);
      
      // Preencher o formulário com os dados existentes
      setFormData({
        valor: data.valor.toString(),
        taxaJuros: data.taxaJuros.toString(),
        prazoMeses: data.prazoMeses.toString(),
        dataEmprestimo: data.dataEmprestimo.split('T')[0],
        observacoes: data.observacoes || '',
        status: data.status
      });
    } catch (err) {
      setError('Erro ao carregar empréstimo');
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
    const taxaJuros = parseFloat(formData.taxaJuros) || 0;
    const prazoMeses = parseFloat(formData.prazoMeses) || 0;

    if (valor && taxaJuros && prazoMeses) {
      const valorTotal = valor * Math.pow(1 + taxaJuros / 100, prazoMeses);
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
      const response = await fetch(`/api/emprestimos/${emprestimoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          valor: parseFloat(formData.valor),
          taxaJuros: parseFloat(formData.taxaJuros),
          prazoMeses: parseInt(formData.prazoMeses),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao atualizar empréstimo');
      }

      router.push(`/emprestimos/${emprestimoId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar empréstimo');
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

  if (error || !emprestimo) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error || 'Empréstimo não encontrado'}
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
            <h1 className="text-3xl font-bold text-gray-900">Editar Empréstimo</h1>
            <p className="text-gray-600 mt-2">
              Edite as informações do empréstimo de {emprestimo.cliente.nome}
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
              {/* Cliente (Read-only) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cliente
                </label>
                <input
                  type="text"
                  value={emprestimo.cliente.nome}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
                />
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

              {/* Taxa de Juros */}
              <div>
                <label htmlFor="taxaJuros" className="block text-sm font-medium text-gray-700 mb-2">
                  Taxa de Juros Mensal (%) *
                </label>
                <input
                  type="number"
                  id="taxaJuros"
                  name="taxaJuros"
                  value={formData.taxaJuros}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0,00"
                />
              </div>

              {/* Prazo */}
              <div>
                <label htmlFor="prazoMeses" className="block text-sm font-medium text-gray-700 mb-2">
                  Prazo (meses) *
                </label>
                <input
                  type="number"
                  id="prazoMeses"
                  name="prazoMeses"
                  value={formData.prazoMeses}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="12"
                />
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

              {/* Status */}
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="ATIVO">Ativo</option>
                  <option value="QUITADO">Quitado</option>
                  <option value="INADIMPLENTE">Inadimplente</option>
                </select>
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
              {(formData.valor && formData.taxaJuros && formData.prazoMeses) && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-sm font-medium text-blue-900 mb-2">Resumo do Cálculo</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-700">Valor Total:</span>
                      <span className="ml-2 font-medium text-blue-900">{formatCurrency(valorTotal)}</span>
                    </div>
                    <div>
                      <span className="text-blue-700">Valor da Parcela:</span>
                      <span className="ml-2 font-medium text-blue-900">{formatCurrency(valorParcela)}</span>
                    </div>
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
                  {submitting ? 'Salvando...' : 'Salvar Alterações'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 