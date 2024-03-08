import React from "react";
import { useSimulateMatchData } from "../../context/SimulateMatchDataContext";
import FirstViewOneOver from "./FirstViewOneOver";

const SimulateFirstView = () => {
  const { simulateMatchFirstInningData } = useSimulateMatchData();

  return (
    <div className="flex flex-col gap-10">
      {Object.entries(simulateMatchFirstInningData).map(([over, rest]) => (
        <div key={`first_inning_${over}`} className="flex gap-10 ">
          <div className="flex">
            <span>Over Number:</span>
            {over}
          </div>
          <FirstViewOneOver overData={rest} />
        </div>
      ))}
    </div>
  );
};

export default SimulateFirstView;
