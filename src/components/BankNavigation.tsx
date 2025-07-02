'use client';

import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  CreditCard, 
  DollarSign, 
  PiggyBank, 
  BarChart3,
  Home,
  Menu
} from "lucide-react";

const navigationItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
    description: "Visão geral do sistema"
  },
  {
    name: "Clientes",
    href: "/clientes",
    icon: Users,
    description: "Gestão de clientes"
  },
  {
    name: "Empréstimos",
    href: "/emprestimos",
    icon: CreditCard,
    description: "Controle de empréstimos"
  },
  {
    name: "Pagamentos",
    href: "/pagamentos",
    icon: DollarSign,
    description: "Histórico de pagamentos"
  },
  {
    name: "Caixa",
    href: "/caixa",
    icon: PiggyBank,
    description: "Controle financeiro"
  },
  {
    name: "Relatórios",
    href: "/relatorios",
    icon: BarChart3,
    description: "Análises e relatórios"
  }
];

export default function BankNavigation() {
  const { isSignedIn, user } = useUser();
  const pathname = usePathname();

  if (!isSignedIn) {
    return (
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Sistema de Empréstimos
                </h1>
                <p className="text-sm text-muted-foreground">
                  Controle Financeiro Profissional
                </p>
              </div>
            </div>
            <SignInButton mode="modal">
              <Button size="lg" className="font-semibold">
                Acessar Sistema
              </Button>
            </SignInButton>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Building2 className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Sistema de Empréstimos
                </h1>
                <p className="text-sm text-muted-foreground">
                  Controle Financeiro Profissional
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Badge variant="secondary" className="font-medium">
                  {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                </Badge>
              </div>
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-8 w-8"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors hover:text-primary ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
} 