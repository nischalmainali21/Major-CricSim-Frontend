"use client";
import React from "react";
import { labeledPlayerStats, battingStats, bowlingStats } from "@/lib/constant";
import { useSelectedFilters } from "../../context/SelectedFiltersContext";
import CompCollapsibleFilter from "./CompCollapsibleFilter";

const CompFilter = () => {
  //holds the currently selected filter
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
  const ActiveStats = Object.fromEntries(
    Object.entries(labeledPlayerStats).filter(([key, _]) =>
      selectedFilters.includes(key)
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
      <div>
        <CompCollapsibleFilter
          title="Active Stats"
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          filteredStats={ActiveStats}
        />
      </div>
      <div>
        <CompCollapsibleFilter
          title="Batting Stats"
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          filteredStats={filteredBattingStats}
        />
      </div>
      <div>
        <CompCollapsibleFilter
          title="Bowling Stats"
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          filteredStats={filteredBowlingStats}
        />
      </div>
    </div>
  );
};

export default CompFilter;
