"use client";
import React from "react";
import { useTeamData } from "../../context/TeamContext";
import AllPlayerTeamList from "./AllPlayerTeamList";

const AllPlayerTeams = () => {
  const { firstTeamData, setFirstTeamData, secondTeamData, setSecondTeamData } =
    useTeamData();

  const removePlayerTeam = (playerName) => {
    setFirstTeamData((prevData) =>
      prevData.filter((player) => player !== playerName)
    );
  };
  return (
    <div className="flex justify-around">
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

export default AllPlayerTeams;
