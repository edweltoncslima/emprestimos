'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';

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
}

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  cpf: string;
  endereco: string | null;
  cidade: string | null;
  estado: string | null;
  createdAt: string;
  emprestimos: Emprestimo[];
}

export default function DetalhesClientePage() {
  const { user } = useUser();
  const router = useRouter();
  const params = useParams();
  const clienteId = params.id as string;

  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (clienteId) {
      fetchCliente();
    }
  }, [clienteId]);

  const fetchCliente = async () => {
    try {
      const response = await fetch(`/api/clientes/${clienteId}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar cliente');
      }
      const data = await response.json();
      setCliente(data);
    } catch (err) {
      setError('Erro ao carregar cliente');
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

  const handleDelete = async () => {
    if (!confirm('Tem certeza que deseja deletar este cliente?')) {
      return;
    }

    try {
      const response = await fetch(`/api/clientes/${clienteId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao deletar cliente');
      }

      router.push('/clientes');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao deletar cliente');
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="space-y-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i}>
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded"></div>
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

  if (error || !cliente) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error || 'Cliente não encontrado'}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  const emprestimosAtivos = cliente.emprestimos.filter(emp => emp.status === 'ATIVO');
  const emprestimosQuitados = cliente.emprestimos.filter(emp => emp.status === 'QUITADO');
  const valorTotalEmprestado = cliente.emprestimos.reduce((total, emp) => total + emp.valor, 0);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <button
                onClick={() => router.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Detalhes do Cliente</h1>
              <p className="text-gray-600 mt-2">
                Informações completas de {cliente.nome}
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.push(`/clientes/${clienteId}/editar`)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Editar
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
              >
                Deletar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações do Cliente */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card Principal */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações Pessoais</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Nome Completo</h3>
                    <p className="text-lg font-semibold text-gray-900">{cliente.nome}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
                    <p className="text-lg font-semibold text-gray-900">{cliente.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Telefone</h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {cliente.telefone || 'Não informado'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">CPF</h3>
                    <p className="text-lg font-semibold text-gray-900">{cliente.cpf}</p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Endereço</h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {cliente.endereco || 'Não informado'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Cidade</h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {cliente.cidade || 'Não informado'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Estado</h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {cliente.estado || 'Não informado'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Cliente desde</h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {formatDate(cliente.createdAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Estatísticas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-500">Total de Empréstimos</h3>
                  <p className="text-2xl font-bold text-gray-900">{cliente.emprestimos.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-500">Empréstimos Ativos</h3>
                  <p className="text-2xl font-bold text-green-600">{emprestimosAtivos.length}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-sm font-medium text-gray-500">Valor Total Emprestado</h3>
                  <p className="text-2xl font-bold text-blue-600">{formatCurrency(valorTotalEmprestado)}</p>
                </div>
              </div>

              {/* Lista de Empréstimos */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Empréstimos</h2>
                    <button
                      onClick={() => router.push('/emprestimos/novo')}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Novo Empréstimo
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  {cliente.emprestimos.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 mb-4">
                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum empréstimo encontrado</h3>
                      <p className="text-gray-500 mb-4">Este cliente ainda não possui empréstimos registrados.</p>
                      <button
                        onClick={() => router.push('/emprestimos/novo')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                      >
                        Criar Primeiro Empréstimo
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cliente.emprestimos.map((emprestimo) => (
                        <div key={emprestimo.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">
                              {formatCurrency(emprestimo.valor)} • {emprestimo.prazoMeses} meses
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatDate(emprestimo.dataEmprestimo)} • {emprestimo.taxaJuros}% ao mês
                            </div>
                            {emprestimo.observacoes && (
                              <div className="text-sm text-gray-600 mt-1">{emprestimo.observacoes}</div>
                            )}
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(emprestimo.status)}`}>
                              {emprestimo.status}
                            </span>
                            <button
                              onClick={() => router.push(`/emprestimos/${emprestimo.id}`)}
                              className="text-blue-600 hover:text-blue-900 text-sm font-medium"
                            >
                              Ver Detalhes
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Ações Rápidas */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Ações Rápidas</h2>
                
                <div className="space-y-3">
                  <button
                    onClick={() => router.push('/emprestimos/novo')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                  >
                    Novo Empréstimo
                  </button>
                  
                  <button
                    onClick={() => router.push(`/clientes/${clienteId}/editar`)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors"
                  >
                    Editar Cliente
                  </button>
                  
                  <button
                    onClick={() => router.push('/clientes')}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors"
                  >
                    Voltar aos Clientes
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Resumo</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Empréstimos Ativos:</span>
                    <span className="font-medium text-green-600">{emprestimosAtivos.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Empréstimos Quitados:</span>
                    <span className="font-medium text-blue-600">{emprestimosQuitados.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valor Total:</span>
                    <span className="font-medium text-gray-900">{formatCurrency(valorTotalEmprestado)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 