import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function transformData(originalData) {
  return originalData.map(
    ({
      current_ball_number,
      cumulative_actual_runs,
      predicted_current_score,
    }) => ({
      x: current_ball_number,
      y1: cumulative_actual_runs,
      y2: predicted_current_score,
    })
  );
}

const CompCompareGraph = () => {
  const transformedData = transformData(test);
  const cfg = {
    type: "radar",
    data: {
      labels: transformedData.map((dataPoint) => dataPoint.x),
      datasets: [
        {
          label: "",
          data: ,
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
        },
        {
          label: "",
          data: ,
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: chartTitle,
          font: {
            size: 30,
          },
        },
        subtitle: {
          display: true,
          text: ``,
          font: {
            size: 20,
          },
        },
      },
    },
  };
  return <Radar data={cfg.data} options={cfg.options} />;
};

export default CompCompareGraph;
