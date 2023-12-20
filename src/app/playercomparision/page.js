"use client";
import React, { useState } from "react";
import playersData from "../../../data/player_stats_data.json";
import PlayerTable from "@/components/PlayerTable";
import Filter from "@/components/Filter";
import PlayerChart from "@/components/PlayerChart";

export const PlayerComparision = () => {
  const [firstSelectedPlayer, setFirstSelectedPlayer] =
    useState("A Ashish Reddy");
  const [secondSelectedPlayer, setSecondSelectedPlayer] = useState(null);

  const selectedPlayers = [firstSelectedPlayer, secondSelectedPlayer];
  //   console.log(selectedPlayers);

  return (
    <div className="p-4 w-full">
      <div className="font-bold text-xl flex justify-center items-center">
        Compare Players
      </div>
      <div className="flex justify-around mb-2">
        <div className="flex flex-col gap-1">
          <h2>Select First Player:</h2>
          <Filter
            key={"first"}
            selectedPlayer={firstSelectedPlayer}
            setSelectedPlayer={setFirstSelectedPlayer}
            playerStatsData={playersData}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2>Select Second Player:</h2>
          <Filter
            key={"second"}
            selectedPlayer={secondSelectedPlayer}
            setSelectedPlayer={setSecondSelectedPlayer}
            playerStatsData={playersData}
          />
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col gap-10 justify-center items-center mb-10">
          <div>
            {firstSelectedPlayer && (
              <PlayerTable
                playerStats={playersData[firstSelectedPlayer]}
                playerName={firstSelectedPlayer}
              />
            )}
          </div>
          <div>
            {secondSelectedPlayer && (
              <PlayerTable
                playerStats={playersData[secondSelectedPlayer]}
                playerName={secondSelectedPlayer}
              />
            )}
          </div>
        </div>

        <div className="">
          {selectedPlayers[0] && selectedPlayers[1] && (
            <PlayerChart
              firstPlayerStats={playersData[firstSelectedPlayer]}
              firstPlayerName={firstSelectedPlayer}
              secondPlayerStats={playersData[secondSelectedPlayer]}
              secondPlayerName={secondSelectedPlayer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
