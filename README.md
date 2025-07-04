# Sistema de Empréstimos

Sistema completo de gerenciamento de empréstimos com autenticação Clerk e banco de dados PostgreSQL.

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Clerk** - Autenticação
- **PostgreSQL** - Banco de dados
- **Prisma** - ORM

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta no Clerk

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd emprestimos-app
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
Crie um arquivo `.env.local` na raiz do projeto:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_sua_chave_aqui
CLERK_SECRET_KEY=sk_test_sua_chave_aqui

# Database
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/emprestimos_db"
```

4. **Configure o banco de dados**
```bash
# Instalar PostgreSQL (se ainda não tiver)
# Windows: https://www.postgresql.org/download/windows/
# macOS: brew install postgresql
# Linux: sudo apt install postgresql

# Criar banco de dados
psql -U postgres
CREATE DATABASE emprestimos_db;
\q

# Executar setup automático
npm run setup-db

# (Opcional) Popular com dados de exemplo
npm run populate-db
```

5. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── api/           # API Routes
│   ├── clientes/      # Página de clientes
│   ├── sign-in/       # Página de login
│   ├── sign-up/       # Página de cadastro
│   ├── layout.tsx     # Layout principal
│   └── page.tsx       # Página inicial
├── components/        # Componentes React
├── lib/              # Utilitários e configurações
└── middleware.ts     # Middleware de autenticação
```

## 🗄️ Banco de Dados

### Tabelas
- **users** - Usuários do sistema (vinculados ao Clerk)
- **clientes** - Cadastro de clientes
- **emprestimos** - Registro de empréstimos
- **pagamentos** - Controle de pagamentos

### Comandos Úteis
```bash
npm run db:studio      # Interface visual do banco
npm run db:generate    # Gerar cliente Prisma
npm run db:migrate     # Executar migrações
npm run db:push        # Sincronizar schema
npm run db:reset       # Resetar banco
```

## 🔐 Autenticação

O sistema usa Clerk para autenticação:
- Login/Cadastro automático
- Proteção de rotas
- Sincronização com banco local
- Interface personalizada

## 📊 Funcionalidades

### 🎯 Como Usar o Sistema

1. **Cadastro e Login**
   - Acesse a aplicação e faça login com sua conta Clerk
   - O sistema criará automaticamente seu perfil no banco local

2. **Gerenciar Clientes**
   - Vá para "Clientes" no menu principal
   - Adicione novos clientes com dados completos
   - Visualize, edite ou remova clientes existentes

3. **Criar Empréstimos**
   - Acesse "Empréstimos" no menu principal
   - Clique em "Novo Empréstimo"
   - Selecione o cliente, informe valor, taxa de juros e prazo
   - O sistema calcula automaticamente o valor total e parcelas

4. **Registrar Pagamentos**
   - Na página de detalhes do empréstimo, clique em "Novo Pagamento"
   - Informe o valor, método de pagamento e observações
   - O sistema atualiza automaticamente o progresso

5. **Acompanhar Progresso**
   - Visualize o progresso de pagamentos em cada empréstimo
   - Acompanhe estatísticas gerais no dashboard
   - Veja o histórico completo em "Pagamentos"

### 💡 Dicas de Uso
- **Taxa de Juros**: Informe a taxa mensal (ex: 2% = 2.0)
- **Prazo**: Em meses (ex: 12 meses = 12)
- **Status**: Ativo (em andamento), Quitado (finalizado), Inadimplente (atrasado)
- **Métodos de Pagamento**: PIX, Cartão, Boleto, Transferência, Dinheiro, Outros

### ✅ Implementadas
- [x] Autenticação com Clerk
- [x] Proteção de rotas
- [x] Dashboard principal
- [x] CRUD de clientes
- [x] CRUD de empréstimos
- [x] Sistema de pagamentos
- [x] Banco de dados PostgreSQL
- [x] API REST
- [x] Interface responsiva
- [x] Cálculos automáticos de juros
- [x] Progresso de pagamentos
- [x] Histórico de transações

### 🚧 Em Desenvolvimento
- [ ] Relatórios avançados
- [ ] Dashboard com gráficos
- [ ] Notificações
- [ ] Exportação de dados
- [ ] Múltiplos usuários
- [ ] Backup automático

## 🎨 Interface

- Design moderno e responsivo
- Interface em português brasileiro
- Componentes reutilizáveis
- Loading states e tratamento de erros

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
npm run setup-db     # Configurar banco
npm run populate-db  # Popular com dados de exemplo
npm run db:studio    # Interface do banco
```

## 📚 Documentação

- [CLERK_SETUP.md](./CLERK_SETUP.md) - Configuração do Clerk
- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Configuração do banco

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.
