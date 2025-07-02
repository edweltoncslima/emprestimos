'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';
import BankNavigation from '@/components/BankNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { 
  PiggyBank, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Minus
} from 'lucide-react';

interface MovimentoCaixa {
  id: string;
  tipo: 'ENTRADA' | 'SAIDA';
  valor: number;
  descricao: string;
  data: string;
  categoria: string;
}

interface Caixa {
  saldo: number;
  movimentos: MovimentoCaixa[];
}

export default function CaixaPage() {
  const { user } = useUser();
  const [caixa, setCaixa] = useState<Caixa | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCaixa();
  }, []);

  const fetchCaixa = async () => {
    try {
      const response = await fetch('/api/caixa');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do caixa');
      }
      const data = await response.json();
      setCaixa(data);
    } catch (err) {
      setError('Erro ao carregar dados do caixa');
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

  const getTipoIcon = (tipo: string) => {
    return tipo === 'ENTRADA' ? (
      <ArrowUpRight className="h-4 w-4 text-green-600" />
    ) : (
      <ArrowDownRight className="h-4 w-4 text-red-600" />
    );
  };

  const getTipoBadge = (tipo: string) => {
    return tipo === 'ENTRADA' ? (
      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
        <Plus className="h-3 w-3 mr-1" />
        Entrada
      </Badge>
    ) : (
      <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
        <Minus className="h-3 w-3 mr-1" />
        Saída
      </Badge>
    );
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

  if (!caixa) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
          <BankNavigation />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <CardContent className="pt-6">
                <p className="text-red-700 dark:text-red-300">
                  {error || 'Erro ao carregar dados do caixa'}
                </p>
              </CardContent>
            </Card>
          </main>
        </div>
      </ProtectedRoute>
    );
  }

  const movimentos = caixa.movimentos || [];
  const entradas = movimentos.filter(m => m.tipo === 'ENTRADA');
  const saidas = movimentos.filter(m => m.tipo === 'SAIDA');
  const totalEntradas = entradas.reduce((sum, m) => sum + m.valor, 0);
  const totalSaidas = saidas.reduce((sum, m) => sum + m.valor, 0);
  const margemLucro = totalEntradas - totalSaidas;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <BankNavigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Controle de Caixa</h1>
            <p className="text-muted-foreground mt-2">
              Acompanhe o saldo e movimentações financeiras
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
                  Saldo Atual
                </CardTitle>
                <PiggyBank className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                  {formatCurrency(caixa.saldo)}
                </div>
                <p className="text-xs text-green-600 dark:text-green-400">
                  Saldo disponível
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Total de Entradas
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                  {formatCurrency(totalEntradas)}
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  {entradas.length} movimentações
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-red-700 dark:text-red-300">
                  Total de Saídas
                </CardTitle>
                <TrendingDown className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-700 dark:text-red-300">
                  {formatCurrency(totalSaidas)}
                </div>
                <p className="text-xs text-red-600 dark:text-red-400">
                  {saidas.length} movimentações
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-950/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  Margem de Lucro
                </CardTitle>
                <DollarSign className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                  {formatCurrency(margemLucro)}
                </div>
                <p className="text-xs text-emerald-600 dark:text-emerald-400">
                  {totalEntradas > 0 ? ((margemLucro / totalEntradas) * 100).toFixed(1) : '0'}% de margem
                </p>
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

          {/* Movimentações */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Movimentações</CardTitle>
              <CardDescription>
                Todas as entradas e saídas do caixa
              </CardDescription>
            </CardHeader>
            <CardContent>
              {movimentos.length === 0 ? (
                <div className="text-center py-12">
                  <PiggyBank className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">Nenhuma movimentação encontrada</h3>
                  <p className="text-muted-foreground">
                    As movimentações aparecerão aqui quando houver empréstimos ou pagamentos.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Descrição</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Categoria</TableHead>
                        <TableHead>Data</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {movimentos.map((movimento) => (
                        <TableRow key={movimento.id} className="hover:bg-muted/50">
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getTipoIcon(movimento.tipo)}
                              {getTipoBadge(movimento.tipo)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium text-foreground">
                              {movimento.descricao}
                            </div>
                          </TableCell>
                          <TableCell className="font-medium">
                            <span className={movimento.tipo === 'ENTRADA' ? 'text-green-600' : 'text-red-600'}>
                              {formatCurrency(movimento.valor)}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="text-xs">
                              {movimento.categoria}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {formatDate(movimento.data)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Resumo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Análise de Entradas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total de Entradas</span>
                    <span className="font-semibold text-green-600">
                      {formatCurrency(totalEntradas)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Número de Entradas</span>
                    <span className="font-semibold">{entradas.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Média por Entrada</span>
                    <span className="font-semibold">
                      {entradas.length > 0 ? formatCurrency(totalEntradas / entradas.length) : 'R$ 0,00'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingDown className="h-5 w-5" />
                  <span>Análise de Saídas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total de Saídas</span>
                    <span className="font-semibold text-red-600">
                      {formatCurrency(totalSaidas)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Número de Saídas</span>
                    <span className="font-semibold">{saidas.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Média por Saída</span>
                    <span className="font-semibold">
                      {saidas.length > 0 ? formatCurrency(totalSaidas / saidas.length) : 'R$ 0,00'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
} 