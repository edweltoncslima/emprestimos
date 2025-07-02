'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import ProtectedRoute from '@/components/ProtectedRoute';
import BankNavigation from '@/components/BankNavigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Save, 
  Calculator, 
  CreditCard, 
  Users,
  DollarSign,
  Calendar,
  TrendingUp
} from 'lucide-react';

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
  const [error, setError] = useState('');

  // Form state
  const [clienteId, setClienteId] = useState('');
  const [valor, setValor] = useState('');
  const [numeroParcelas, setNumeroParcelas] = useState('20');
  const [observacoes, setObservacoes] = useState('');

  // Calculated values
  const [valorTotal, setValorTotal] = useState(0);
  const [valorParcela, setValorParcela] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(20);

  useEffect(() => {
    fetchClientes();
  }, []);

  useEffect(() => {
    if (valor && numeroParcelas) {
      const valorNum = parseFloat(valor);
      const parcelasNum = parseInt(numeroParcelas);
      
      if (!isNaN(valorNum) && !isNaN(parcelasNum)) {
        const total = valorNum * (1 + taxaJuros / 100);
        const parcela = total / parcelasNum;
        
        setValorTotal(total);
        setValorParcela(parcela);
      }
    }
  }, [valor, numeroParcelas, taxaJuros]);

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
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!clienteId || !valor || !numeroParcelas) {
      setError('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/emprestimos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clienteId,
          valor: parseFloat(valor),
          valorTotal,
          valorParcela,
          taxaJuros,
          numeroParcelas: parseInt(numeroParcelas),
          observacoes,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao criar empréstimo');
      }

      const data = await response.json();
      router.push(`/emprestimos/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar empréstimo');
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
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-16 bg-muted rounded"></div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[...Array(2)].map((_, i) => (
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

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <BankNavigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
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
              <h1 className="text-3xl font-bold text-foreground">Novo Empréstimo</h1>
              <p className="text-muted-foreground mt-2">
                Crie um novo empréstimo com cobrança diária
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Dados do Empréstimo</span>
                  </CardTitle>
                  <CardDescription>
                    Preencha as informações do empréstimo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Cliente */}
                    <div className="space-y-2">
                      <Label htmlFor="cliente">Cliente *</Label>
                      <Select value={clienteId} onValueChange={setClienteId}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um cliente" />
                        </SelectTrigger>
                        <SelectContent>
                          {clientes.map((cliente) => (
                            <SelectItem key={cliente.id} value={cliente.id}>
                              <div className="flex flex-col">
                                <span className="font-medium">{cliente.nome}</span>
                                <span className="text-sm text-muted-foreground">
                                  {cliente.email}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Valor */}
                    <div className="space-y-2">
                      <Label htmlFor="valor">Valor do Empréstimo (R$) *</Label>
                      <Input
                        id="valor"
                        type="number"
                        step="0.01"
                        min="0"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                        placeholder="0,00"
                        className="text-lg font-medium"
                      />
                    </div>

                    {/* Número de Parcelas */}
                    <div className="space-y-2">
                      <Label htmlFor="parcelas">Número de Parcelas *</Label>
                      <Select value={numeroParcelas} onValueChange={setNumeroParcelas}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o número de parcelas" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="20">20 dias (diário)</SelectItem>
                          <SelectItem value="24">24 dias (diário)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Taxa de Juros (Fixed) */}
                    <div className="space-y-2">
                      <Label>Taxa de Juros</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          value={`${taxaJuros}%`}
                          disabled
                          className="bg-muted"
                        />
                        <Badge variant="secondary" className="text-xs">
                          Taxa Fixa
                        </Badge>
                      </div>
                    </div>

                    {/* Observações */}
                    <div className="space-y-2">
                      <Label htmlFor="observacoes">Observações</Label>
                      <Textarea
                        id="observacoes"
                        value={observacoes}
                        onChange={(e) => setObservacoes(e.target.value)}
                        placeholder="Observações sobre o empréstimo..."
                        rows={3}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-4 pt-6">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                        disabled={loading}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit" disabled={loading} className="font-medium">
                        {loading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Criando...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Criar Empréstimo
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div className="space-y-6">
              {/* Calculation Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5" />
                    <span>Resumo do Empréstimo</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor Principal</p>
                      <p className="text-lg font-semibold text-foreground">
                        {valor ? formatCurrency(parseFloat(valor)) : 'R$ 0,00'}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Taxa de Juros</p>
                      <p className="text-lg font-semibold text-green-600">
                        {taxaJuros}%
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor Total</p>
                      <p className="text-lg font-semibold text-blue-600">
                        {formatCurrency(valorTotal)}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Valor da Parcela</p>
                      <p className="text-lg font-semibold text-orange-600">
                        {formatCurrency(valorParcela)}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Número de Parcelas</span>
                        <span className="font-medium">{numeroParcelas} dias</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Juros Totais</span>
                        <span className="font-medium text-green-600">
                          {valor ? formatCurrency(valorTotal - parseFloat(valor)) : 'R$ 0,00'}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Características</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Cobrança Diária</p>
                      <p className="text-xs text-muted-foreground">
                        Parcelas pagas diariamente
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Taxa Fixa</p>
                      <p className="text-xs text-muted-foreground">
                        20% de juros sobre o valor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Controle Completo</p>
                      <p className="text-xs text-muted-foreground">
                        Acompanhamento de pagamentos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
} 