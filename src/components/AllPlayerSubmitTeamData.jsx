"use client";
import React from "react";
import { useTeamData } from "../../context/TeamContext";
import { Button } from "./ui/button";

const AllPlayerSubmitTeamData = () => {
  const { firstTeamData, secondTeamData } = useTeamData();
  const disableButton =
    firstTeamData.length === 11 && secondTeamData.length === 11 ? false : true;

  const handleSubmitTeamData = async () => {
    console.log(
      "firstTeamData",
      firstTeamData,
      "secondTeamData",
      secondTeamData
    );
    alert(
      `firstTeamData", ${firstTeamData}, "secondTeamData", ${secondTeamData}`
    );
    // const res = await fetch("http://localhost:8000/api/", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     firstTeamData,
    //     secondTeamData,
    //   }),
    // });
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error("Failed to fetch data");
    // }

    // return res.json();
  };
  return (
    <Button disabled={disableButton} onClick={handleSubmitTeamData}>
      Simulate a Match
    </Button>
  );
};

export default AllPlayerSubmitTeamData;
