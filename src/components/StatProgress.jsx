import React from "react";
import { lowerBetterStats } from "@/lib/constant";
import { Progress } from "./ui/progress";

function getProgressColor(standardStatValue, statValue, statName) {
  let progressColor = "";
  if (standardStatValue == null) {
    progressColor = "bg-green-800";
  } else {
    if (lowerBetterStats.includes(statName)) {
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
  }
  return progressColor;
}

function getProgressValue(standardStatValue, statValue, statName) {
  let progressValue;
  if (statValue !== null && standardStatValue == null) {
    progressValue = 100;
  } else {
    if (lowerBetterStats.includes(statName)) {
      progressValue = (standardStatValue / statValue) * 100;
    } else {
      progressValue = (statValue / standardStatValue) * 100;
    }
  }
  return progressValue;
}

const StatProgress = ({
  labelName,
  statName,
  statValue,
  standardStatValue,
}) => {
  let progressColor = getProgressColor(standardStatValue, statValue, statName);
  let progressValue = getProgressValue(standardStatValue, statValue, statName);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span>{labelName}</span>
        <span>{statValue == null ? "--" : statValue}</span>
      </div>
      <div>
        <Progress value={progressValue} className={`${progressColor}`} />
      </div>
    </div>
  );
};

export default StatProgress;
