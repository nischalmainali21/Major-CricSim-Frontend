import React from "react";
import { useSimulateMatchData } from "../../context/SimulateMatchDataContext";
import GraphViewLineChart from "./GraphViewLineChart";

const SimulateGraphView = () => {
  const { simulatePlotData } = useSimulateMatchData();
  const {
    inning1_data,
    inning2_data,
    team_1,
    team_2,
    season,
    inning1_actual_total_run,
    inning1_predicted_total_run,
    inning2_actual_total_run,
    inning2_predicted_total_run,
  } = simulatePlotData;
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h4>
        {team_1} vs {team_2} in {season}
      </h4>
      <div className="relative w-[60vw] h-[600px]">
        <GraphViewLineChart
          inningData={inning1_data}
          chartTitle="Inning 1"
          actualScore={inning1_actual_total_run}
          predictedScore={inning1_predicted_total_run}
        />
      </div>
      <div className="relative w-[60vw] h-[600px]">
        <GraphViewLineChart
          inningData={inning2_data}
          chartTitle="Inning 2"
          actualScore={inning2_actual_total_run}
          predictedScore={inning2_predicted_total_run}
        />
      </div>
      {/* <Line data={cfg.data} /> */}
    </div>
  );
};

export default SimulateGraphView;
