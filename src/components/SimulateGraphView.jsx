import React from "react";
import { useSimulateMatchData } from "../../context/SimulateMatchDataContext";

const SimulateGraphView = () => {
  const { simulatePlotData } = useSimulateMatchData;

  console.log(simulatePlotData);
  return <div>SimulateGraphView</div>;
};

export default SimulateGraphView;
