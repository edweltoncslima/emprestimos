'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Caixa {
  id: string;
  saldoInicial: number;
  saldoAtual: number;
  dataInicial: string;
  observacoes?: string;
}

interface Movimentacao {
  id: string;
  tipo: 'ENTRADA' | 'SAIDA';
  valor: number;
  descricao: string;
  dataMovimentacao: string;
  emprestimo?: {
    cliente: {
      nome: string;
    };
  };
}

interface Estatisticas {
  totalEmprestado: number;
  totalRecebido: number;
  totalJuros: number;
  jurosRecebidos: number;
  margemLucro: number;
  saldoAtual: number;
}

export default function CaixaPage() {
  const { user } = useUser();
  const [caixa, setCaixa] = useState<Caixa | null>(null);
  const [movimentacoes, setMovimentacoes] = useState<Movimentacao[]>([]);
  const [estatisticas, setEstatisticas] = useState<Estatisticas | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [configForm, setConfigForm] = useState({
    saldoInicial: '',
    observacoes: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchCaixaData();
  }, []);

  const fetchCaixaData = async () => {
    try {
      const response = await fetch('/api/caixa');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do caixa');
      }
      const data = await response.json();
      setCaixa(data.caixa);
      setMovimentacoes(data.movimentacoes);
      setEstatisticas(data.estatisticas);
    } catch (err) {
      setError('Erro ao carregar dados do caixa');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleConfigSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const method = caixa ? 'PUT' : 'POST';
      const response = await fetch('/api/caixa', {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          saldoInicial: parseFloat(configForm.saldoInicial),
          observacoes: configForm.observacoes
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao configurar caixa');
      }

      await fetchCaixaData();
      setShowConfigModal(false);
      setConfigForm({ saldoInicial: '', observacoes: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao configurar caixa');
    } finally {
      setSubmitting(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-1/2"></div>
                  </div>
                ))}
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Controle de Caixa</h1>
              <p className="text-gray-600 mt-2">
                Gerencie seu saldo e acompanhe suas movimentações
              </p>
            </div>
            <button
              onClick={() => setShowConfigModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              {caixa ? 'Atualizar Saldo' : 'Configurar Caixa'}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Stats */}
          {estatisticas && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">Saldo Atual</h3>
                <p className={`text-2xl font-bold ${estatisticas.saldoAtual >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(estatisticas.saldoAtual)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">Total Emprestado</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {formatCurrency(estatisticas.totalEmprestado)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">Total Recebido</h3>
                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(estatisticas.totalRecebido)}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-sm font-medium text-gray-500">Margem de Lucro</h3>
                <p className="text-2xl font-bold text-blue-600">
                  {formatCurrency(estatisticas.margemLucro)}
                </p>
              </div>
            </div>
          )}

          {/* Caixa Info */}
          {caixa && (
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Informações do Caixa</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500">Saldo Inicial</label>
                  <p className="text-lg font-semibold text-gray-900">{formatCurrency(caixa.saldoInicial)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Data de Início</label>
                  <p className="text-lg font-semibold text-gray-900">{formatDate(caixa.dataInicial)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500">Observações</label>
                  <p className="text-lg font-semibold text-gray-900">{caixa.observacoes || 'Nenhuma'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Movimentações */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Movimentações Recentes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data/Hora
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tipo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Valor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descrição
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {movimentacoes.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                        Nenhuma movimentação encontrada
                      </td>
                    </tr>
                  ) : (
                    movimentacoes.map((movimentacao) => (
                      <tr key={movimentacao.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDateTime(movimentacao.dataMovimentacao)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            movimentacao.tipo === 'ENTRADA' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {movimentacao.tipo}
                          </span>
                        </td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          movimentacao.tipo === 'ENTRADA' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {movimentacao.tipo === 'ENTRADA' ? '+' : '-'} {formatCurrency(movimentacao.valor)}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {movimentacao.descricao}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Config Modal */}
        {showConfigModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {caixa ? 'Atualizar Saldo Inicial' : 'Configurar Caixa'}
                </h3>
                <form onSubmit={handleConfigSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="saldoInicial" className="block text-sm font-medium text-gray-700 mb-2">
                      Saldo Inicial (R$)
                    </label>
                    <input
                      type="number"
                      id="saldoInicial"
                      value={configForm.saldoInicial}
                      onChange={(e) => setConfigForm(prev => ({ ...prev, saldoInicial: e.target.value }))}
                      required
                      min="0"
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="0,00"
                    />
                  </div>
                  <div>
                    <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
                      Observações
                    </label>
                    <textarea
                      id="observacoes"
                      value={configForm.observacoes}
                      onChange={(e) => setConfigForm(prev => ({ ...prev, observacoes: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Observações sobre o caixa..."
                    />
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowConfigModal(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                    >
                      {submitting ? 'Salvando...' : 'Salvar'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
} 