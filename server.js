const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Permite requisições de outros domínios (frontend Vite)
app.use(cors());

// Endpoint que retorna o JSON do orgchart
app.get("/api/orgchart", (req, res) => {
  const orgchartData = {
    name: 'Lao Lao',
    title: 'general manager',
    children: [
      { name: 'Bo Miao', title: 'department manager', 'className': 'middle-level',
        children: [
          { name: 'Li Jing', title: 'senior engineer', 'className': 'product-dept' },
          { name: 'Li Xin', title: 'senior engineer', 'className': 'product-dept',
            children: [
              { name: 'To To', title: 'engineer', 'className': 'pipeline1' },
              { name: 'Fei Fei', title: 'engineer', 'className': 'pipeline1' },
              { name: 'Xuan Xuan', title: 'engineer', 'className': 'pipeline1' }
            ]
          }
        ]
      },
      { name: 'Su Miao', title: 'department manager', 'className': 'middle-level',
        children: [
          { name: 'Pang Pang', title: 'senior engineer', 'className': 'rd-dept' },
          { name: 'Hei Hei', title: 'senior engineer', 'className': 'rd-dept',
            children: [
              { name: 'Xiang Xiang', title: 'UE engineer', 'className': 'frontend1' },
              { name: 'Dan Dan', title: 'engineer', 'className': 'frontend1' },
              { name: 'Zai Zai', title: 'engineer', 'className': 'frontend1' }
            ]
          }
        ]
      }
    ]
  };
  res.json(orgchartData);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
