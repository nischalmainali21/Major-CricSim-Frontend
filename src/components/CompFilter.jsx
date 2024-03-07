"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { labeledPlayerStats, battingStats, bowlingStats } from "@/lib/constant";

const CompFilter = () => {
  //holds the currently selected filter
  const [selectedFilters, setSelectedFilters] = React.useState([]);

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

  console.log(selectedFilters);

  return (
    <div className="flex flex-col">
      <div>
        <h1>Batting Stats</h1>
        <ScrollArea>
          <div>
            {Object.entries(filteredBattingStats).map(
              ([stat, { LabelName }]) => (
                <div key={stat} className="items-top flex space-x-2">
                  <Checkbox
                    name={stat}
                    value={stat}
                    checked={selectedFilters.includes(stat)}
                    onCheckedChange={() => handleFilterChange(stat)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={stat}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {LabelName}
                    </label>
                  </div>
                </div>
              )
            )}
          </div>
        </ScrollArea>
      </div>
      <div>
        <h1>Bowling Stats</h1>
        <ScrollArea>
          <div>
            {Object.entries(filteredBowlingStats).map(
              ([stat, { LabelName }]) => (
                <div key={stat} className="items-top flex space-x-2">
                  <Checkbox
                    name={stat}
                    value={stat}
                    checked={selectedFilters.includes(stat)}
                    onCheckedChange={() => handleFilterChange(stat)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={stat}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {LabelName}
                    </label>
                  </div>
                </div>
              )
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CompFilter;
