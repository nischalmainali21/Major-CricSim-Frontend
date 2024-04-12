"use client";
import React, { useState } from "react";
import { useTeamData } from "../../context/TeamContext";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const AllPlayerSubmitTeamData = () => {
  const {
    firstTeamData,
    secondTeamData,
    venue,
    setVersusFirstInningsData,
    setVersusSecondInningsData,
  } = useTeamData();

  const disableButton =
    firstTeamData.length === 11 && secondTeamData.length === 11 && venue !== ""
      ? false
      : true;

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitTeamData = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:8000/api/team-api/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        team1: firstTeamData,
        team2: secondTeamData,
        venue_name: venue,
      }),
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const versusData = await res.json();
    setVersusFirstInningsData(versusData["innings1"]);
    setVersusSecondInningsData(versusData["innings2"]);
    toast.success("Match Sucessfully Simulated");
    setIsLoading(false);
  };
  return (
    <>
      <Button
        // disabled={disableButton || isLoading}
        disabled
        onClick={handleSubmitTeamData}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Simulate a Match
      </Button>
      <span>Disabled, required connection with backend, clone repo</span>
    </>
  );
};

export default AllPlayerSubmitTeamData;
