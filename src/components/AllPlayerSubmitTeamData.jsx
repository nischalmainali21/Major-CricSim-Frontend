"use client";
import React from "react";
import { useTeamData } from "../../context/TeamContext";
import { Button } from "./ui/button";

const AllPlayerSubmitTeamData = () => {
  const { firstTeamData, secondTeamData, venue } = useTeamData();
  const disableButton =
    firstTeamData.length === 11 && secondTeamData.length === 11 && venue !== ""
      ? false
      : true;

  const handleSubmitTeamData = async () => {
    // console.log(
    //   "firstTeamData",
    //   firstTeamData,
    //   "secondTeamData",
    //   secondTeamData
    // );
    // alert(
    //   `firstTeamData", ${firstTeamData}, "secondTeamData", ${secondTeamData}`
    // );
    const res = await fetch("http://localhost:8000/api/team-api/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        team1: firstTeamData,
        team2: secondTeamData,
        venue: venue,
      }),
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    console.log(res.json());
  };
  return (
    <Button disabled={disableButton} onClick={handleSubmitTeamData}>
      Simulate a Match
    </Button>
  );
};

export default AllPlayerSubmitTeamData;
