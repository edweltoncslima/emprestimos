#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Configurando banco de dados PostgreSQL com Prisma...\n');

// Verificar se o arquivo .env existe
const envPath = path.join(process.cwd(), '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ Arquivo .env não encontrado!');
  console.log('📝 Crie o arquivo .env com as seguintes variáveis:');
  console.log('DATABASE_URL="postgresql://postgres:postgres@localhost:5432/emprestimos_db"');
  console.log('NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="sua_chave_clerk"');
  console.log('CLERK_SECRET_KEY="sua_chave_secreta_clerk"');
  process.exit(1);
}

try {
  // Verificar se o PostgreSQL está rodando
  console.log('🔍 Verificando conexão com PostgreSQL...');
  execSync('npx prisma db pull', { stdio: 'pipe' });
  console.log('✅ Conexão com PostgreSQL estabelecida!\n');
} catch (error) {
  console.error('❌ Erro ao conectar com PostgreSQL!');
  console.log('📋 Verifique se:');
  console.log('   1. PostgreSQL está instalado e rodando');
  console.log('   2. O banco de dados "emprestimos_db" existe');
  console.log('   3. A URL de conexão no .env está correta');
  console.log('   4. O usuário tem permissões no banco');
  process.exit(1);
}

try {
  // Gerar cliente Prisma
  console.log('🔧 Gerando cliente Prisma...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Cliente Prisma gerado!\n');
} catch (error) {
  console.error('❌ Erro ao gerar cliente Prisma!');
  process.exit(1);
}

try {
  // Executar migrações
  console.log('📦 Executando migrações...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  console.log('✅ Migrações executadas!\n');
} catch (error) {
  console.error('❌ Erro ao executar migrações!');
  console.log('💡 Tente executar: npx prisma migrate dev --name init');
  process.exit(1);
}

console.log('🎉 Configuração do banco de dados concluída!');
console.log('\n📋 Próximos passos:');
console.log('   1. Execute: npm run dev');
console.log('   2. Acesse: http://localhost:3000');
console.log('   3. Faça login e teste o sistema');
console.log('\n🔧 Comandos úteis:');
console.log('   - npx prisma studio (interface visual do banco)');
console.log('   - npx prisma migrate reset (resetar banco)');
console.log('   - npx prisma db push (sincronizar schema)'); 