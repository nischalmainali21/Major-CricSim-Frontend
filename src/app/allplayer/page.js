import React from "react";
import playersData from "../../../data/player_stats_data.json";
import NewAllPlayerTable from "@/components/NewAllPlayerTable";
import AllPlayerTeamSelection from "@/components/AllPlayerTeamSelection";

const AllPlayer = () => {
  return (
    <div className="p-4">
      <AllPlayerTeamSelection />
      <NewAllPlayerTable playersData={playersData} />
    </div>
  );
};

export default AllPlayer;
