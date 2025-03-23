import React, { useEffect, useState } from "react";
import "orgchart";
import $ from "jquery";
import "./App.css";
import "./jquery.orgchart.css";

const MyOrgChart = () => {
  const [chartData, setChartData] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Busca os dados do orgchart assim que o componente for montado
  useEffect(() => {
    fetch(`${backendUrl}/api/orgchart`)
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
      })
      .catch((error) => console.error("Erro ao buscar os dados:", error));
  }, []);

  // Inicializa o orgchart e anexa o evento de drop
  useEffect(() => {
    if (chartData) {
      // Limpa o container antes de inicializar
      $("#chart-container").empty();

      // Inicializa o orgchart com as configurações desejadas
      const oc = $("#chart-container").orgchart({
        data: chartData,
        nodeContent: "title",
        draggable: true,
      });

      // Adiciona o listener para o evento de drop
      oc.$chart.on("nodedrop.orgchart", function (event, extraParams) {
        console.log(
          "draggedNode:" +
            extraParams.draggedNode.children(".title").text() +
            ", dragZone:" +
            extraParams.dragZone.children(".title").text() +
            ", dropZone:" +
            extraParams.dropZone.children(".title").text()
        );
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
