# Aplicação Fullstack OrgChart

Esta aplicação fullstack foi desenvolvida para exibir, de forma dinâmica, um diagrama organizacional (orgchart) a partir de dados JSON. O frontend é construído com React e Vite, utilizando o plugin OrgChart (baseado em jQuery), e o backend pode ser implementado tanto em Node.js (com Express) quanto em Laravel (PHP).

## Visão Geral

A aplicação consiste em:

- **Frontend:** Uma interface de página única (single-page) que renderiza o orgchart com base em dados obtidos via API.
- **Backend:** Uma API que fornece o JSON com os dados do orgchart. Esta API pode ser desenvolvida em Node.js (Express) ou em Laravel, possibilitando maior flexibilidade conforme o ambiente de desenvolvimento ou produção.

A comunicação entre o frontend e o backend é realizada através de requisições HTTP, e a URL do backend é configurável por meio de variáveis de ambiente, facilitando a adaptação da aplicação a diferentes cenários (desenvolvimento, homologação, produção, etc).

## Tecnologias Utilizadas

- **Frontend:**
  - React 18
  - Vite (para bundling e desenvolvimento com HMR)
  - OrgChart (biblioteca jQuery para exibição do diagrama)
  - JavaScript e CSS

- **Backend (Opção 1 – Node.js):**
  - Node.js
  - Express
  - CORS

- **Backend (Opção 2 – Laravel):**
  - Laravel (PHP)
  - Configuração de CORS via middleware ou pacote

## Funcionalidades

- **Renderização Dinâmica:** O diagrama é renderizado com base em dados JSON obtidos via API.
- **Configuração Flexível:** Utilização de variáveis de ambiente (prefixadas com `VITE_` em Vite) para configurar a URL do backend sem necessidade de alterar o código fonte.
- **Arquitetura Separada:** Frontend e backend são desacoplados, permitindo escalabilidade e facilidade de manutenção.
- **Possibilidade de Expansão:** O backend pode ser estendido para incluir operações CRUD, autenticação e persistência em banco de dados, tornando a aplicação mais robusta.

## Configuração e Execução

### Frontend (Vite + React)

1. **Clonar o repositório e instalar as dependências:**

```bash
git clone 
cd <nome-do-projeto>
npm install
```

2. **Configurar a variável de ambiente:**
Crie um arquivo .env na raiz do projeto e defina a URL do backend:

`VITE_BACKEND_URL=http://localhost:3001`

3. **Executar o servidor de desenvolvimento:**

`npm run dev`
A aplicação será executada em uma porta padrão (geralmente 3000) e estará pronta para consumir a API do backend.

Backend com Node.js (Express)