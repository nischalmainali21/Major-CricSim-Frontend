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

const NewPlayerCard = ({ playerName, playerStats, StandardStats }) => {
  //   console.log(playerStats, StandardStats);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{playerName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {Object.entries(labeledPlayerStats).map(([stat, { LabelName }]) => (
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
