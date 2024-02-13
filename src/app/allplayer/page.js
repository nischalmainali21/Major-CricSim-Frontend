import React from "react";
import playersData from "../../../data/player_stats_data.json";
import NewAllPlayerTable from "@/components/NewAllPlayerTable";

const AllPlayer = () => {
  return (
    <div className="p-4">
      <NewAllPlayerTable playersData={playersData} />
    </div>
  );
};

export default AllPlayer;
