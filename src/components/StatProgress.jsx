import React from "react";
import { lowerBetterStats } from "@/lib/constant";
import { Progress } from "./ui/progress";
const StatProgress = ({
  labelName,
  statName,
  statValue,
  standardStatValue,
}) => {
  // console.log(labelName, standardStatValue);
  // console.log(statName);
  let progressColor = "";
  if (lowerBetterStats.includes(statName)) {
    // console.log("thelowerbetterstastnaem", statName);
    if (standardStatValue / statValue < 0.4) {
      progressColor = "bg-red-700";
    } else if (standardStatValue / statValue < 0.99) {
      progressColor = "bg-yellow-800";
    } else {
      progressColor = "bg-green-800";
    }
  } else {
    // console.log("somehowenteasdfa", statName);
    if (statValue / standardStatValue > 0.99) {
      progressColor = "bg-green-800";
    } else if (statValue / standardStatValue > 0.55) {
      progressColor = "bg-yellow-800";
    } else {
      progressColor = "bg-red-700";
    }
  }

  let progressValue;
  if (lowerBetterStats.includes(statName)) {
    progressValue = (standardStatValue / statValue) * 100;
  } else {
    progressValue = (statValue / standardStatValue) * 100;
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span>{labelName}</span>
        <span>{statValue}</span>
      </div>
      <div>
        <Progress value={progressValue} className={`${progressColor}`} />
      </div>
    </div>
  );
};

export default StatProgress;
