// import PlayerCard from "../components/PlayerCard";

import { PlayerComparision } from "./playercomparision/page";

export default function Home() {
  // const selectedPlayers = ["A Ashish Reddy", "A Badoni"];

  // const testPlayer = "A Ashish Reddy";
  // console.log(playersData[testPlayer]);
  return (
    <main>
      {/* <div className="flex flex-col gap-10">
        {selectedPlayers.map((playerName) => (
          <PlayerCard
            key={playerName}
            playerStats={playersData[playerName]}
            playerName={playerName}
          />
        ))}
      </div> */}
      <PlayerComparision />
    </main>
  );
}
