import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

// GET - Listar clientes do usuário logado
export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    // Buscar ou criar usuário no banco local
    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email: "usuario@exemplo.com", // Será atualizado quando tivermos mais dados do Clerk
        firstName: "Usuário",
        lastName: "Sistema",
      },
    });

    // Buscar clientes do usuário
    const clientes = await prisma.cliente.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(clientes);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// POST - Criar novo cliente
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const body = await request.json();
    const { nome, email, telefone, cpf, endereco, cidade, estado, cep, dataNascimento } = body;

    // Validações básicas
    if (!nome || !email || !cpf) {
      return NextResponse.json(
        { error: "Nome, email e CPF são obrigatórios" },
        { status: 400 }
      );
    }

    // Verificar se CPF já existe
    const clienteExistente = await prisma.cliente.findUnique({
      where: { cpf },
    });

    if (clienteExistente) {
      return NextResponse.json(
        { error: "CPF já cadastrado" },
        { status: 400 }
      );
    }

    // Buscar ou criar usuário no banco local
    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email: "usuario@exemplo.com", // Será atualizado quando tivermos mais dados do Clerk
        firstName: "Usuário",
        lastName: "Sistema",
      },
    });

    // Criar cliente
    const cliente = await prisma.cliente.create({
      data: {
        nome,
        email,
        telefone,
        cpf,
        endereco,
        cidade,
        estado,
        cep,
        dataNascimento: dataNascimento ? new Date(dataNascimento) : null,
        userId: user.id,
      },
    });

    return NextResponse.json(cliente, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar cliente:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
} 