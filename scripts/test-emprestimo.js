const { PrismaClient } = require('../src/generated/prisma');

const prisma = new PrismaClient();

async function testEmprestimo() {
  console.log('🧪 Testando criação de empréstimo...');

  try {
    // Limpar dados existentes
    console.log('🗑️ Limpando dados existentes...');
    await prisma.movimentacaoCaixa.deleteMany({});
    await prisma.pagamento.deleteMany({});
    await prisma.emprestimo.deleteMany({});
    await prisma.cliente.deleteMany({});
    await prisma.caixa.deleteMany({});
    await prisma.user.deleteMany({});
    console.log('✅ Dados limpos');

    // Criar usuário de teste
    const user = await prisma.user.create({
      data: {
        clerkId: 'test_user_simple',
        email: 'teste.simple@emprestimos.com',
        firstName: 'Teste',
        lastName: 'Simple'
      }
    });

    console.log('✅ Usuário criado:', user.email);

    // Criar cliente de teste
    const cliente = await prisma.cliente.create({
      data: {
        userId: user.id,
        nome: 'Cliente Teste',
        email: 'cliente.teste@email.com',
        telefone: '(11) 99999-9999',
        cpf: '111.222.333-44',
        endereco: 'Rua Teste, 123',
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '00000-000'
      }
    });

    console.log('✅ Cliente criado:', cliente.nome);

    // Testar criação de empréstimo
    const emprestimo = await prisma.emprestimo.create({
      data: {
        userId: user.id,
        clienteId: cliente.id,
        valor: 1000.00,
        valorTotal: 1200.00,
        valorParcela: 60.00,
        taxaJuros: 20.00,
        numeroParcelas: 20,
        dataEmprestimo: new Date(),
        dataVencimento: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
        status: 'ATIVO',
        observacoes: 'Empréstimo de teste'
      }
    });

    console.log('✅ Empréstimo criado com sucesso!');
    console.log('📊 Detalhes do empréstimo:');
    console.log('- ID:', emprestimo.id);
    console.log('- Valor:', emprestimo.valor);
    console.log('- Valor Total:', emprestimo.valorTotal);
    console.log('- Taxa de Juros:', emprestimo.taxaJuros);
    console.log('- Número de Parcelas:', emprestimo.numeroParcelas);

    // Limpar dados de teste
    await prisma.emprestimo.delete({ where: { id: emprestimo.id } });
    await prisma.cliente.delete({ where: { id: cliente.id } });
    await prisma.user.delete({ where: { id: user.id } });

    console.log('✅ Dados de teste limpos');

  } catch (error) {
    console.error('❌ Erro durante o teste:', error);
    throw error;
  }
}

testEmprestimo()
  .catch((e) => {
    console.error('❌ Erro durante o teste:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 