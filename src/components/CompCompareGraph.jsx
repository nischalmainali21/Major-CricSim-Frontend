import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useCompareSelectedPlayers } from "../../context/CompareSelectedPlayersContext";
import all_bat_data from "@/../data/all_bat.json";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  SubTitle
);

function transformData(originalData, labels) {
  return labels.map((label) => originalData[label]);
}

const CompCompareGraph = () => {
  const { allSelectedPlayers } = useCompareSelectedPlayers();
  const labels = [
    "True SR_death",
    "True Avg_death",
    "True SR_middle",
    "True Avg_middle",
    "True SR_powerplay",
    "True Avg_powerplay",
  ];

  const datasets = [];

  allSelectedPlayers.forEach((playerName) => {
    const playerData = all_bat_data[playerName.toLowerCase()];
    if (playerData) {
      const transformedData = transformData(playerData, labels);
      datasets.push({
        label: playerName,
        data: transformedData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
        fill: false,
      });
    }
  });
  const cfg = {
    type: "radar",
    data: {
      labels: labels,
      datasets: datasets,
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "True Stats Overview",
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
  return datasets.length > 0 && <Radar data={cfg.data} options={cfg.options} />;
};

export default CompCompareGraph;
