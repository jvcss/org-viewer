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
git clone https://github.com/jvcss/org-viewer.git
cd org-viewer
npm install
```

2. **Configurar a variável de ambiente:**
   Crie um arquivo .env na raiz do projeto frontend e defina a URL do backend:

`VITE_BACKEND_URL=http://localhost:3001`

3. **Executar o servidor de desenvolvimento:**

`npm run dev`
A aplicação será executada em uma porta padrão (geralmente 3000) e estará pronta para consumir a API do backend.

### Backend com Node.js (Express)

1. **Configurar o projeto:**

```bash
mkdir backend
cd backend
npm init -y
npm install express cors

```

2. **Criar o arquivo server.js:**

```js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Permitir requisições do frontend
app.use(cors());

// Endpoint que retorna o JSON do orgchart
app.get("/api/orgchart", (req, res) => {
  const orgchartData = {
    id: "1",
    name: "CEO",
    title: "general manager",
    children: [{ id: "2", name: "CTO", title: "department manager" }],
  };
  res.json(orgchartData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

3. **Iniciar o servidor:**

```bash
node server.js
```

O endpoint estará disponível em http://localhost:3001/api/orgchart.

### Backend com Laravel

1. **Criar um novo projeto Laravel (caso não exista):**

```bash
composer create-project --prefer-dist laravel/laravel orgchart-backend
cd orgchart-backend

```

2. **Configurar CORS:**
   Configure o CORS conforme a documentação do Laravel ou utilizando o pacote fruitcake/laravel-cors.

3. **Definir a rota da API:**
   No arquivo `routes/api.php`, adicione:

```php
<?php

use Illuminate\Http\Request;

Route::get('/api/orgchart', function (Request $request) {
    return response()->json([
        "id" => "1",
        "name" => "CEO",
        "title" => "general manager",
        "children" => [
            ["id" => "2", "name" => "CTO", "title" => "department manager"],
        ],
    ]);
});

```

4. **Iniciar o servidor Laravel:**

```bash
php artisan serve
```

### Integração do Frontend com o Backend

No componente React, utilizei a variável de ambiente para buscar os dados da API:

```js
import React, { useEffect, useState } from "react";
import "orgchart";
import $ from "jquery";
import "./App.css";
import "./jquery.orgchart.css";

const OrgChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/api/orgchart`)
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, [backendUrl]);

  useEffect(() => {
    if (chartData) {
      $("#chart-container").empty();
      $("#chart-container").orgchart({
        data: chartData,
        verticalLevel: 8,
        nodeContent: "title",
      });
    }
    return () => {
      $("#chart-container").empty();
    };
  }, [chartData]);

  return <div id="chart-container" />;
};

export default OrgChartComponent;
```

Com essa abordagem, basta alterar o valor da variável de ambiente no arquivo `.env` para apontar para outro backend, sem a necessidade de modificar o código-fonte.

- Versatilidade da Aplicação
  Configuração Dinâmica:
  Utilização de variáveis de ambiente para definir a URL do backend, permitindo alternar facilmente entre diferentes ambientes ou provedores (Node.js, Laravel, etc).

- Arquitetura Desacoplada:
  O frontend e o backend são módulos independentes, o que facilita manutenção, testes e escalabilidade.

- Facilidade de Extensão:
  O backend pode ser ampliado para suportar operações de criação, atualização e deleção (CRUD) dos dados do orgchart, bem como integração com bancos de dados e autenticação.

- Experiência de Desenvolvimento Rápida:
  Com Vite e React, o desenvolvimento é ágil graças ao Hot Module Replacement (HMR) e à estrutura moderna do ecossistema JavaScript.

- Adaptação a Diferentes Cenários:
  Seja para um ambiente de prototipagem, desenvolvimento ou produção, a aplicação se adapta com mínima configuração extra.

### Futuras Melhorias

- Atualizações em Tempo Real:
  Integração com WebSockets para atualização dinâmica do orgchart conforme mudanças nos dados.

- Interface Interativa:
  Implementação de funcionalidades para edição direta dos nós do orgchart.

- Melhoria na UX/UI:
  Customização dos estilos e da experiência do usuário para tornar a aplicação ainda mais intuitiva.

- Testes Automatizados:
  Inclusão de testes unitários e de integração tanto para o frontend quanto para o backend.

*Esta aplicação demonstra uma abordagem fullstack versátil, onde a flexibilidade de configuração e a separação clara entre frontend e backend possibilitam a adaptação a diversos cenários e requisitos. Sinta-se à vontade para expandir e personalizar o projeto conforme suas necessidades.*
