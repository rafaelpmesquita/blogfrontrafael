# Portfólio — Rafael Mesquita

Portfólio pessoal construído com **Nuxt 2**, **Vue 2**, **TypeScript** e **Tailwind CSS**. O projeto mantém a arquitetura de componentes em atoms, molecules e organisms e consome uma API ASP.NET Core.

## Requisitos

- Node.js **14.17.3** (versão atualmente declarada no `package.json`)
- npm
- API .NET em execução e banco PostgreSQL configurado

> Nuxt 2 e Node.js 14 são tecnologias antigas. Esta etapa recupera a aplicação sem migrar o framework; a atualização de runtime/framework deve ser feita em uma etapa separada e validada.

## Executar localmente

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie `.env.example` para `.env` e ajuste `API_BASE_URL` para a URL da API local. Exemplo: `http://localhost:5000/`.

3. Inicie o frontend:

   ```bash
   npm run dev
   ```

4. Abra `http://localhost:3000`.

Na hospedagem (por exemplo, Vercel), cadastre `API_BASE_URL` nas variáveis de ambiente do projeto e faça um novo deploy. Não dependa do fallback antigo sem confirmar que o App Service ainda está ativo.

## Rotas consumidas

| Recurso | Rota pública da API |
|---|---|
| Conhecimentos | `GET /v1/` |
| Timeline | `GET /v1/tl` |
| Navegação | `GET /v1/nv` |

O proxy do Nuxt recebe chamadas em `/api/...` e remove o prefixo `/api/` antes de encaminhar para a API. Por isso, o frontend chama `/api/v1/tl`, `/api/v1/nv` e `/api/v1`.

## Conteúdo

Os componentes visuais continuam desacoplados da fonte dos dados. `db.json` foi mantido como referência de conteúdo no formato antigo; a aplicação principal busca timeline, conhecimentos e navegação na API configurada em `API_BASE_URL`. Portanto, atualizar `db.json` sozinho não altera os dados servidos pelo backend em produção.

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste `API_BASE_URL` se a API estiver em outro endereço.
O valor deve ser apenas a origem da API (por exemplo `http://localhost:5000/`), sem acrescentar `/v1`.
O proxy do Nuxt remove o prefixo `/api/` e encaminha os endpoints para as rotas versionadas do backend.

`API_BASE_URL` não é segredo: não coloque senhas ou connection strings nesse arquivo do frontend.
