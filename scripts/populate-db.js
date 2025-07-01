const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function populateDatabase() {
  try {
    console.log('🌱 Iniciando população do banco de dados...');

    // Criar clientes de exemplo
    const clientes = await Promise.all([
      prisma.cliente.create({
        data: {
          nome: 'João Silva',
          email: 'joao.silva@email.com',
          telefone: '(11) 99999-1111',
          cpf: '123.456.789-00',
          endereco: 'Rua das Flores, 123 - São Paulo, SP'
        }
      }),
      prisma.cliente.create({
        data: {
          nome: 'Maria Santos',
          email: 'maria.santos@email.com',
          telefone: '(11) 99999-2222',
          cpf: '987.654.321-00',
          endereco: 'Av. Paulista, 456 - São Paulo, SP'
        }
      }),
      prisma.cliente.create({
        data: {
          nome: 'Pedro Oliveira',
          email: 'pedro.oliveira@email.com',
          telefone: '(11) 99999-3333',
          cpf: '456.789.123-00',
          endereco: 'Rua Augusta, 789 - São Paulo, SP'
        }
      }),
      prisma.cliente.create({
        data: {
          nome: 'Ana Costa',
          email: 'ana.costa@email.com',
          telefone: '(11) 99999-4444',
          cpf: '789.123.456-00',
          endereco: 'Rua Oscar Freire, 321 - São Paulo, SP'
        }
      }),
      prisma.cliente.create({
        data: {
          nome: 'Carlos Ferreira',
          email: 'carlos.ferreira@email.com',
          telefone: '(11) 99999-5555',
          cpf: '321.654.987-00',
          endereco: 'Av. Brigadeiro Faria Lima, 654 - São Paulo, SP'
        }
      })
    ]);

    console.log(`✅ ${clientes.length} clientes criados`);

    // Criar empréstimos de exemplo
    const emprestimos = await Promise.all([
      prisma.emprestimo.create({
        data: {
          clienteId: clientes[0].id,
          valor: 5000.00,
          valorTotal: 6000.00,
          valorParcela: 500.00,
          taxaJuros: 2.0,
          prazoMeses: 12,
          dataEmprestimo: new Date('2024-01-15'),
          status: 'ATIVO',
          observacoes: 'Empréstimo para reforma da casa'
        }
      }),
      prisma.emprestimo.create({
        data: {
          clienteId: clientes[1].id,
          valor: 3000.00,
          valorTotal: 3600.00,
          valorParcela: 300.00,
          taxaJuros: 2.5,
          prazoMeses: 12,
          dataEmprestimo: new Date('2024-02-01'),
          status: 'ATIVO',
          observacoes: 'Empréstimo para compra de eletrodomésticos'
        }
      }),
      prisma.emprestimo.create({
        data: {
          clienteId: clientes[2].id,
          valor: 8000.00,
          valorTotal: 9600.00,
          valorParcela: 800.00,
          taxaJuros: 1.8,
          prazoMeses: 12,
          dataEmprestimo: new Date('2024-01-20'),
          status: 'QUITADO',
          observacoes: 'Empréstimo para viagem'
        }
      }),
      prisma.emprestimo.create({
        data: {
          clienteId: clientes[3].id,
          valor: 2000.00,
          valorTotal: 2400.00,
          valorParcela: 200.00,
          taxaJuros: 3.0,
          prazoMeses: 12,
          dataEmprestimo: new Date('2024-03-10'),
          status: 'ATIVO',
          observacoes: 'Empréstimo para cursos'
        }
      }),
      prisma.emprestimo.create({
        data: {
          clienteId: clientes[4].id,
          valor: 10000.00,
          valorTotal: 12000.00,
          valorParcela: 1000.00,
          taxaJuros: 1.5,
          prazoMeses: 12,
          dataEmprestimo: new Date('2024-02-15'),
          status: 'INADIMPLENTE',
          observacoes: 'Empréstimo para negócio próprio'
        }
      })
    ]);

    console.log(`✅ ${emprestimos.length} empréstimos criados`);

    // Criar pagamentos de exemplo
    const pagamentos = await Promise.all([
      // Pagamentos para o primeiro empréstimo (ativo)
      prisma.pagamento.create({
        data: {
          emprestimoId: emprestimos[0].id,
          valor: 500.00,
          dataPagamento: new Date('2024-02-15'),
          metodoPagamento: 'PIX',
          observacoes: 'Primeira parcela'
        }
      }),
      prisma.pagamento.create({
        data: {
          emprestimoId: emprestimos[0].id,
          valor: 500.00,
          dataPagamento: new Date('2024-03-15'),
          metodoPagamento: 'CARTAO_CREDITO',
          observacoes: 'Segunda parcela'
        }
      }),
      prisma.pagamento.create({
        data: {
          emprestimoId: emprestimos[0].id,
          valor: 500.00,
          dataPagamento: new Date('2024-04-15'),
          metodoPagamento: 'PIX',
          observacoes: 'Terceira parcela'
        }
      }),

      // Pagamentos para o segundo empréstimo (ativo)
      prisma.pagamento.create({
        data: {
          emprestimoId: emprestimos[1].id,
          valor: 300.00,
          dataPagamento: new Date('2024-03-01'),
          metodoPagamento: 'BOLETO',
          observacoes: 'Primeira parcela'
        }
      }),
      prisma.pagamento.create({
        data: {
          emprestimoId: emprestimos[1].id,
          valor: 300.00,
          dataPagamento: new Date('2024-04-01'),
          metodoPagamento: 'PIX',
          observacoes: 'Segunda parcela'
        }
      }),

      // Pagamentos para o terceiro empréstimo (quitado)
      ...Array.from({ length: 12 }, (_, i) => 
        prisma.pagamento.create({
          data: {
            emprestimoId: emprestimos[2].id,
            valor: 800.00,
            dataPagamento: new Date(`2024-${String(i + 2).padStart(2, '0')}-20`),
            metodoPagamento: i % 2 === 0 ? 'PIX' : 'CARTAO_CREDITO',
            observacoes: `Parcela ${i + 1}`
          }
        })
      ),

      // Pagamento para o quarto empréstimo (ativo)
      prisma.pagamento.create({
        data: {
          emprestimoId: emprestimos[3].id,
          valor: 200.00,
          dataPagamento: new Date('2024-04-10'),
          metodoPagamento: 'TRANSFERENCIA',
          observacoes: 'Primeira parcela'
        }
      })
    ]);

    console.log(`✅ ${pagamentos.length} pagamentos criados`);

    console.log('🎉 Banco de dados populado com sucesso!');
    console.log('\n📊 Resumo:');
    console.log(`- ${clientes.length} clientes`);
    console.log(`- ${emprestimos.length} empréstimos`);
    console.log(`- ${pagamentos.length} pagamentos`);

  } catch (error) {
    console.error('❌ Erro ao popular banco de dados:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar o script
populateDatabase(); 