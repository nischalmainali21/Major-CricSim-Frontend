"use client";
import React, { useState, useEffect } from "react";
import AddPlayer from "../../components/AddPlayer";
import playersData from "../../../data/player_stats_data.json";
import NewPlayerCard from "@/components/NewPlayerCard";
import playersName from "../../../data/unique_players.json";
import { lowerBetterStats } from "@/lib/constant";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CompFilter from "@/components/CompFilter";
import CompSheetFilter from "@/components/CompSheetFilter";

const StandardStats = {
  batter_matches_played: 0.0,
  runs_scored: 0.0,
  dismissals: 0.0,
  balls_faced: 0.0,
  "0s_scored": 0.0,
  "1s_scored": 0.0,
  "2s_scored": 0.0,
  "4s_scored": 0.0,
  "6s_scored": 0.0,
  high_score: 0.0,
  "25_scored": 0.0,
  "50_scored": 0.0,
  "75_scored": 0.0,
  "100_scored": 0.0,
  strike_rate_x: 0.0,
  batting_average: 0.0,
  notout: 0.0,
  explosivity_rating: 0.0,
  "0_wickets_taken": 0.0,
  "1_wickets_taken": 0.0,
  "2_wickets_taken": 0.0,
  "3_wickets_taken": 0.0,
  "4_wickets_taken": 0.0,
  "5_wickets_taken": 0.0,
  "6_wickets_taken": 0.0,
  bowler_matches_played: 0.0,
  runs_conceded: Infinity,
  extras_runs_conceded: Infinity,
  wickets_taken: 0.0,
  balls_bowled: 0.0,
  "4s_conceded": Infinity,
  "6s_conceded": Infinity,
  "0s_conceded": Infinity,
  "1s_conceded": Infinity,
  "2s_conceded": Infinity,
  highest_conceded: Infinity,
  strike_rate_y: Infinity,
  bowling_average: Infinity,
  economy: Infinity,
  total_runs_conceded: Infinity,
};

function getHighestStats(allPlayers) {
  allPlayers.forEach((playerName) => {
    const matchingPlayer = Object.keys(playersData).find(
      (item) => item.toLowerCase() === playerName.toLowerCase()
    );
    const playerStats = playersData[matchingPlayer];
    // console.log(playerStats);
    Object.keys(playerStats).forEach((stat) => {
      // console.log(stat);

      if (
        lowerBetterStats.includes(stat) &&
        playerStats[stat] < StandardStats[stat]
      ) {
        StandardStats[stat] = playerStats[stat];
      } else if (
        !lowerBetterStats.includes(stat) &&
        playerStats[stat] > StandardStats[stat]
      ) {
        StandardStats[stat] = playerStats[stat];
      }
    });
  });
}

const Comp = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [allSelectedPlayers, setAllSelectedPlayers] = useState([]);
  useEffect(() => {
    if (selectedPlayer !== "" && !allSelectedPlayers.includes(selectedPlayer)) {
      setAllSelectedPlayers((prevSelectedPlayers) => [
        ...prevSelectedPlayers,
        selectedPlayer,
      ]);
      // setSelectedPlayer("");
    }
  }, [selectedPlayer]);
  // console.log(allSelectedPlayers);
  getHighestStats(allSelectedPlayers);
  // console.log(allSelectedPlayers);
  // console.log(StandardStats);
  // playersName.unique_players.find(
  //   (player) => player.toLowerCase() === selectedPlayer
  // );
  return (
    <div className="relative">
      <div className="">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-1">
            <span className="font-thin text-sm">
              Select a player to get started...
            </span>
            <AddPlayer
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          </div>
          <div className="flex gap-6">
            {allSelectedPlayers.map((player) => {
              const actualName = playersName.unique_players.find(
                (item) => item.toLowerCase() === player
              );
              return (
                <NewPlayerCard
                  key={actualName}
                  playerName={actualName}
                  playerStats={playersData[actualName]}
                  StandardStats={StandardStats}
                  setAllSelectedPlayers={setAllSelectedPlayers}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute right-16 top-[24px]">
        <CompSheetFilter />
      </div>
    </div>
  );
};

export default Comp;
