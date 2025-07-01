"use client";

import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Sistema de Empréstimos
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">
                    Olá, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                  </span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <SignInButton mode="modal">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Entrar
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {isSignedIn ? (
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Bem-vindo ao Sistema de Empréstimos
                </h2>
                <p className="text-gray-600 mb-8">
                  Gerencie seus empréstimos de forma simples e eficiente.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Clientes
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Gerencie seus clientes e informações pessoais.
                    </p>
                    <Link 
                      href="/clientes"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                    >
                      Ver Clientes
                    </Link>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Empréstimos
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Controle todos os empréstimos ativos e históricos.
                    </p>
                    <Link 
                      href="/emprestimos"
                      className="inline-block bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                    >
                      Ver Empréstimos
                    </Link>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Pagamentos
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Acompanhe todos os pagamentos realizados.
                    </p>
                    <Link 
                      href="/pagamentos"
                      className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700"
                    >
                      Ver Pagamentos
                    </Link>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Teste do Banco
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Teste a conexão com o banco de dados.
                    </p>
                    <Link 
                      href="/teste-db"
                      className="inline-block bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700"
                    >
                      Testar Banco
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Sistema de Gerenciamento de Empréstimos
                </h2>
                <p className="text-gray-600 mb-8">
                  Faça login para acessar o sistema e gerenciar seus empréstimos.
                </p>
                
                <div className="space-y-4">
                  <SignInButton mode="modal">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium">
                      Fazer Login
                    </button>
                  </SignInButton>
                  
                  <div className="text-sm text-gray-500">
                    <p>Não tem uma conta? </p>
                    <Link 
                      href="/sign-up"
                      className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Cadastre-se aqui
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
