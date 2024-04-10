"use client";
import React from "react";
import playersData from "../../../data/player_stats_data.json";
import NewAllPlayerTable from "@/components/NewAllPlayerTable";
import AllPlayerTeamSelection from "@/components/AllPlayerTeamSelection";
import AllPlayerSubmitTeamData from "@/components/AllPlayerSubmitTeamData";
import AllPlayerVenueSelection from "@/components/AllPlayerVenueSelection";
import AllPlayerVersusResultGraph from "@/components/AllPlayerVersusResultGraph";
import { useTeamData } from "../../../context/TeamContext";

const AllPlayer = () => {
  const { versusFirstInningsData } = useTeamData();
  return (
    <div className="p-4">
      <div className="flex flex-col items-start gap-8 w-full">
        <div className="w-full">
          <AllPlayerTeamSelection />
        </div>
        <div className="flex gap-6">
          <AllPlayerVenueSelection />
          <AllPlayerSubmitTeamData />
        </div>
      </div>
      <NewAllPlayerTable playersData={playersData} />
      <div className="flex justify-center items-center">
        {versusFirstInningsData.length > 0 && (
          <div className="relative w-[80vw] ">
            <AllPlayerVersusResultGraph />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPlayer;
