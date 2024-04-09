import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import StatProgress from "./StatProgress";
import { labeledPlayerStats } from "@/lib/constant";
import { X } from "lucide-react";
import { useSelectedFilters } from "../../context/SelectedFiltersContext";
import { useCompareSelectedPlayers } from "../../context/CompareSelectedPlayersContext";

const NewPlayerCard = ({ playerName, playerStats, StandardStats }) => {
  const { selectedFilters } = useSelectedFilters();
  const { setAllSelectedPlayers } = useCompareSelectedPlayers();

  function handleRemovePlayer() {
    setAllSelectedPlayers((prevSelectedPlayers) =>
      prevSelectedPlayers.filter(
        (player) => player !== playerName.toLowerCase()
      )
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {playerName}
          <span className="cursor-pointer" onClick={handleRemovePlayer}>
            <X />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {Object.entries(labeledPlayerStats)
            .filter(([stat]) => selectedFilters.includes(stat))
            .map(([stat, { LabelName }]) => (
              <StatProgress
                key={stat}
                labelName={LabelName}
                statName={stat}
                statValue={playerStats[stat]}
                standardStatValue={StandardStats[stat]}
              />
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewPlayerCard;
