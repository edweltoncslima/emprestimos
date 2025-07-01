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

interface Pagamento {
  id: string;
  numeroParcela: number;
  valorParcela: number;
  valorPago: number;
  dataVencimento: string;
  dataPagamento: string;
  status: string;
  formaPagamento: string;
}

interface Emprestimo {
  id: string;
  valor: number;
  valorTotal: number;
  valorParcela: number;
  taxaJuros: number;
  numeroParcelas: number;
  dataEmprestimo: string;
  dataVencimento: string;
  status: 'ATIVO' | 'QUITADO' | 'EM_ATRASO' | 'CANCELADO';
  observacoes?: string;
  cliente: Cliente;
  pagamentos: Pagamento[];
}

export default function EmprestimosPage() {
  const { user } = useUser();
  const router = useRouter();
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchEmprestimos();
  }, []);

  const fetchEmprestimos = async () => {
    try {
      const response = await fetch('/api/emprestimos');
      if (!response.ok) {
        throw new Error('Erro ao buscar empréstimos');
      }
      const data = await response.json();
      setEmprestimos(data);
    } catch (err) {
      setError('Erro ao carregar empréstimos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja deletar este empréstimo?')) {
      return;
    }

    try {
      const response = await fetch(`/api/emprestimos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao deletar empréstimo');
      }

      setEmprestimos(emprestimos.filter(emp => emp.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao deletar empréstimo');
    }
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const calcularValorPago = (emprestimo: Emprestimo) => {
    return emprestimo.pagamentos.reduce((total, pagamento) => total + Number(pagamento.valorPago), 0);
  };

  const calcularValorRestante = (emprestimo: Emprestimo) => {
    return emprestimo.valorTotal - calcularValorPago(emprestimo);
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
              <h1 className="text-3xl font-bold text-gray-900">Empréstimos</h1>
              <p className="text-gray-600 mt-2">
                Gerencie todos os empréstimos do sistema
              </p>
            </div>
            <button
              onClick={() => router.push('/emprestimos/novo')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Novo Empréstimo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Total de Empréstimos</h3>
              <p className="text-2xl font-bold text-gray-900">{emprestimos.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Empréstimos Ativos</h3>
              <p className="text-2xl font-bold text-green-600">
                {emprestimos.filter(emp => emp.status === 'ATIVO').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Empréstimos Quitados</h3>
              <p className="text-2xl font-bold text-blue-600">
                {emprestimos.filter(emp => emp.status === 'QUITADO').length}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-sm font-medium text-gray-500">Valor Total Emprestado</h3>
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(emprestimos.reduce((total, emp) => total + emp.valor, 0))}
              </p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Empréstimos List */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {emprestimos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum empréstimo encontrado</h3>
                <p className="text-gray-500 mb-4">Comece criando seu primeiro empréstimo.</p>
                <button
                  onClick={() => router.push('/emprestimos/novo')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                >
                  Criar Empréstimo
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
                        Valor Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pago/Restante
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ações
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {emprestimos.map((emprestimo) => {
                      const valorPago = calcularValorPago(emprestimo);
                      const valorRestante = calcularValorRestante(emprestimo);
                      
                      return (
                        <tr key={emprestimo.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {emprestimo.cliente.nome}
                              </div>
                              <div className="text-sm text-gray-500">
                                {emprestimo.cliente.email}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(emprestimo.valor)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(emprestimo.valorTotal)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {formatCurrency(valorPago)} / {formatCurrency(valorRestante)}
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${(valorPago / emprestimo.valorTotal) * 100}%`
                                }}
                              ></div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(emprestimo.status)}`}>
                              {emprestimo.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDate(emprestimo.dataEmprestimo)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => router.push(`/emprestimos/${emprestimo.id}`)}
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Ver
                              </button>
                              <button
                                onClick={() => router.push(`/emprestimos/${emprestimo.id}/editar`)}
                                className="text-indigo-600 hover:text-indigo-900"
                              >
                                Editar
                              </button>
                              <button
                                onClick={() => handleDelete(emprestimo.id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Deletar
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
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