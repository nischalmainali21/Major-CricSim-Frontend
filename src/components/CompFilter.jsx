"use client";
import React from "react";
import { labeledPlayerStats, battingStats, bowlingStats } from "@/lib/constant";
import { useSelectedFilters } from "../../context/SelectedFiltersContext";
import CompSelectFilter from "./CompSelectFilter";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const CompFilter = () => {
  //holds the currently selected filter
  const [isOpenBat, setIsOpenBat] = React.useState(false);
  const [isOpenBowl, setIsOpenBowl] = React.useState(false);
  const { selectedFilters, setSelectedFilters } = useSelectedFilters();

  const filteredBattingStats = Object.fromEntries(
    Object.entries(labeledPlayerStats).filter(([key, _]) =>
      battingStats.includes(key)
    )
  );
  const filteredBowlingStats = Object.fromEntries(
    Object.entries(labeledPlayerStats).filter(([key, _]) =>
      bowlingStats.includes(key)
    )
  );

  /**
   * Handles the change event when a checkbox filter is clicked.
   * Toggles the selection state of the specified filter.
   * @param {string} filter value associated with the checkbox that was clicked
   *                        Represents the filter that needs to be toggled.
   */
  const handleFilterChange = (filter) => {
    // If the selected filters array already includes the filter, remove it
    // Otherwise, add the filter to the selected filters array
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* batting */}
      <div>
        <Collapsible
          open={isOpenBat}
          onOpenChange={setIsOpenBat}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Batting Stats</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2 flex flex-col justify-center ml-6 ">
            <ScrollArea className="border rounded-sm p-4 h-[430px]">
              <div className="flex flex-col gap-2">
                {Object.entries(filteredBattingStats).map(
                  ([stat, { LabelName }]) => (
                    <CompSelectFilter
                      key={stat}
                      stat={stat}
                      LabelName={LabelName}
                      selectedFilters={selectedFilters}
                      handleFilterChange={handleFilterChange}
                    />
                  )
                )}
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>
      </div>
      {/* bowling */}
      <div>
        <Collapsible
          open={isOpenBowl}
          onOpenChange={setIsOpenBowl}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">Bowling Stats</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-2 flex flex-col justify-center ml-6 ">
            <ScrollArea className="border rounded-sm p-4 h-[430px]">
              <div className="flex flex-col gap-2">
                {Object.entries(filteredBowlingStats).map(
                  ([stat, { LabelName }]) => (
                    <CompSelectFilter
                      key={stat}
                      stat={stat}
                      LabelName={LabelName}
                      selectedFilters={selectedFilters}
                      handleFilterChange={handleFilterChange}
                    />
                  )
                )}
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default CompFilter;
