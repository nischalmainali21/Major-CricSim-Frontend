"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { getData, getPlotData } from "../../../actions/matchdata";
import { useSimulateMatchData } from "../../../context/SimulateMatchDataContext";
import SimulateTabs from "@/components/SimulateTabs";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
function Simulate() {
  const {
    simulateMatchData,
    setSimulateMatchData,
    setSimulateMatchFirstInningData,
    setSimulateMatchSecondInningData,
    setSimulatePlotData,
  } = useSimulateMatchData();
  const [isLoading, setisLoading] = useState(false);
  async function handleClick() {
    try {
      setisLoading(true);
      const newData = await getData();
      const plotData = await getPlotData();
      const matchID = Object.keys(newData);
      // console.log(matchID);
      const { 1: firstData, 2: secondData } = newData[matchID[0]];
      setSimulateMatchData(newData);
      setSimulateMatchFirstInningData(firstData);
      setSimulateMatchSecondInningData(secondData);
      setSimulatePlotData(plotData);
      toast.success("Match Sucessfully Simulated");
      setisLoading(false);
    } catch (error) {
      console.log("error fetchin data", error);
    }
  }
  // console.log(simulateMatchData);
  // console.log(simulateMatchFirstInningData, simulateMatchSecondInningData);
  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        disabled={isLoading}
        className="absolute right-16"
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Simualte a Match
      </Button>
      {simulateMatchData && (
        <SimulateTabs simulateMatchData={simulateMatchData} />
      )}
    </div>
  );
}

export default Simulate;
