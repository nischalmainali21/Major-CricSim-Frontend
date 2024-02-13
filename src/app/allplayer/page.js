import React from "react";
import playersData from "../../../data/player_stats_data.json";
import AllPlayerTable from "@/components/AllPlayerTable";
import NewAllPlayerTable from "@/components/NewAllPlayerTable";

const AllPlayer = () => {
  return (
    <div className="p-4">
      <AllPlayerTable playersData={playersData} />
      <NewAllPlayerTable playersData={playersData} />
    </div>
  );
};

export default AllPlayer;
