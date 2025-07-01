'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';
import NovoPagamentoModal from '@/components/NovoPagamentoModal';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  endereco: string;
}

interface Pagamento {
  id: string;
  valor: number;
  dataPagamento: string;
  metodoPagamento: string;
  observacoes?: string;
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
  pagamentos: Pagamento[];
}

export default function DetalhesEmprestimoPage() {
  const { user } = useUser();
  const router = useRouter();
  const params = useParams();
  const emprestimoId = params.id as string;

  const [emprestimo, setEmprestimo] = useState<Emprestimo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showNovoPagamento, setShowNovoPagamento] = useState(false);

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
    } catch (err) {
      setError('Erro ao carregar empréstimo');
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

  const calcularValorPago = () => {
    if (!emprestimo) return 0;
    return emprestimo.pagamentos.reduce((total, pagamento) => total + pagamento.valor, 0);
  };

  const calcularValorRestante = () => {
    if (!emprestimo) return 0;
    return emprestimo.valorTotal - calcularValorPago();
  };

  const calcularProgresso = () => {
    if (!emprestimo) return 0;
    return (calcularValorPago() / emprestimo.valorTotal) * 100;
  };

  const handleDelete = async () => {
    if (!confirm('Tem certeza que deseja deletar este empréstimo?')) {
      return;
    }

    try {
      const response = await fetch(`/api/emprestimos/${emprestimoId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao deletar empréstimo');
      }

      router.push('/emprestimos');
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao deletar empréstimo');
    }
  };

  const handlePagamentoCriado = () => {
    fetchEmprestimo();
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

  if (error || !emprestimo) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error || 'Empréstimo não encontrado'}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  const valorPago = calcularValorPago();
  const valorRestante = calcularValorRestante();
  const progresso = calcularProgresso();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Modal de Novo Pagamento */}
          <NovoPagamentoModal
            isOpen={showNovoPagamento}
            onClose={() => setShowNovoPagamento(false)}
            emprestimoId={emprestimoId}
            valorRestante={valorRestante}
            onPagamentoCriado={handlePagamentoCriado}
          />
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
              <h1 className="text-3xl font-bold text-gray-900">Detalhes do Empréstimo</h1>
              <p className="text-gray-600 mt-2">
                Empréstimo de {emprestimo.cliente.nome}
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.push(`/emprestimos/${emprestimoId}/editar`)}
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
            {/* Informações do Empréstimo */}
            <div className="lg:col-span-2 space-y-6">
              {/* Card Principal */}
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Informações do Empréstimo</h2>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(emprestimo.status)}`}>
                    {emprestimo.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Valor Original</h3>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(emprestimo.valor)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Valor Total</h3>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(emprestimo.valorTotal)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Valor da Parcela</h3>
                    <p className="text-lg font-semibold text-gray-900">{formatCurrency(emprestimo.valorParcela)}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Taxa de Juros</h3>
                    <p className="text-lg font-semibold text-gray-900">{emprestimo.taxaJuros}% ao mês</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Prazo</h3>
                    <p className="text-lg font-semibold text-gray-900">{emprestimo.prazoMeses} meses</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Data do Empréstimo</h3>
                    <p className="text-lg font-semibold text-gray-900">{formatDate(emprestimo.dataEmprestimo)}</p>
                  </div>
                </div>

                {emprestimo.observacoes && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Observações</h3>
                    <p className="text-gray-900 bg-gray-50 p-3 rounded">{emprestimo.observacoes}</p>
                  </div>
                )}
              </div>

              {/* Progresso do Pagamento */}
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Progresso do Pagamento</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Valor Pago</span>
                    <span className="font-medium text-green-600">{formatCurrency(valorPago)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Valor Restante</span>
                    <span className="font-medium text-red-600">{formatCurrency(valorRestante)}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progresso}%` }}
                    ></div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500">
                    {progresso.toFixed(1)}% pago
                  </div>
                </div>
              </div>

              {/* Lista de Pagamentos */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">Pagamentos</h2>
                    {emprestimo.status === 'ATIVO' && (
                      <button
                        onClick={() => setShowNovoPagamento(true)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium"
                      >
                        Novo Pagamento
                      </button>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  {emprestimo.pagamentos.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-gray-400 mb-4">
                        <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum pagamento registrado</h3>
                      <p className="text-gray-500">Os pagamentos aparecerão aqui quando forem registrados.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {emprestimo.pagamentos.map((pagamento) => (
                        <div key={pagamento.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900">{formatCurrency(pagamento.valor)}</div>
                            <div className="text-sm text-gray-500">
                              {formatDateTime(pagamento.dataPagamento)} • {pagamento.metodoPagamento}
                            </div>
                            {pagamento.observacoes && (
                              <div className="text-sm text-gray-600 mt-1">{pagamento.observacoes}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Informações do Cliente */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Informações do Cliente</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Nome</h3>
                    <p className="text-gray-900 font-medium">{emprestimo.cliente.nome}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                    <p className="text-gray-900">{emprestimo.cliente.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Telefone</h3>
                    <p className="text-gray-900">{emprestimo.cliente.telefone}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">CPF</h3>
                    <p className="text-gray-900">{emprestimo.cliente.cpf}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Endereço</h3>
                    <p className="text-gray-900">{emprestimo.cliente.endereco}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => router.push(`/clientes/${emprestimo.cliente.id}`)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Ver Cliente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 