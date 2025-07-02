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

    // Calcular valor total com juros (20% para 20 ou 24 vezes)
    const taxaJurosDiaria = 0.20 / prazoMeses; // 20% dividido pelo número de parcelas
    const valorTotal = valor * (1 + 0.20); // 20% de juros total
    const valorParcela = valorTotal / prazoMeses;
    
    // Calcular data de vencimento (prazoMeses dias após a data do empréstimo)
    const dataVencimento = new Date(dataEmprestimo ? new Date(dataEmprestimo) : new Date());
    dataVencimento.setDate(dataVencimento.getDate() + prazoMeses);

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

    // Criar movimentação de saída no caixa
    await prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'SAIDA',
        valor,
        descricao: `Empréstimo para ${emprestimo.cliente.nome}`,
        emprestimoId: emprestimo.id
      }
    });

    // Atualizar saldo do caixa
    const caixa = await prisma.caixa.findFirst({
      where: { userId: user.id }
    });

    if (caixa) {
      await prisma.caixa.update({
        where: { id: caixa.id },
        data: {
          saldoAtual: Number(caixa.saldoAtual) - valor
        }
      });
    }

    return NextResponse.json(emprestimo, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar empréstimo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 