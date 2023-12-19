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

const PlayerChart = ({
  firstPlayerStats,
  firstPlayerName,
  secondPlayerStats,
  secondPlayerName,
}) => {
  // console.log(firstPlayerStats);
  const firstChartStats = new Object({
    battingStrikeRate: firstPlayerStats["strike_rate_x"],
    battingAverage: firstPlayerStats["batting_average"],
    explosivityRating: firstPlayerStats["explosivity_rating"],
    bowlingStrikeRate: firstPlayerStats["strike_rate_y"],
    bowlingAverage: firstPlayerStats["bowling_average"],
    economy: firstPlayerStats["economy"],
  });

  const secondChartStats = new Object({
    battingStrikeRate: secondPlayerStats["strike_rate_x"],
    battingAverage: secondPlayerStats["batting_average"],
    explosivityRating: secondPlayerStats["explosivity_rating"],
    bowlingStrikeRate: secondPlayerStats["strike_rate_y"],
    bowlingAverage: secondPlayerStats["bowling_average"],
    economy: secondPlayerStats["economy"],
  });
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
        label: `${firstPlayerName} Stats`,
        data: [
          scaleValue(firstChartStats.battingStrikeRate, 0, 400, 0, 20),
          scaleValue(firstChartStats.battingAverage, 0, 88, 0, 20),
          scaleValue(firstChartStats.explosivityRating, 0, 1, 0, 20),
          scaleValue(firstChartStats.bowlingStrikeRate, 0, 85, 0, 20),
          scaleValue(firstChartStats.bowlingAverage, 0, 126, 0, 20),
          scaleValue(firstChartStats.economy, 0, 36, 0, 20),
        ],
        backgroundColor: "rgba(37,186,142, 0.2)",
        borderColor: "rgba(155, 99, 132, 1)",
        borderWidth: 2,
      },
      {
        label: `${secondPlayerName} Stats`,
        data: [
          scaleValue(secondChartStats.battingStrikeRate, 0, 400, 0, 20),
          scaleValue(secondChartStats.battingAverage, 0, 88, 0, 20),
          scaleValue(secondChartStats.explosivityRating, 0, 1, 0, 20),
          scaleValue(secondChartStats.bowlingStrikeRate, 0, 85, 0, 20),
          scaleValue(secondChartStats.bowlingAverage, 0, 126, 0, 20),
          scaleValue(secondChartStats.economy, 0, 36, 0, 20),
        ],
        backgroundColor: "rgba(255, 1, 132, 0.2)",
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
