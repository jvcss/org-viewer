const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Permite requisições de outros domínios (frontend Vite)
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
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
