import React from "react";
import PlayerBattingTable from "./PlayerBattingTable";
import PlayerBowlingTable from "./PlayerBowlingTable";

const PlayerTable = ({ playerStats, playerName }) => {
  return (
    <div>
      <PlayerBattingTable playerStats={playerStats} playerName={playerName} />
      <PlayerBowlingTable playerStats={playerStats} playerName={playerName} />
    </div>
  );
};

export default PlayerTable;
