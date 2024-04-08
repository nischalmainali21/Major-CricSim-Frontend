import React from "react";
import playersData from "../../../data/player_stats_data.json";
import NewAllPlayerTable from "@/components/NewAllPlayerTable";
import AllPlayerTeams from "@/components/AllPlayerTeams";

const AllPlayer = () => {
  return (
    <div className="p-4">
      <AllPlayerTeams />
      <NewAllPlayerTable playersData={playersData} />
    </div>
  );
};

export default AllPlayer;
