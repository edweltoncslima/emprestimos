import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

// GET - Buscar empréstimo específico
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const emprestimo = await prisma.emprestimo.findUnique({
      where: { id: params.id },
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
          orderBy: {
            dataPagamento: 'desc'
          }
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
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const {
      valor,
      taxaJuros,
      prazoMeses,
      dataEmprestimo,
      observacoes,
      status
    } = body;

    // Verificar se o empréstimo existe
    const emprestimoExistente = await prisma.emprestimo.findUnique({
      where: { id: params.id }
    });

    if (!emprestimoExistente) {
      return NextResponse.json(
        { error: 'Empréstimo não encontrado' },
        { status: 404 }
      );
    }

    // Calcular novos valores se necessário
    let valorTotal = emprestimoExistente.valorTotal;
    let valorParcela = emprestimoExistente.valorParcela;

    if (valor && taxaJuros && prazoMeses) {
      valorTotal = valor * Math.pow(1 + taxaJuros / 100, prazoMeses);
      valorParcela = valorTotal / prazoMeses;
    }

    const emprestimo = await prisma.emprestimo.update({
      where: { id: params.id },
      data: {
        valor: valor || emprestimoExistente.valor,
        valorTotal,
        valorParcela,
        taxaJuros: taxaJuros || emprestimoExistente.taxaJuros,
        prazoMeses: prazoMeses || emprestimoExistente.prazoMeses,
        dataEmprestimo: dataEmprestimo ? new Date(dataEmprestimo) : emprestimoExistente.dataEmprestimo,
        observacoes: observacoes || emprestimoExistente.observacoes,
        status: status || emprestimoExistente.status
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
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    // Verificar se o empréstimo existe
    const emprestimo = await prisma.emprestimo.findUnique({
      where: { id: params.id },
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

    // Verificar se há pagamentos associados
    if (emprestimo.pagamentos.length > 0) {
      return NextResponse.json(
        { error: 'Não é possível deletar um empréstimo que possui pagamentos' },
        { status: 400 }
      );
    }

    await prisma.emprestimo.delete({
      where: { id: params.id }
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