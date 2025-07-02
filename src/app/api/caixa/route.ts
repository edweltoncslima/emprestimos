import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

// GET - Obter informações do caixa
export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    // Buscar usuário local
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Buscar caixa do usuário
    const caixa = await prisma.caixa.findFirst({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' }
    });

    // Buscar movimentações
    const movimentacoes = await prisma.movimentacaoCaixa.findMany({
      where: { userId: user.id },
      include: {
        emprestimo: {
          include: {
            cliente: {
              select: {
                nome: true
              }
            }
          }
        }
      },
      orderBy: { dataMovimentacao: 'desc' },
      take: 50 // Últimas 50 movimentações
    });

    // Calcular estatísticas
    const emprestimos = await prisma.emprestimo.findMany({
      where: { userId: user.id },
      include: {
        pagamentos: true,
        cliente: {
          select: {
            nome: true
          }
        }
      }
    });

    const totalEmprestado = emprestimos.reduce((sum, emp) => sum + Number(emp.valor), 0);
    const totalRecebido = emprestimos.reduce((sum, emp) => {
      return sum + emp.pagamentos.reduce((pagSum, pag) => pagSum + Number(pag.valorPago), 0);
    }, 0);
    const totalJuros = emprestimos.reduce((sum, emp) => sum + (Number(emp.valorTotal) - Number(emp.valor)), 0);
    const jurosRecebidos = emprestimos.reduce((sum, emp) => {
      const valorPago = emp.pagamentos.reduce((pagSum, pag) => pagSum + Number(pag.valorPago), 0);
      const proporcaoPaga = valorPago / Number(emp.valorTotal);
      return sum + (Number(emp.valorTotal) - Number(emp.valor)) * proporcaoPaga;
    }, 0);

    return NextResponse.json({
      caixa,
      movimentacoes,
      estatisticas: {
        totalEmprestado,
        totalRecebido,
        totalJuros,
        jurosRecebidos,
        margemLucro: jurosRecebidos,
        saldoAtual: caixa ? Number(caixa.saldoAtual) : 0
      }
    });
  } catch (error) {
    console.error('Erro ao buscar informações do caixa:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Configurar saldo inicial do caixa
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const { saldoInicial, observacoes } = body;

    if (!saldoInicial || saldoInicial <= 0) {
      return NextResponse.json(
        { error: 'Saldo inicial deve ser maior que zero' },
        { status: 400 }
      );
    }

    // Buscar usuário local
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Verificar se já existe um caixa
    const caixaExistente = await prisma.caixa.findFirst({
      where: { userId: user.id }
    });

    if (caixaExistente) {
      return NextResponse.json(
        { error: 'Caixa já foi configurado. Use PUT para atualizar.' },
        { status: 400 }
      );
    }

    // Criar novo caixa
    const caixa = await prisma.caixa.create({
      data: {
        userId: user.id,
        saldoInicial,
        saldoAtual: saldoInicial,
        observacoes
      }
    });

    // Criar movimentação inicial
    await prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'ENTRADA',
        valor: saldoInicial,
        descricao: 'Saldo inicial do caixa'
      }
    });

    return NextResponse.json(caixa, { status: 201 });
  } catch (error) {
    console.error('Erro ao configurar caixa:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar saldo do caixa
export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const { saldoInicial, observacoes } = body;

    if (!saldoInicial || saldoInicial <= 0) {
      return NextResponse.json(
        { error: 'Saldo inicial deve ser maior que zero' },
        { status: 400 }
      );
    }

    // Buscar usuário local
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Buscar caixa existente
    const caixa = await prisma.caixa.findFirst({
      where: { userId: user.id }
    });

    if (!caixa) {
      return NextResponse.json(
        { error: 'Caixa não encontrado. Use POST para criar.' },
        { status: 404 }
      );
    }

    // Calcular diferença
    const diferenca = saldoInicial - Number(caixa.saldoInicial);

    // Atualizar caixa
    const caixaAtualizado = await prisma.caixa.update({
      where: { id: caixa.id },
      data: {
        saldoInicial,
        saldoAtual: Number(caixa.saldoAtual) + diferenca,
        observacoes
      }
    });

    // Criar movimentação se houver diferença
    if (diferenca !== 0) {
      await prisma.movimentacaoCaixa.create({
        data: {
          userId: user.id,
          tipo: diferenca > 0 ? 'ENTRADA' : 'SAIDA',
          valor: Math.abs(diferenca),
          descricao: diferenca > 0 ? 'Ajuste de saldo inicial (entrada)' : 'Ajuste de saldo inicial (saída)'
        }
      });
    }

    return NextResponse.json(caixaAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar caixa:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 