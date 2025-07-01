# Configuração do Banco de Dados PostgreSQL

## 1. Instalar PostgreSQL

### Windows
1. Baixe o PostgreSQL em: https://www.postgresql.org/download/windows/
2. Execute o instalador e siga as instruções
3. Anote a senha do usuário `postgres` que você definir

### macOS
```bash
brew install postgresql
brew services start postgresql
```

### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

## 2. Configurar o Banco de Dados

### Criar banco de dados
```bash
# Conectar ao PostgreSQL
psql -U postgres

# Criar banco de dados
CREATE DATABASE emprestimos_db;

# Criar usuário (opcional)
CREATE USER emprestimos_user WITH PASSWORD 'sua_senha_aqui';

# Dar permissões
GRANT ALL PRIVILEGES ON DATABASE emprestimos_db TO emprestimos_user;

# Sair
\q
```

## 3. Configurar Variáveis de Ambiente

Adicione ao seu arquivo `.env.local`:

```env
# Database
DATABASE_URL="postgresql://postgres:sua_senha_aqui@localhost:5432/emprestimos_db"

# Ou se criou um usuário específico:
# DATABASE_URL="postgresql://emprestimos_user:sua_senha_aqui@localhost:5432/emprestimos_db"
```

## 4. Executar Migrações

```bash
# Gerar a primeira migração
npx prisma migrate dev --name init

# Aplicar migrações
npx prisma migrate deploy

# Gerar cliente Prisma
npx prisma generate
```

## 5. Verificar Configuração

```bash
# Abrir Prisma Studio (interface visual)
npx prisma studio

# Verificar status do banco
npx prisma db pull
```

## 6. Estrutura do Banco

### Tabelas Criadas:
- **users**: Usuários do sistema (vinculados ao Clerk)
- **clientes**: Cadastro de clientes
- **emprestimos**: Registro de empréstimos
- **pagamentos**: Controle de pagamentos

### Relacionamentos:
- Um usuário pode ter múltiplos clientes
- Um cliente pode ter múltiplos empréstimos
- Um empréstimo pode ter múltiplos pagamentos
- Todos os dados são vinculados ao usuário logado

## 7. Comandos Úteis

```bash
# Resetar banco (cuidado!)
npx prisma migrate reset

# Ver logs do banco
npx prisma migrate status

# Sincronizar schema (desenvolvimento)
npx prisma db push

# Backup do banco
pg_dump -U postgres emprestimos_db > backup.sql
```

## 8. Problemas Comuns

### Erro de conexão
- Verifique se o PostgreSQL está rodando
- Confirme a URL de conexão no `.env.local`
- Teste a conexão: `psql -U postgres -d emprestimos_db`

### Erro de permissão
- Verifique se o usuário tem permissões no banco
- Execute: `GRANT ALL PRIVILEGES ON DATABASE emprestimos_db TO seu_usuario;`

### Porta ocupada
- Verifique se a porta 5432 está livre
- Ou mude a porta no PostgreSQL e atualize a URL 