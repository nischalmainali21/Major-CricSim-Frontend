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

const PlayerChart = ({ playerStats, playerName }) => {
  const {
    battingStrikeRate,
    battingAverage,
    explosivityRating,
    bowlingStrikeRate,
    bowlingAverage,
    economy,
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
          battingStrikeRate,
          battingAverage,
          explosivityRating,
          bowlingStrikeRate,
          bowlingAverage,
          economy,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
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
