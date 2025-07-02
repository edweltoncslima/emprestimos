'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';
import BankNavigation from '@/components/BankNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Plus, 
  CreditCard, 
  User,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import NovoPagamentoModal from '@/components/NovoPagamentoModal';

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
  observacoes?: string;
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'ATIVO':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Ativo</Badge>;
      case 'QUITADO':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Quitado</Badge>;
      case 'EM_ATRASO':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Em Atraso</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'PAGO':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'PENDENTE':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'EM_ATRASO':
        return <AlertCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const calcularValorPago = () => {
    if (!emprestimo) return 0;
    return emprestimo.pagamentos.reduce((total, pagamento) => total + Number(pagamento.valorPago), 0);
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
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
          <BankNavigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 bg-muted rounded"></div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-32 bg-muted rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </ProtectedRoute>
    );
  }

  if (error || !emprestimo) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
          <BankNavigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <p className="text-red-700 dark:text-red-300">
                  {error || 'Empréstimo não encontrado'}
                </p>
              </CardContent>
            </Card>
          </main>
        </div>
      </ProtectedRoute>
    );
  }

  const valorPago = calcularValorPago();
  const valorRestante = calcularValorRestante();
  const progresso = calcularProgresso();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <BankNavigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.back()}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Detalhes do Empréstimo</h1>
                <p className="text-muted-foreground mt-2">
                  Empréstimo de {emprestimo.cliente.nome}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={() => router.push(`/emprestimos/${emprestimoId}/editar`)}
              >
                <Edit className="h-4 w-4 mr-2" />
                Editar
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowNovoPagamento(true)}
                className="bg-green-600 text-white hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Pagamento
              </Button>
              <Button
                variant="outline"
                onClick={handleDelete}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Deletar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações Principais */}
            <div className="lg:col-span-2 space-y-6">
              {/* Resumo do Empréstimo */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Resumo do Empréstimo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor Principal</p>
                      <p className="text-lg font-semibold text-foreground">
                        {formatCurrency(emprestimo.valor)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor Total</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {formatCurrency(emprestimo.valorTotal)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor Pago</p>
                      <p className="text-lg font-semibold text-green-600">
                        {formatCurrency(valorPago)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor Restante</p>
                      <p className="text-lg font-semibold text-orange-600">
                        {formatCurrency(valorRestante)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progresso do Pagamento</span>
                      <span className="font-medium">{progresso.toFixed(1)}%</span>
                    </div>
                    <Progress value={progresso} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Taxa de Juros</p>
                      <p className="font-medium">{emprestimo.taxaJuros}%</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Número de Parcelas</p>
                      <p className="font-medium">{emprestimo.numeroParcelas}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor da Parcela</p>
                      <p className="font-medium">{formatCurrency(emprestimo.valorParcela)}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Status</p>
                      <div>{getStatusBadge(emprestimo.status)}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informações do Cliente */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Informações do Cliente</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Nome</p>
                      <p className="font-medium">{emprestimo.cliente.nome}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{emprestimo.cliente.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-medium">{emprestimo.cliente.telefone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data do Empréstimo</p>
                      <p className="font-medium">{formatDate(emprestimo.dataEmprestimo)}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cronograma de Pagamentos */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Cronograma de Pagamentos</span>
                  </CardTitle>
                  <CardDescription>
                    Parcelas diárias de {formatCurrency(emprestimo.valorParcela)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Parcela</TableHead>
                          <TableHead>Vencimento</TableHead>
                          <TableHead>Valor</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Pagamento</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Array.from({ length: emprestimo.numeroParcelas }, (_, index) => {
                          const parcela = index + 1;
                          const dataVencimento = new Date(emprestimo.dataEmprestimo);
                          dataVencimento.setDate(dataVencimento.getDate() + index);
                          
                          const pagamento = emprestimo.pagamentos.find(p => p.numeroParcela === parcela);
                          const status = pagamento ? 'PAGO' : 
                                       dataVencimento < new Date() ? 'EM_ATRASO' : 'PENDENTE';
                          
                          return (
                            <TableRow key={parcela}>
                              <TableCell className="font-medium">{parcela}</TableCell>
                              <TableCell>{formatDate(dataVencimento.toISOString())}</TableCell>
                              <TableCell>{formatCurrency(emprestimo.valorParcela)}</TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  {getStatusIcon(status)}
                                  <span className={status === 'PAGO' ? 'text-green-600' : 
                                                 status === 'EM_ATRASO' ? 'text-red-600' : 
                                                 'text-yellow-600'}>
                                    {status}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                {pagamento ? (
                                  <div className="text-sm">
                                    <div>{formatDate(pagamento.dataPagamento)}</div>
                                    <div className="text-muted-foreground">
                                      {pagamento.formaPagamento}
                                    </div>
                                  </div>
                                ) : (
                                  <span className="text-muted-foreground">-</span>
                                )}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Estatísticas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Estatísticas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Parcelas Pagas</span>
                      <span className="font-medium">{emprestimo.pagamentos.length}/{emprestimo.numeroParcelas}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Juros Totais</span>
                      <span className="font-medium text-green-600">
                        {formatCurrency(emprestimo.valorTotal - emprestimo.valor)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Juros Recebidos</span>
                      <span className="font-medium text-green-600">
                        {formatCurrency((emprestimo.valorTotal - emprestimo.valor) * (valorPago / emprestimo.valorTotal))}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Observações */}
              {emprestimo.observacoes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Observações</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {emprestimo.observacoes}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Modal de Novo Pagamento */}
          <NovoPagamentoModal
            isOpen={showNovoPagamento}
            onClose={() => setShowNovoPagamento(false)}
            emprestimoId={emprestimoId}
            valorRestante={valorRestante}
            onPagamentoCriado={handlePagamentoCriado}
          />
        </main>
      </div>
    </ProtectedRoute>
  );
} 