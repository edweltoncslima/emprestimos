const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('🔍 Verificando status do banco de dados...\n');

    // Testar conexão
    console.log('1. Testando conexão...');
    await prisma.$connect();
    console.log('✅ Conexão estabelecida com sucesso\n');

    // Verificar tabelas
    console.log('2. Verificando tabelas...');
    
    // Verificar se a tabela users existe e tem dados
    const usersCount = await prisma.user.count();
    console.log(`   - Tabela 'users': ${usersCount} registros`);

    // Verificar se a tabela clientes existe e tem dados
    const clientesCount = await prisma.cliente.count();
    console.log(`   - Tabela 'clientes': ${clientesCount} registros`);

    // Verificar se a tabela emprestimos existe e tem dados
    const emprestimosCount = await prisma.emprestimo.count();
    console.log(`   - Tabela 'emprestimos': ${emprestimosCount} registros`);

    // Verificar se a tabela pagamentos existe e tem dados
    const pagamentosCount = await prisma.pagamento.count();
    console.log(`   - Tabela 'pagamentos': ${pagamentosCount} registros`);

    console.log('\n3. Verificando estrutura das tabelas...');
    
    // Verificar estrutura da tabela emprestimos
    try {
      const emprestimoSample = await prisma.emprestimo.findFirst({
        select: {
          id: true,
          valor: true,
          valorTotal: true,
          taxaJuros: true,
          numeroParcelas: true,
          valorParcela: true,
          dataEmprestimo: true,
          dataVencimento: true,
          status: true,
          clienteId: true,
          userId: true
        }
      });
      
      if (emprestimoSample) {
        console.log('   - Estrutura da tabela emprestimos: OK');
        console.log('   - Campos encontrados:', Object.keys(emprestimoSample));
      } else {
        console.log('   - Tabela emprestimos: vazia (normal se não há dados)');
      }
    } catch (error) {
      console.log('   ❌ Erro ao verificar tabela emprestimos:', error.message);
    }

    // Verificar estrutura da tabela clientes
    try {
      const clienteSample = await prisma.cliente.findFirst({
        select: {
          id: true,
          nome: true,
          email: true,
          telefone: true,
          cpf: true,
          endereco: true,
          cidade: true,
          estado: true,
          userId: true
        }
      });
      
      if (clienteSample) {
        console.log('   - Estrutura da tabela clientes: OK');
        console.log('   - Campos encontrados:', Object.keys(clienteSample));
      } else {
        console.log('   - Tabela clientes: vazia (normal se não há dados)');
      }
    } catch (error) {
      console.log('   ❌ Erro ao verificar tabela clientes:', error.message);
    }

    console.log('\n4. Testando relacionamentos...');
    
    // Testar relacionamento cliente -> emprestimos
    try {
      const clienteComEmprestimos = await prisma.cliente.findFirst({
        include: {
          emprestimos: true
        }
      });
      
      if (clienteComEmprestimos) {
        console.log(`   - Cliente "${clienteComEmprestimos.nome}" tem ${clienteComEmprestimos.emprestimos.length} empréstimos`);
      } else {
        console.log('   - Nenhum cliente com empréstimos encontrado');
      }
    } catch (error) {
      console.log('   ❌ Erro ao testar relacionamento cliente-empréstimos:', error.message);
    }

    console.log('\n✅ Verificação concluída!');

  } catch (error) {
    console.error('❌ Erro durante a verificação:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Executar verificação
checkDatabase(); 