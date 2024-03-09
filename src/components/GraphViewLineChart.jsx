import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  SubTitle,
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

const GraphViewLineChart = ({
  inningData,
  chartTitle,
  actualScore,
  predictedScore,
}) => {
  const transformedData = transformData(inningData);

  const cfg = {
    type: "line",
    data: {
      labels: transformedData.map((dataPoint) => dataPoint.x),
      datasets: [
        {
          label: "Actual Runs",
          data: transformedData.map(({ x, y1 }) => ({ x, y: y1 })),
          borderColor: "rgba(255, 99, 132, 1)",
          fill: false,
        },
        {
          label: "Predicted Runs",
          data: transformedData.map(({ x, y2 }) => ({ x, y: y2 })),
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
          text: `Actual: ${actualScore} Predicted: ${predictedScore}`,
          font: {
            size: 20,
          },
        },
      },
    },
  };
  return <Line data={cfg.data} options={cfg.options} />;
};

export default GraphViewLineChart;
