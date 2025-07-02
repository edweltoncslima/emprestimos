import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';

// GET - Buscar empréstimo específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const { id } = await params;

    const emprestimo = await prisma.emprestimo.findUnique({
      where: { id },
      include: {
        cliente: {
          select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
            cpf: true,
            endereco: true,
          }
        },
        pagamentos: {
          orderBy: { numeroParcela: 'asc' }
        }
      }
    });

    if (!emprestimo) {
      return NextResponse.json(
        { error: 'Empréstimo não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(emprestimo);
  } catch (error) {
    console.error('Erro ao buscar empréstimo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar empréstimo
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const { id } = await params;
    const body = await request.json();

    // Verificar se o empréstimo existe
    const emprestimoExistente = await prisma.emprestimo.findUnique({
      where: { id }
    });

    if (!emprestimoExistente) {
      return NextResponse.json(
        { error: 'Empréstimo não encontrado' },
        { status: 404 }
      );
    }

    let valorTotal = emprestimoExistente.valorTotal;
    let valorParcela = emprestimoExistente.valorParcela;

    if (body.valor && body.taxaJuros && body.numeroParcelas) {
      const base = new Decimal(1).add(new Decimal(body.taxaJuros).div(100));
      valorTotal = new Decimal(body.valor).mul(base.pow(body.numeroParcelas));
      valorParcela = valorTotal.div(body.numeroParcelas);
    }

    const emprestimo = await prisma.emprestimo.update({
      where: { id },
      data: {
        valor: body.valor ? new Decimal(body.valor) : new Decimal(emprestimoExistente.valor),
        valorTotal: new Decimal(valorTotal),
        valorParcela: new Decimal(valorParcela),
        taxaJuros: body.taxaJuros ? body.taxaJuros : emprestimoExistente.taxaJuros,
        numeroParcelas: body.numeroParcelas || emprestimoExistente.numeroParcelas,
        dataEmprestimo: body.dataEmprestimo ? new Date(body.dataEmprestimo) : emprestimoExistente.dataEmprestimo,
        observacoes: body.observacoes || emprestimoExistente.observacoes,
        status: body.status || emprestimoExistente.status
      },
      include: {
        cliente: true,
        pagamentos: true
      }
    });

    return NextResponse.json(emprestimo);
  } catch (error) {
    console.error('Erro ao atualizar empréstimo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Deletar empréstimo
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const { id } = await params;

    // Verificar se há pagamentos
    const pagamentos = await prisma.pagamento.findFirst({
      where: { emprestimoId: id }
    });

    if (pagamentos) {
      return NextResponse.json(
        { error: 'Não é possível deletar um empréstimo com pagamentos registrados' },
        { status: 400 }
      );
    }

    await prisma.emprestimo.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Empréstimo deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar empréstimo:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 