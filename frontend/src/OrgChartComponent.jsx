import React, { useEffect } from "react";
import "orgchart";
import $ from "jquery";
import "./App.css";
import "./jquery.orgchart.css";

const OrgChartComponent = () => {
  useEffect(() => {
    $("#chart-container").empty();
    $("#chart-container").orgchart({
      data: {
        id: "1",
        name: "CEO",
        title: "general manager",
        children: [{ id: "2", name: "CTO", title: "department manager" }],
      },
      //verticalLevel: 8,
      nodeContent: "title",
    });

    // Função de cleanup: limpa o container ao desmontar o componente
    return () => {
      $("#chart-container").empty();
    };
  }, []);

  return <div id="chart-container" />;
};

export default OrgChartComponent;
