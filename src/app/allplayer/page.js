import React from "react";
import playersData from "../../../data/player_stats_data.json";
import AllPlayerTable from "@/components/AllPlayerTable";

const AllPlayer = () => {
  return (
    <div className="p-4">
      <AllPlayerTable playersData={playersData} />
    </div>
  );
};

export default AllPlayer;
