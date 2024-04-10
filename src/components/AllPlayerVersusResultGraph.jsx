import React from "react";
import { useTeamData } from "../../context/TeamContext";
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

const AllPlayerVersusResultGraph = () => {
  const { versusFirstInningsData, versusSecondInningsData } = useTeamData();

  const ballNumbers = Array.from({ length: 121 }, (_, index) => index);
  const firstInningsCumulativeRuns = versusFirstInningsData.map(
    (item) => item.cumulative_runs
  );
  const secondInningsCumulativeRuns = versusSecondInningsData.map(
    (item) => item.cumulative_runs
  );
  const firstTeamTotalRun = firstInningsCumulativeRuns.slice(-1);
  const secondTeamTotalRun = secondInningsCumulativeRuns.slice(-1);
  const winnerTeam =
    parseInt(firstTeamTotalRun) === parseInt(secondTeamTotalRun)
      ? "Draw"
      : parseInt(firstTeamTotalRun) > parseInt(secondTeamTotalRun)
      ? "Team 1"
      : "Team 2";
  const cfg = {
    type: "line",
    data: {
      labels: ballNumbers,
      datasets: [
        {
          label: "Team 1 Runs",
          data: firstInningsCumulativeRuns,
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
          fill: false,
        },
        {
          label: "Team 2 Runs",
          data: secondInningsCumulativeRuns,
          borderColor: "rgba(54, 162, 235, 1)",
          tension: 0.1,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Ball Number",
            font: {
              size: 40,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Runs",
            font: {
              size: 40,
            },
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Team 1 vs Team 2 Runs",
          font: {
            size: 30,
          },
        },
        subtitle: {
          display: true,
          text: `Winner:${winnerTeam}${" "} Team 1 Runs:${firstTeamTotalRun}${" "} Team 2 Runs:${secondTeamTotalRun}`,
          font: {
            size: 15,
          },
        },
      },
    },
  };
  return <Line data={cfg.data} options={cfg.options} />;
};

export default AllPlayerVersusResultGraph;
