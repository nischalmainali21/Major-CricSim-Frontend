"use client";
import React, { useState } from "react";
import playersData from "../../../data/player_stats_data.json";
import PlayerTable from "@/components/PlayerTable";
import Filter from "@/components/Filter";

export const PlayerComparision = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <div>
      <Filter
        selectedPlayer={selectedPlayer}
        setSelectedPlayer={setSelectedPlayer}
        playerStatsData={playersData}
      />
      {/* <div className="flex flex-col gap-10">
        {selectedPlayer.map((playerName) => (
          <PlayerTable
            key={playerName}
            playerStats={playersData[playerName]}
            playerName={playerName}
          />
        ))}
      </div> */}
    </div>
  );
};
