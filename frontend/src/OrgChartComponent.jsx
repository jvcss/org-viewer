import React, { useEffect, useRef } from "react";
import "orgchart";
import $ from "jquery";
import "./App.css";
import "./jquery.orgchart.css";

const OrgChartComponent = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return; // Impede nova inicialização
    initialized.current = true;

    
    $("#chart-container").empty(); // Limpa o container para evitar elementos residuais [REACT LIXOSO]
    $("#chart-container").orgchart({
      data: {
        id: "1",
        name: "CEO",
        title: "general manager",
        children: [
          { id: "2", name: "CPO", title: "department manager" },
          {
            id: "3",
            name: "CTO",
            title: "department manager",
            children: [
              { id: "4", name: "Tie Hua", title: "senior engineer" },
              {
                id: "5",
                name: "CCO",
                title: "senior engineer",
                children: [
                  { id: "6", name: "Dan Dan", title: "engineer" },
                  { id: "7", name: "Xiang Xiang", title: "engineer" },
                ],
              },
              { id: "8", name: "CMD", title: "senior engineer" },
            ],
          },
          { id: "9", name: "CPC", title: "department manager" },
          {
            id: "10",
            name: "CFC",
            title: "department manager",
            children: [{ id: "11", name: "Yue Yue", title: "senior engineer" }],
          },
        ],
      },
      nodeContent: "title",
    });
  }, []);

  return <div id="chart-container" />;
};

export default OrgChartComponent;
