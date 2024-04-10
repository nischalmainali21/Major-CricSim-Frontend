"use client";
import React from "react";
import { useTeamData } from "../../context/TeamContext";
import AllPlayerTeamList from "./AllPlayerTeamList";

const AllPlayerTeamSelection = () => {
  const { firstTeamData, setFirstTeamData, secondTeamData, setSecondTeamData } =
    useTeamData();

  return (
    <div className="flex flex-col gap-4">
      <AllPlayerTeamList
        title="First Team"
        teamData={firstTeamData}
        setTeamData={setFirstTeamData}
      />
      <AllPlayerTeamList
        title="Second Team"
        teamData={secondTeamData}
        setTeamData={setSecondTeamData}
      />
    </div>
  );
};

export default AllPlayerTeamSelection;
