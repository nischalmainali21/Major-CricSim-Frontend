"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { getData } from "../../../actions/matchdata";
import { useSimulateMatchData } from "../../../context/SimulateMatchDataContext";

function Simulate() {
  const { simulateMatchData, setSimulateMatchData } = useSimulateMatchData();
  async function handleClick() {
    try {
      const newData = await getData();
      setSimulateMatchData(newData);
    } catch (error) {
      console.log("error fetchin data", error);
    }
  }
  console.log(simulateMatchData);
  return (
    <div>
      <Button onClick={handleClick}>Simualte a Match</Button>
    </div>
  );
}

export default Simulate;
// onClick={handleClick()}
