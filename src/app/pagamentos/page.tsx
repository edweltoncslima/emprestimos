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

interface Emprestimo {
  id: string;
  valor: number;
  valorTotal: number;
  status: string;
  cliente: Cliente;
}

interface Pagamento {
  id: string;
  valor: number;
  dataPagamento: string;
  metodoPagamento: string;
  observacoes?: string;
  emprestimo: Emprestimo;
}

export default function PagamentosPage() {
  const { user } = useUser();
  const router = useRouter();
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPagamentos();
  }, []);

  const fetchPagamentos = async () => {
    try {
      const response = await fetch('/api/pagamentos');
      if (!response.ok) {
        throw new Error('Erro ao buscar pagamentos');
      }
      const data = await response.json();
      setPagamentos(data);
    } catch (err) {
      setError('Erro ao carregar pagamentos');
      console.error(err);
    } finally {
      setLoading(false);
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

  const getMetodoPagamentoLabel = (metodo: string) => {
    const labels: { [key: string]: string } = {
      'PIX': 'PIX',
      'CARTAO_CREDITO': 'Cartão de Crédito',
      'CARTAO_DEBITO': 'Cartão de Débito',
      'BOLETO': 'Boleto',
      'TRANSFERENCIA': 'Transferência',
      'DINHEIRO': 'Dinheiro',
      'OUTROS': 'Outros'
    };
    return labels[metodo] || metodo;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ATIVO':
        return 'bg-green-100 text-green-800';
      case 'QUITADO':
        return 'bg-blue-100 text-blue-800';
      case 'INADIMPLENTE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
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
              <h1 className="text-3xl font-bold text-gray-900">Pagamentos</h1>
              <p className="text-gray-600 mt-2">
                Histórico de todos os pagamentos realizados
              </p>
            </div>
            <button
              onClick={() => router.push('/emprestimos')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Voltar aos Empréstimos
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total de Pagamentos</h3>
              <p className="text-2xl font-bold text-gray-900">{pagamentos.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Valor Total Pago</h3>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(pagamentos.reduce((total, pag) => total + pag.valor, 0))}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Média por Pagamento</h3>
              <p className="text-2xl font-bold text-blue-600">
                {pagamentos.length > 0 
                  ? formatCurrency(pagamentos.reduce((total, pag) => total + pag.valor, 0) / pagamentos.length)
                  : formatCurrency(0)
                }
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Este Mês</h3>
              <p className="text-2xl font-bold text-purple-600">
                {formatCurrency(
                  pagamentos
                    .filter(pag => {
                      const pagDate = new Date(pag.dataPagamento);
                      const now = new Date();
                      return pagDate.getMonth() === now.getMonth() && 
                             pagDate.getFullYear() === now.getFullYear();
                    })
                    .reduce((total, pag) => total + pag.valor, 0)
                )}
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Pagamentos List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {pagamentos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum pagamento encontrado</h3>
                <p className="text-gray-500 mb-4">Os pagamentos aparecerão aqui quando forem registrados.</p>
                <button
                  onClick={() => router.push('/emprestimos')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Ver Empréstimos
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Valor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Método
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status do Empréstimo
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pagamentos.map((pagamento) => (
                      <tr key={pagamento.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {pagamento.emprestimo.cliente.nome}
                            </div>
                            <div className="text-sm text-gray-500">
                              {pagamento.emprestimo.cliente.email}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatCurrency(pagamento.valor)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {getMetodoPagamentoLabel(pagamento.metodoPagamento)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDateTime(pagamento.dataPagamento)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(pagamento.emprestimo.status)}`}>
                            {pagamento.emprestimo.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => router.push(`/emprestimos/${pagamento.emprestimo.id}`)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Ver Empréstimo
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 