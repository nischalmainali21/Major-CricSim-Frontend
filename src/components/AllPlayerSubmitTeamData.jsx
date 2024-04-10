"use client";
import React from "react";
import { useTeamData } from "../../context/TeamContext";
import { Button } from "./ui/button";

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

  const handleSubmitTeamData = async () => {
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
  };
  return (
    <Button disabled={disableButton} onClick={handleSubmitTeamData}>
      Simulate a Match
    </Button>
  );
};

export default AllPlayerSubmitTeamData;
