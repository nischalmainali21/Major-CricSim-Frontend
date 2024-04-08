"use client";
import React from "react";
import { useTeamData } from "../../context/TeamContext";
import { Button } from "./ui/button";

const AllPlayerSubmitTeamData = () => {
  const { firstTeamData, secondTeamData } = useTeamData();

  return <Button>Simulate a Match</Button>;
};

export default AllPlayerSubmitTeamData;
