"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { getData } from "../../../actions/matchdata";
import { useSimulateMatchData } from "../../../context/SimulateMatchDataContext";
import SimulateTabs from "@/components/SimulateTabs";

function Simulate() {
  const {
    simulateMatchData,
    setSimulateMatchData,
    setSimulateMatchFirstInningData,
    setSimulateMatchSecondInningData,
  } = useSimulateMatchData();
  async function handleClick() {
    try {
      const newData = await getData();
      const { 1: firstData, 2: secondData } = newData[1312199];
      setSimulateMatchData(newData);
      setSimulateMatchFirstInningData(firstData);
      setSimulateMatchSecondInningData(secondData);
    } catch (error) {
      console.log("error fetchin data", error);
    }
  }
  // console.log(simulateMatchData);
  // console.log(simulateMatchFirstInningData, simulateMatchSecondInningData);
  return (
    <div className="relative">
      <Button onClick={handleClick} className="absolute right-16">
        Simualte a Match
      </Button>
      {simulateMatchData && (
        <SimulateTabs simulateMatchData={simulateMatchData} />
      )}
    </div>
  );
}

export default Simulate;
