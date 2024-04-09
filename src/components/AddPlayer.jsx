"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import playersName from "../../data/unique_players.json";
import { cn } from "@/lib/utils";
import {
  PopoverContent,
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCompareSelectedPlayers } from "../../context/CompareSelectedPlayersContext";

const AddPlayer = () => {
  const [open, setOpen] = useState(false);
  const {
    selectedPlayer,
    setSelectedPlayer,
    allSelectedPlayers,
    setAllSelectedPlayers,
  } = useCompareSelectedPlayers();
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between"
          >
            {selectedPlayer
              ? playersName.unique_players.find(
                  (player) => player.toLowerCase() === selectedPlayer
                )
              : "Select Player"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0 h-[350px]">
          <Command>
            <CommandInput placeholder="Search Player..." />
            <CommandEmpty>No Player Found</CommandEmpty>
            <ScrollArea>
              <CommandGroup>
                {playersName.unique_players.map((player) => (
                  <CommandItem
                    key={player}
                    value={player}
                    onSelect={(currentValue) => {
                      setSelectedPlayer(
                        currentValue === player ? "" : currentValue
                      );
                      if (
                        currentValue !== "" &&
                        !allSelectedPlayers.includes(currentValue)
                      ) {
                        setAllSelectedPlayers((prevSelectedPlayers) => [
                          ...prevSelectedPlayers,
                          currentValue,
                        ]);
                        setSelectedPlayer("");
                      }
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedPlayer === player ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {player}
                  </CommandItem>
                ))}
              </CommandGroup>
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>{" "}
    </div>
  );
};

export default AddPlayer;
