import React from "react";

import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
const AllPlayerTeamList = ({ title, teamData, setTeamData }) => {
  const removePlayerTeam = (playerName) => {
    setTeamData((prevData) =>
      prevData.filter((player) => player !== playerName)
    );
  };

  function handleResetTeam() {
    setTeamData([]);
  }

  return (
    <Card className="h-[320px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Selected {teamData.length}/11</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 xl:grid-cols-7 gap-4">
          {teamData.map((playerName) => (
            <div
              key={playerName}
              className="flex justify-between  gap-1 items-center border border-solid w-[200px] rounded-lg bg-card text-card-foreground shadow-sm p-2"
            >
              {playerName}
              <X
                size={16}
                onClick={() => removePlayerTeam(playerName)}
                className="cursor-pointer"
              />
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex-row-reverse">
        {teamData.length > 0 && (
          <Button variant="destructive" onClick={handleResetTeam}>
            Reset
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AllPlayerTeamList;
