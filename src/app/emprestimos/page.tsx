'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';
import BankNavigation from '@/components/BankNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  Eye, 
  Edit, 
  Trash2, 
  CreditCard, 
  TrendingUp,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react';

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

  const calcularProgresso = (emprestimo: Emprestimo) => {
    return (calcularValorPago(emprestimo) / emprestimo.valorTotal) * 100;
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
          <BankNavigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-muted rounded w-1/4"></div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-8 bg-muted rounded w-1/2"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </ProtectedRoute>
    );
  }

  const emprestimosAtivos = emprestimos.filter(emp => emp.status === 'ATIVO');
  const emprestimosQuitados = emprestimos.filter(emp => emp.status === 'QUITADO');
  const totalEmprestado = emprestimos.reduce((total, emp) => total + emp.valor, 0);
  const totalRecebido = emprestimos.reduce((total, emp) => total + calcularValorPago(emp), 0);
  const margemLucro = emprestimos.reduce((total, emp) => {
    const valorPago = calcularValorPago(emp);
    const proporcaoPaga = valorPago / emp.valorTotal;
    return total + (emp.valorTotal - emp.valor) * proporcaoPaga;
  }, 0);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <BankNavigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Empréstimos</h1>
              <p className="text-muted-foreground mt-2">
                Gerencie todos os empréstimos do sistema
              </p>
            </div>
            <Button onClick={() => router.push('/emprestimos/novo')} className="font-medium">
              <Plus className="h-4 w-4 mr-2" />
              Novo Empréstimo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
                  Total de Empréstimos
                </CardTitle>
                <CreditCard className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {emprestimos.length}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Empréstimos Ativos
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {emprestimosAtivos.length}
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  Empréstimos Quitados
                </CardTitle>
                <Users className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                  {emprestimosQuitados.length}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">
                  Valor Total Emprestado
                </CardTitle>
                <DollarSign className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                  {formatCurrency(totalEmprestado)}
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Margem de Lucro
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  {formatCurrency(margemLucro)}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Error Message */}
          {error && (
            <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20 mb-6">
              <CardContent className="pt-6">
                <p className="text-red-700 dark:text-red-300">{error}</p>
              </CardContent>
            </Card>
          )}

          {/* Empréstimos List */}
          <Card>
            <CardHeader>
              <CardTitle>Lista de Empréstimos</CardTitle>
              <CardDescription>
                Todos os empréstimos cadastrados no sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              {emprestimos.length === 0 ? (
                <div className="text-center py-12">
                  <CreditCard className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">Nenhum empréstimo encontrado</h3>
                  <p className="text-muted-foreground mb-4">Comece criando seu primeiro empréstimo.</p>
                  <Button onClick={() => router.push('/emprestimos/novo')}>
                    <Plus className="h-4 w-4 mr-2" />
                    Criar Empréstimo
                  </Button>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Valor Total</TableHead>
                        <TableHead>Progresso</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead className="text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {emprestimos.map((emprestimo) => {
                        const valorPago = calcularValorPago(emprestimo);
                        const valorRestante = calcularValorRestante(emprestimo);
                        const progresso = calcularProgresso(emprestimo);
                        
                        return (
                          <TableRow key={emprestimo.id} className="hover:bg-muted/50">
                            <TableCell>
                              <div>
                                <div className="font-medium text-foreground">
                                  {emprestimo.cliente.nome}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {emprestimo.cliente.email}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">
                              {formatCurrency(emprestimo.valor)}
                            </TableCell>
                            <TableCell className="font-medium">
                              {formatCurrency(emprestimo.valorTotal)}
                            </TableCell>
                            <TableCell>
                              <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    {formatCurrency(valorPago)} / {formatCurrency(valorRestante)}
                                  </span>
                                  <span className="font-medium">
                                    {progresso.toFixed(1)}%
                                  </span>
                                </div>
                                <Progress value={progresso} className="h-2" />
                              </div>
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(emprestimo.status)}
                            </TableCell>
                            <TableCell className="text-muted-foreground">
                              {formatDate(emprestimo.dataEmprestimo)}
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end space-x-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => router.push(`/emprestimos/${emprestimo.id}`)}
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => router.push(`/emprestimos/${emprestimo.id}/editar`)}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleDelete(emprestimo.id)}
                                  className="text-red-600 hover:text-red-700"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </ProtectedRoute>
  );
} 