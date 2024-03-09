import React from "react";
import { useSimulateMatchData } from "../../context/SimulateMatchDataContext";
import GraphViewLineChart from "./GraphViewLineChart";

const SimulateGraphView = () => {
  const { simulatePlotData } = useSimulateMatchData();
  const { inning1_data, inning2_data } = simulatePlotData;
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <div className="relative w-[60vw] h-[600px]">
        <GraphViewLineChart inningData={inning1_data} chartTitle="Inning 1" />
      </div>
      <div className="relative w-[60vw] h-[600px]">
        <GraphViewLineChart inningData={inning2_data} chartTitle="Inning 2" />
      </div>
      {/* <Line data={cfg.data} /> */}
    </div>
  );
};

export default SimulateGraphView;
