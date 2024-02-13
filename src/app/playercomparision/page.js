"use client";
import React, { useState } from "react";
import playersData from "../../../data/player_stats_data.json";
import PlayerTable from "@/components/unused/PlayerTable";
import Filter from "@/components/unused/Filter";
import PlayerChart from "@/components/unused/PlayerChart";
import TwoPlayerTable from "@/components/unused/TwoPlayerTable";

export const PlayerComparision = () => {
  const items = Object.keys(playersData);
  // console.log(items[Math.floor(Math.random() * items.length)]);
  const [firstSelectedPlayer, setFirstSelectedPlayer] = useState(
    () => items[Math.floor(Math.random() * items.length)]
  );
  const [secondSelectedPlayer, setSecondSelectedPlayer] = useState(
    () => items[Math.floor(Math.random() * items.length)]
  );

  const selectedPlayers = [firstSelectedPlayer, secondSelectedPlayer];
  // console.log(selectedPlayers.length);

  return (
    <div className="p-4 w-full">
      <div className="font-bold text-xl flex justify-center items-center">
        Compare Players
      </div>
      <div className="flex justify-between mb-6">
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
      <div className="w-full">
        <div className="flex gap-10 justify-center items-center mb-10 w-full">
          {selectedPlayers[0] && selectedPlayers[1] ? (
            <div className="flex flex-col justify-start items-center gap-5 w-full">
              <div className="w-full">
                <TwoPlayerTable
                  firstPlayerStats={playersData[firstSelectedPlayer]}
                  firstPlayerName={firstSelectedPlayer}
                  secondPlayerStats={playersData[secondSelectedPlayer]}
                  secondPlayerName={secondSelectedPlayer}
                />
              </div>
              <div className="">
                <PlayerChart
                  firstPlayerStats={playersData[firstSelectedPlayer]}
                  firstPlayerName={firstSelectedPlayer}
                  secondPlayerStats={playersData[secondSelectedPlayer]}
                  secondPlayerName={secondSelectedPlayer}
                />
              </div>
            </div>
          ) : (
            <div>
              {firstSelectedPlayer && (
                <PlayerTable
                  playerStats={playersData[firstSelectedPlayer]}
                  playerName={firstSelectedPlayer}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
