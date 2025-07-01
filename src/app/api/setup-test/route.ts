import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    // Criar usuário de teste
    const user = await prisma.user.upsert({
      where: { clerkId: "test-user" },
      update: {},
      create: {
        clerkId: "test-user",
        email: "teste@exemplo.com",
        firstName: "Usuário",
        lastName: "Teste",
      },
    });

    // Criar alguns clientes de teste
    const clientes = await Promise.all([
      prisma.cliente.upsert({
        where: { cpf: "123.456.789-00" },
        update: {},
        create: {
          nome: "João Silva",
          email: "joao@exemplo.com",
          telefone: "(11) 99999-9999",
          cpf: "123.456.789-00",
          endereco: "Rua das Flores, 123",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01234-567",
          userId: user.id,
        },
      }),
      prisma.cliente.upsert({
        where: { cpf: "987.654.321-00" },
        update: {},
        create: {
          nome: "Maria Santos",
          email: "maria@exemplo.com",
          telefone: "(11) 88888-8888",
          cpf: "987.654.321-00",
          endereco: "Av. Paulista, 1000",
          cidade: "São Paulo",
          estado: "SP",
          cep: "01310-100",
          userId: user.id,
        },
      }),
    ]);

    return NextResponse.json({
      message: "Dados de teste criados com sucesso",
      user,
      clientes,
    });
  } catch (error) {
    console.error("Erro ao criar dados de teste:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
} 