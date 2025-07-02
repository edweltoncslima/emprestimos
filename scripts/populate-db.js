const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando população do banco de dados...');

  // Criar usuário de teste
  const user = await prisma.user.upsert({
    where: { clerkId: 'test_user_123' },
    update: {},
    create: {
      clerkId: 'test_user_123',
      email: 'teste@emprestimos.com',
      firstName: 'João',
      lastName: 'Silva'
    }
  });

  console.log('✅ Usuário criado:', user.email);

  // Criar caixa inicial
  let caixa = await prisma.caixa.findFirst({
    where: { userId: user.id }
  });

  if (!caixa) {
    caixa = await prisma.caixa.create({
      data: {
        userId: user.id,
        saldoInicial: 50000.00,
        saldoAtual: 50000.00,
        observacoes: 'Saldo inicial para testes'
      }
    });
  }

  console.log('✅ Caixa configurado com saldo inicial de R$ 50.000,00');

  // Criar clientes de teste
  const clientes = await Promise.all([
    prisma.cliente.upsert({
      where: { email: 'maria.silva@email.com' },
      update: {},
      create: {
        userId: user.id,
        nome: 'Maria Silva',
        email: 'maria.silva@email.com',
        telefone: '(11) 99999-1111',
        cpf: '123.456.789-01',
        endereco: 'Rua das Flores, 123 - São Paulo/SP',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01234-567'
      }
    }),
    prisma.cliente.upsert({
      where: { email: 'pedro.santos@email.com' },
      update: {},
      create: {
        userId: user.id,
        nome: 'Pedro Santos',
        email: 'pedro.santos@email.com',
        telefone: '(11) 99999-2222',
        cpf: '987.654.321-09',
        endereco: 'Av. Paulista, 456 - São Paulo/SP',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01310-100'
      }
    }),
    prisma.cliente.upsert({
      where: { email: 'ana.oliveira@email.com' },
      update: {},
      create: {
        userId: user.id,
        nome: 'Ana Oliveira',
        email: 'ana.oliveira@email.com',
        telefone: '(11) 99999-3333',
        cpf: '456.789.123-45',
        endereco: 'Rua Augusta, 789 - São Paulo/SP',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01212-000'
      }
    })
  ]);

  console.log('✅ Clientes criados:', clientes.length);

  // Criar empréstimos de teste
  const emprestimos = await Promise.all([
    // Empréstimo 1: R$ 5.000 em 20 dias
    prisma.emprestimo.create({
      data: {
        userId: user.id,
        clienteId: clientes[0].id,
        valor: 5000.00,
        valorTotal: 6000.00, // 5000 + 20% = 6000
        valorParcela: 300.00, // 6000 / 20 = 300
        taxaJuros: 20.00,
        numeroParcelas: 20,
        dataEmprestimo: new Date('2024-01-15'),
        dataVencimento: new Date('2024-02-04'),
        status: 'ATIVO',
        observacoes: 'Empréstimo para reforma da casa'
      }
    }),
    // Empréstimo 2: R$ 3.000 em 24 dias
    prisma.emprestimo.create({
      data: {
        userId: user.id,
        clienteId: clientes[1].id,
        valor: 3000.00,
        valorTotal: 3600.00, // 3000 + 20% = 3600
        valorParcela: 150.00, // 3600 / 24 = 150
        taxaJuros: 20.00,
        numeroParcelas: 24,
        dataEmprestimo: new Date('2024-01-20'),
        dataVencimento: new Date('2024-02-13'),
        status: 'ATIVO',
        observacoes: 'Empréstimo para compra de eletrodomésticos'
      }
    }),
    // Empréstimo 3: R$ 2.000 em 20 dias (parcialmente pago)
    prisma.emprestimo.create({
      data: {
        userId: user.id,
        clienteId: clientes[2].id,
        valor: 2000.00,
        valorTotal: 2400.00, // 2000 + 20% = 2400
        valorParcela: 120.00, // 2400 / 20 = 120
        taxaJuros: 20.00,
        numeroParcelas: 20,
        dataEmprestimo: new Date('2024-01-10'),
        dataVencimento: new Date('2024-01-30'),
        status: 'ATIVO',
        observacoes: 'Empréstimo para pagamento de contas'
      }
    })
  ]);

  console.log('✅ Empréstimos criados:', emprestimos.length);

  // Criar movimentações de saída para os empréstimos
  await Promise.all([
    prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'SAIDA',
        valor: 5000.00,
        descricao: 'Empréstimo para Maria Silva',
        emprestimoId: emprestimos[0].id
      }
    }),
    prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'SAIDA',
        valor: 3000.00,
        descricao: 'Empréstimo para Pedro Santos',
        emprestimoId: emprestimos[1].id
      }
    }),
    prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'SAIDA',
        valor: 2000.00,
        descricao: 'Empréstimo para Ana Oliveira',
        emprestimoId: emprestimos[2].id
      }
    })
  ]);

  // Atualizar saldo do caixa
  await prisma.caixa.update({
    where: { id: caixa.id },
    data: {
      saldoAtual: 40000.00 // 50000 - 10000 (total emprestado)
    }
  });

  // Criar pagamentos de teste para o terceiro empréstimo
  const pagamentos = await Promise.all([
    // Pagamento da 1ª parcela
    prisma.pagamento.create({
      data: {
        userId: user.id,
        emprestimoId: emprestimos[2].id,
        numeroParcela: 1,
        valorParcela: 120.00,
        valorPago: 120.00,
        dataVencimento: new Date('2024-01-11'),
        dataPagamento: new Date('2024-01-11'),
        status: 'PAGO',
        formaPagamento: 'PIX',
        observacoes: 'Pagamento em dia'
      }
    }),
    // Pagamento da 2ª parcela
    prisma.pagamento.create({
      data: {
        userId: user.id,
        emprestimoId: emprestimos[2].id,
        numeroParcela: 2,
        valorParcela: 120.00,
        valorPago: 120.00,
        dataVencimento: new Date('2024-01-12'),
        dataPagamento: new Date('2024-01-12'),
        status: 'PAGO',
        formaPagamento: 'DINHEIRO',
        observacoes: 'Pagamento em dia'
      }
    }),
    // Pagamento da 3ª parcela
    prisma.pagamento.create({
      data: {
        userId: user.id,
        emprestimoId: emprestimos[2].id,
        numeroParcela: 3,
        valorParcela: 120.00,
        valorPago: 120.00,
        dataVencimento: new Date('2024-01-13'),
        dataPagamento: new Date('2024-01-13'),
        status: 'PAGO',
        formaPagamento: 'PIX',
        observacoes: 'Pagamento em dia'
      }
    })
  ]);

  console.log('✅ Pagamentos criados:', pagamentos.length);

  // Criar movimentações de entrada para os pagamentos
  await Promise.all([
    prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'ENTRADA',
        valor: 120.00,
        descricao: 'Pagamento parcela 1 - Ana Oliveira',
        emprestimoId: emprestimos[2].id
      }
    }),
    prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'ENTRADA',
        valor: 120.00,
        descricao: 'Pagamento parcela 2 - Ana Oliveira',
        emprestimoId: emprestimos[2].id
      }
    }),
    prisma.movimentacaoCaixa.create({
      data: {
        userId: user.id,
        tipo: 'ENTRADA',
        valor: 120.00,
        descricao: 'Pagamento parcela 3 - Ana Oliveira',
        emprestimoId: emprestimos[2].id
      }
    })
  ]);

  // Atualizar saldo do caixa com os pagamentos recebidos
  await prisma.caixa.update({
    where: { id: caixa.id },
    data: {
      saldoAtual: 40360.00 // 40000 + 360 (pagamentos recebidos)
    }
  });

  console.log('✅ Movimentações de caixa criadas');
  console.log('✅ Saldo atual do caixa: R$ 40.360,00');

  console.log('\n🎉 População do banco concluída com sucesso!');
  console.log('\n📊 Resumo dos dados criados:');
  console.log('- 1 usuário de teste');
  console.log('- 1 caixa configurado');
  console.log('- 3 clientes');
  console.log('- 3 empréstimos (2 ativos, 1 com pagamentos parciais)');
  console.log('- 3 pagamentos realizados');
  console.log('- 6 movimentações de caixa');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante a população do banco:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 