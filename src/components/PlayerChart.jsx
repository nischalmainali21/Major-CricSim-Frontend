"use client";
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

// export const data = {
//   labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [2, 9, 3, 5, 2, 3],
//       backgroundColor: "rgba(255, 99, 132, 0.2)",
//       borderColor: "rgba(255, 99, 132, 1)",
//       borderWidth: 1,
//     },
//   ],
// };

// Function to scale a value to a new range
const scaleValue = (value, minOld, maxOld, minNew, maxNew) => {
  return ((value - minOld) / (maxOld - minOld)) * (maxNew - minNew) + minNew;
};

const PlayerChart = ({ playerStats, playerName }) => {
  const {
    battingStrikeRate, //400.000000
    battingAverage, //88.000000
    explosivityRating, //1
    bowlingStrikeRate, //85
    bowlingAverage, //126
    economy, //36
  } = playerStats;
  const chartData = {
    labels: [
      "battingStrikeRate",
      "battingAverage",
      "explosivityRating",
      "bowlingStrikeRate",
      "bowlingAverage",
      "economy",
    ],
    datasets: [
      {
        label: `${playerName} Stats`,
        data: [
          scaleValue(battingStrikeRate, 0, 400, 0, 20),
          scaleValue(battingAverage, 0, 88, 0, 20),
          scaleValue(explosivityRating, 0, 1, 0, 20),
          scaleValue(bowlingStrikeRate, 0, 85, 0, 20),
          scaleValue(bowlingAverage, 0, 126, 0, 20),
          scaleValue(economy, 0, 36, 0, 20),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Radar data={chartData} />
    </div>
  );
};

export default PlayerChart;
