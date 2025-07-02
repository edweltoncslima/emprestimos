"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import BankNavigation from "@/components/BankNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  CreditCard, 
  DollarSign, 
  PiggyBank, 
  BarChart3,
  TrendingUp,
  Shield,
  Clock,
  Target
} from "lucide-react";

export default function Home() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <BankNavigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Sistema de Empréstimos
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Controle financeiro profissional com cobrança diária e análise de lucros
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Empréstimos Diários</CardTitle>
                  <CardDescription>
                    Cobrança em 20 ou 24 dias com taxa fixa de 20%
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <PiggyBank className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Controle de Caixa</CardTitle>
                  <CardDescription>
                    Gestão completa do saldo e movimentações
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>Análise de Lucros</CardTitle>
                  <CardDescription>
                    Acompanhe sua margem de lucro em tempo real
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-card border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Faça login para começar</h2>
              <p className="text-muted-foreground mb-6">
                Acesse o sistema e gerencie seus empréstimos de forma profissional
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <BankNavigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bem-vindo ao Sistema de Empréstimos
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus empréstimos com cobrança diária e controle financeiro profissional
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
                Saldo Atual
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                R$ 40.360,00
              </div>
              <p className="text-xs text-green-600 dark:text-green-400">
                +R$ 360,00 este mês
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Empréstimos Ativos
              </CardTitle>
              <CreditCard className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                3
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400">
                R$ 10.000,00 total
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-orange-700 dark:text-orange-300">
                Margem de Lucro
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-700 dark:text-orange-300">
                R$ 360,00
              </div>
              <p className="text-xs text-orange-600 dark:text-orange-400">
                +18% este mês
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50 dark:border-purple-800 dark:bg-purple-950/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Clientes Ativos
              </CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                3
              </div>
              <p className="text-xs text-purple-600 dark:text-purple-400">
                +1 este mês
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/clientes">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle>Gestão de Clientes</CardTitle>
                </div>
                <CardDescription>
                  Cadastre e gerencie seus clientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    3 clientes cadastrados
                  </span>
                  <Button variant="outline" size="sm">
                    Ver Clientes
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/emprestimos">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <CardTitle>Controle de Empréstimos</CardTitle>
                </div>
                <CardDescription>
                  Gerencie empréstimos com cobrança diária
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    3 empréstimos ativos
                  </span>
                  <Button variant="outline" size="sm">
                    Ver Empréstimos
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/caixa">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <PiggyBank className="h-6 w-6 text-primary" />
                  <CardTitle>Controle de Caixa</CardTitle>
                </div>
                <CardDescription>
                  Acompanhe saldo e movimentações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Saldo: R$ 40.360,00
                  </span>
                  <Button variant="outline" size="sm">
                    Ver Caixa
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/pagamentos">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <CardTitle>Histórico de Pagamentos</CardTitle>
                </div>
                <CardDescription>
                  Visualize todos os pagamentos realizados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    3 pagamentos este mês
                  </span>
                  <Button variant="outline" size="sm">
                    Ver Pagamentos
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/relatorios">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <CardTitle>Relatórios e Análises</CardTitle>
                </div>
                <CardDescription>
                  Análises detalhadas e relatórios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Relatórios disponíveis
                  </span>
                  <Button variant="outline" size="sm">
                    Ver Relatórios
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/emprestimos/novo">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <CardTitle>Novo Empréstimo</CardTitle>
                </div>
                <CardDescription>
                  Crie um novo empréstimo rapidamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Cobrança diária
                  </span>
                  <Button size="sm">
                    Criar Empréstimo
                  </Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Características do Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Cobrança Diária</h3>
                <p className="text-sm text-muted-foreground">20 ou 24 dias</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <Target className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Taxa Fixa</h3>
                <p className="text-sm text-muted-foreground">20% de juros</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Controle Total</h3>
                <p className="text-sm text-muted-foreground">Gestão completa</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-card rounded-lg border">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Análise de Lucros</h3>
                <p className="text-sm text-muted-foreground">Margem em tempo real</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
