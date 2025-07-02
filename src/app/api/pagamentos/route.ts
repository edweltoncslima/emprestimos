import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

// GET - Listar todos os pagamentos
export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const pagamentos = await prisma.pagamento.findMany({
      include: {
        emprestimo: {
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
        }
      },
      orderBy: {
        dataPagamento: 'desc'
      }
    });

    return NextResponse.json(pagamentos);
  } catch (error) {
    console.error('Erro ao buscar pagamentos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar novo pagamento
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const {
      emprestimoId,
      valor,
      dataPagamento,
      metodoPagamento,
      observacoes
    } = body;

    // Validações
    if (!emprestimoId || !valor || !metodoPagamento) {
      return NextResponse.json(
        { error: 'Dados obrigatórios não fornecidos' },
        { status: 400 }
      );
    }

    // Verificar se o empréstimo existe
    const emprestimo = await prisma.emprestimo.findUnique({
      where: { id: emprestimoId },
      include: {
        pagamentos: true
      }
    });

    if (!emprestimo) {
      return NextResponse.json(
        { error: 'Empréstimo não encontrado' },
        { status: 404 }
      );
    }

    // Verificar se o empréstimo está ativo
    if (emprestimo.status !== 'ATIVO') {
      return NextResponse.json(
        { error: 'Não é possível adicionar pagamentos a um empréstimo inativo' },
        { status: 400 }
      );
    }

    // Buscar usuário local
    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 });
    }

    // Calcular valor total já pago
    const valorTotalPago = emprestimo.pagamentos.reduce(
      (total, pagamento) => total + Number(pagamento.valorPago),
      0
    );

    // Verificar se o pagamento não excede o valor total do empréstimo
    if (valorTotalPago + valor > Number(emprestimo.valorTotal)) {
      return NextResponse.json(
        { error: 'Valor do pagamento excede o valor total do empréstimo' },
        { status: 400 }
      );
    }

    // Calcular número da parcela
    const numeroParcela = emprestimo.pagamentos.length + 1;
    
    // Calcular data de vencimento da parcela (cobrança diária)
    const dataVencimento = new Date(emprestimo.dataEmprestimo);
    dataVencimento.setDate(dataVencimento.getDate() + numeroParcela);

    const pagamento = await prisma.pagamento.create({
      data: {
        emprestimoId,
        userId: user.id,
        numeroParcela,
        valorParcela: emprestimo.valorParcela,
        valorPago: valor,
        dataVencimento,
        dataPagamento: dataPagamento ? new Date(dataPagamento) : new Date(),
        status: 'PAGO',
        formaPagamento: metodoPagamento,
        observacoes
      },
      include: {
        emprestimo: {
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
        }
      }
    });

    // Verificar se o empréstimo foi quitado
    const novoValorTotalPago = valorTotalPago + valor;
    if (novoValorTotalPago >= Number(emprestimo.valorTotal)) {
      await prisma.emprestimo.update({
        where: { id: emprestimoId },
        data: { status: 'QUITADO' }
      });
    }

    // Criar movimentação de entrada no caixa
    await prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'ENTRADA',
        valor,
        descricao: `Pagamento parcela ${numeroParcela} - ${pagamento.emprestimo.cliente.nome}`,
        emprestimoId: emprestimoId
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
          saldoAtual: Number(caixa.saldoAtual) + valor
        }
      });
    }

    return NextResponse.json(pagamento, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 