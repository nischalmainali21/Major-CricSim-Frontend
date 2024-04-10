import React from "react";
import playersData from "../../../data/player_stats_data.json";
import NewAllPlayerTable from "@/components/NewAllPlayerTable";
import AllPlayerTeamSelection from "@/components/AllPlayerTeamSelection";
import AllPlayerSubmitTeamData from "@/components/AllPlayerSubmitTeamData";
import AllPlayerVenueSelection from "@/components/AllPlayerVenueSelection";

const AllPlayer = () => {
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
    </div>
  );
};

export default AllPlayer;
