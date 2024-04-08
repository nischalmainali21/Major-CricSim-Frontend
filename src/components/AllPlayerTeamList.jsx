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
import { ScrollArea } from "@/components/ui/scroll-area";
const AllPlayerTeamList = ({ title, teamData, setTeamData }) => {
  const removePlayerTeam = (playerName) => {
    setTeamData((prevData) =>
      prevData.filter((player) => player !== playerName)
    );
  };

  return (
    <Card className="w-[400px] max-h-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] w-full rounded-md border p-2">
          <div className="flex flex-col gap-2 ">
            {teamData.map((playerName) => (
              <div
                key={playerName}
                className="flex justify-between  gap-4 items-center border border-solid w-[250px] rounded-lg bg-card text-card-foreground shadow-sm p-2"
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
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AllPlayerTeamList;
