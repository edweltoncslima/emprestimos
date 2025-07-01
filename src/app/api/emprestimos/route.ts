import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

// GET - Listar todos os empréstimos
export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const emprestimos = await prisma.emprestimo.findMany({
      include: {
        cliente: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          }
        },
        pagamentos: {
          orderBy: {
            dataPagamento: 'desc'
          }
        }
      },
      orderBy: {
        dataEmprestimo: 'desc'
      }
    });

    return NextResponse.json(emprestimos);
  } catch (error) {
    console.error('Erro ao buscar empréstimos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar novo empréstimo
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const {
      clienteId,
      valor,
      taxaJuros,
      prazoMeses,
      dataEmprestimo,
      observacoes
    } = body;

    // Validações
    if (!clienteId || !valor || !taxaJuros || !prazoMeses) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      );
    }

    // Verificar se o cliente existe
    const cliente = await prisma.cliente.findUnique({
      where: { id: clienteId }
    });

    if (!cliente) {
      return NextResponse.json(
        { error: 'Cliente não encontrado' },
        { status: 404 }
      );
    }

    // Buscar usuário local
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Calcular valor total com juros
    const valorTotal = valor * Math.pow(1 + taxaJuros / 100, prazoMeses);
    const valorParcela = valorTotal / prazoMeses;
    
    // Calcular data de vencimento (prazoMeses meses após a data do empréstimo)
    const dataVencimento = new Date(dataEmprestimo ? new Date(dataEmprestimo) : new Date());
    dataVencimento.setMonth(dataVencimento.getMonth() + prazoMeses);

    const emprestimo = await prisma.emprestimo.create({
      data: {
        clienteId,
        userId: user.id,
        valor,
        valorTotal,
        valorParcela,
        taxaJuros,
        numeroParcelas: prazoMeses,
        dataEmprestimo: dataEmprestimo ? new Date(dataEmprestimo) : new Date(),
        dataVencimento,
        observacoes,
        status: 'ATIVO'
      },
      include: {
        cliente: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
          }
        }
      }
    });

    return NextResponse.json(emprestimo, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar empréstimo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 