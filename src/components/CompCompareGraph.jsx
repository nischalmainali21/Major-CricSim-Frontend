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
  Colors,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useCompareSelectedPlayers } from "../../context/CompareSelectedPlayersContext";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
  SubTitle,
  Colors
);

function transformData(originalData, labels) {
  return labels.map((label) => originalData[label]);
}

// Function to min-max scale the values
const minMaxScale = (value, min, max) => {
  return (value - min) / (max - min);
};

const CompCompareGraph = ({ allPlayerData, labels, chartTitle }) => {
  const { allSelectedPlayers } = useCompareSelectedPlayers();
  const datasets = [];

  if (allSelectedPlayers.length > 0) {
    //single player selected, do not scale
    if (allSelectedPlayers.length === 1) {
      allSelectedPlayers.forEach((playerName) => {
        const playerData = allPlayerData[playerName.toLowerCase()];

        if (playerData) {
          const transformedData = transformData(playerData, labels);
          datasets.push({
            label: playerName,
            data: transformedData,
            borderWidth: 1,
            fill: true,
          });
        }
      });
    }
    // more than one player selected, use the min max scaling
    else {
      const metrics = Object.keys(allPlayerData[allSelectedPlayers[0]]);
      const minMaxValues = {};
      metrics.forEach((metric) => {
        const values = allSelectedPlayers.map((player) => {
          const playerData = allPlayerData[player];
          if (playerData) {
            return allPlayerData[player][metric];
          }
        });
        minMaxValues[metric] = {
          min: Math.min(...values),
          max: Math.max(...values),
        };
      });

      // Scale the values for each player
      const scaledPlayerData = {};
      allSelectedPlayers.forEach((player) => {
        scaledPlayerData[player] = {};
        metrics.forEach((metric) => {
          if (allPlayerData[player]) {
            const value = allPlayerData[player][metric];
            const { min, max } = minMaxValues[metric];
            scaledPlayerData[player][metric] = minMaxScale(value, min, max);
          }
        });
      });
      allSelectedPlayers.forEach((playerName) => {
        const playerData = scaledPlayerData[playerName.toLowerCase()];
        if (playerData) {
          const transformedData = transformData(playerData, labels);
          datasets.push({
            label: playerName,
            data: transformedData,
            // borderColor: "rgba(255, 99, 132, 1)",
            // backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderWidth: 1,
            fill: true,
          });
        }
      });
    }
  }

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
        colors: {
          forceOverride: true,
        },
      },
    },
  };
  return datasets.length > 0 && <Radar data={cfg.data} options={cfg.options} />;
};

export default CompCompareGraph;
