import React from "react";
import { useSimulateMatchData } from "../../context/SimulateMatchDataContext";
import FirstViewInning from "./FirstViewInning";
const SimulateFirstView = () => {
  const { simulateMatchFirstInningData, simulateMatchSecondInningData } =
    useSimulateMatchData();

  return (
    <section className="flex gap-44 justify-center items-start">
      <FirstViewInning
        inningTitle="First Innings"
        inningData={simulateMatchFirstInningData}
      />
      <FirstViewInning
        inningTitle="Second Innings"
        inningData={simulateMatchSecondInningData}
      />
    </section>
  );
};

export default SimulateFirstView;
