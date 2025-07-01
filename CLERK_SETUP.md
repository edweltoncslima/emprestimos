# Configuração do Clerk para Autenticação

## Passos para Configurar

### 1. Criar conta no Clerk
1. Acesse [https://dashboard.clerk.com/](https://dashboard.clerk.com/)
2. Crie uma nova conta ou faça login
3. Crie um novo aplicativo

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Clerk Authentication
# Obtenha essas chaves em https://dashboard.clerk.com/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 3. Obter as Chaves do Clerk
1. No dashboard do Clerk, vá para "API Keys"
2. Copie a "Publishable Key" e cole no `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
3. Copie a "Secret Key" e cole no `CLERK_SECRET_KEY`

### 4. Configurar URLs Permitidas
No dashboard do Clerk, vá para "User & Authentication" > "Email, Phone, Username":
- Adicione `http://localhost:3000` para desenvolvimento
- Adicione seu domínio de produção quando for fazer deploy

### 5. Testar a Aplicação
1. Execute `npm run dev`
2. Acesse `http://localhost:3000`
3. Teste o cadastro e login de usuários

## Funcionalidades Implementadas

- ✅ Autenticação com email/senha
- ✅ Páginas de login e cadastro
- ✅ Middleware para proteger rotas
- ✅ Dashboard para usuários logados
- ✅ Botão de logout
- ✅ Interface responsiva

## Próximos Passos

1. Implementar páginas de clientes (`/clientes`)
2. Implementar páginas de empréstimos (`/emprestimos`)
3. Implementar páginas de relatórios (`/relatorios`)
4. Adicionar validações e tratamento de erros
5. Implementar banco de dados para persistir dados

## Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx (ClerkProvider configurado)
│   ├── page.tsx (Dashboard principal)
│   ├── sign-in/[[...sign-in]]/page.tsx (Página de login)
│   └── sign-up/[[...sign-up]]/page.tsx (Página de cadastro)
└── middleware.ts (Proteção de rotas)
``` 