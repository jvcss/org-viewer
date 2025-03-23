import React, { useEffect, useRef, useState } from "react";
import "orgchart";
import $ from "jquery";
import "./App.css";
import "./jquery.orgchart.css";

const OrgChartCom = () => {
  const chartContainerRef = useRef(null);
  const [jsonData, setJsonData] = useState(`{
    "name": "CEO",
    "title": "Chief Executive Officer",
    "children": [
      { "name": "CTO", "title": "Chief Technology Officer" },
      { "name": "CFO", "title": "Chief Financial Officer" }
    ]
  }`);

  const initOrgChart = () => {
    if (chartContainerRef.current) {
      chartContainerRef.current.innerHTML = ''; // Limpa o container se necessário
    }
    try {
      const data = JSON.parse(jsonData);
      const chart = new OrgChart({
        data: data,
        nodeContent: 'title'
      });
      chart.render(chartContainerRef.current);
    } catch (error) {
      console.error('JSON inválido:', error);
      alert('O JSON fornecido é inválido!');
    }
  };

  useEffect(() => {
    initOrgChart();
  }, []);

  return (
    <div>
      <h2>Visualizador e Editor de OrgChart</h2>
      <textarea
        rows="10"
        cols="50"
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
      />
      <br />
      <button onClick={initOrgChart}>Atualizar OrgChart</button>
      <div ref={chartContainerRef} style={{ marginTop: '20px' }} />
    </div>
  );
};

export default OrgChartCom;