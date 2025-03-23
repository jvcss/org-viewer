const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

let orgChartData = {
  name: "CEO",
  title: "Chief Executive Officer",
  children: [
    { name: "CTO", title: "Chief Technology Officer" },
    { name: "CFO", title: "Chief Financial Officer" },
  ],
};

// Endpoint para obter os dados do orgchart
app.get("/api/orgchart", (req, res) => {
  res.json(orgChartData);
});

// Endpoint para atualizar os dados do orgchart
app.post("/api/orgchart", (req, res) => {
  orgChartData = req.body;
  res.json({ message: "OrgChart atualizado com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
