import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    console.log('=== TESTE EMPRÉSTIMO ===');
    
    const { userId } = await auth();
    console.log('userId:', userId);
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    console.log('body:', body);
    
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

    console.log('Dados recebidos:', { clienteId, valor, taxaJuros, prazoMeses });

    // Verificar se o cliente existe
    const cliente = await prisma.cliente.findUnique({
      where: { id: clienteId }
    });
    console.log('Cliente encontrado:', cliente);

    if (!cliente) {
      return NextResponse.json(
        { error: 'Cliente não encontrado' },
        { status: 404 }
      );
    }

    // Buscar usuário local
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    console.log('Usuário encontrado:', user);
    
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Calcular valor total com juros
    const valorTotal = valor * Math.pow(1 + taxaJuros / 100, prazoMeses);
    const valorParcela = valorTotal / prazoMeses;
    
    // Calcular data de vencimento
    const dataVencimento = new Date(dataEmprestimo ? new Date(dataEmprestimo) : new Date());
    dataVencimento.setMonth(dataVencimento.getMonth() + prazoMeses);

    console.log('Valores calculados:', { valorTotal, valorParcela, dataVencimento });

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

    console.log('Empréstimo criado com sucesso:', emprestimo);

    return NextResponse.json(emprestimo, { status: 201 });
  } catch (error) {
    console.error('=== ERRO DETALHADO ===');
    console.error('Erro ao criar empréstimo:', error);
    console.error('Stack trace:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { error: 'Erro interno do servidor', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 