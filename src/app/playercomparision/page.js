"use client";
import React, { useState } from "react";
import playersData from "../../../data/player_stats_data.json";
import PlayerTable from "@/components/PlayerTable";
import Filter from "@/components/Filter";

export const PlayerComparision = () => {
  const [firstSelectedPlayer, setFirstSelectedPlayer] = useState(null);
  const [secondSelectedPlayer, setSecondSelectedPlayer] = useState(null);

  const selectedPlayers = [firstSelectedPlayer, secondSelectedPlayer];
  console.log(selectedPlayers);

  return (
    <div>
      <Filter
        selectedPlayer={firstSelectedPlayer}
        setSelectedPlayer={setFirstSelectedPlayer}
        playerStatsData={playersData}
      />
      <Filter
        selectedPlayer={secondSelectedPlayer}
        setSelectedPlayer={setSecondSelectedPlayer}
        playerStatsData={playersData}
      />
      <div className="flex flex-col gap-10">
        {selectedPlayers.map((playerName) => (
          <PlayerTable
            key={playerName}
            playerStats={playersData[playerName]}
            playerName={playerName}
          />
        ))}
      </div>
    </div>
  );
};
