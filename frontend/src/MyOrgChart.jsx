import React, { useEffect, useState } from "react";
import "orgchart";
import $ from "jquery";
import "./App.css";
import "./jquery.orgchart.css";

const MyOrgChart = () => {
  const [chartData, setChartData] = useState(null);

  // Busca os dados do orgchart assim que o componente for montado
  useEffect(() => {
    fetch('http://localhost:3001/api/orgchart')
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
      })
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, []);

  // Inicializa o orgchart quando os dados estiverem disponíveis
  useEffect(() => {
    if (chartData) {
      // Limpa o container antes de inicializar
      $("#chart-container").empty();
      $("#chart-container").orgchart({
        data: chartData,
        verticalLevel: 8,
        nodeContent: "title",
      });
    }
    // Função de cleanup: limpa o container ao desmontar ou atualizar
    return () => {
      $("#chart-container").empty();
    };
  }, [chartData]);

  return <div id="chart-container" />;
};

export default MyOrgChart;
