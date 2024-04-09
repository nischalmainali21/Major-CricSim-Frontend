import React from "react";
import CompCompareGraph from "./CompCompareGraph";

import all_bat_data from "@/../data/all_bat.json";
import all_bowl_data from "@/../data/all_bowl.json";

const graphsData = [
  {
    allPlayerData: all_bat_data,
    labels: [
      "True SR_death",
      "True Avg_death",
      "True SR_middle",
      "True Avg_middle",
      "True SR_powerplay",
      "True Avg_powerplay",
    ],
    chartTitle: "True Bat Stats Overview",
  },
  {
    allPlayerData: all_bowl_data,
    labels: [
      "True Economy_death",
      "True SR_death",
      "True Economy_middle",
      "True SR_middle",
      "True Economy_powerplay",
      "True SR_powerplay",
    ],
    chartTitle: "True Bowl Stats Overview",
  },
];
const CompCompareGraphAll = () => {
  return (
    <>
      {graphsData.map((item) => (
        <div className="relative h-[500px] w-[500px] " key={item.chartTitle}>
          <CompCompareGraph
            allPlayerData={item.allPlayerData}
            labels={item.labels}
            chartTitle={item.chartTitle}
          />
        </div>
      ))}
    </>
  );
};

export default CompCompareGraphAll;
