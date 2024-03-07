import React from "react";
import { Checkbox } from "./ui/checkbox";

const CompSelectFilter = ({
  stat,
  LabelName,
  selectedFilters,
  handleFilterChange,
}) => {
  return (
    <div key={stat} className="items-top flex space-x-2">
      <Checkbox
        name={stat}
        value={stat}
        checked={selectedFilters.includes(stat)}
        onCheckedChange={() => handleFilterChange(stat)}
      />
      <div
        className="grid gap-1.5 leading-none"
        onClick={() => handleFilterChange(stat)}
      >
        <label
          htmlFor={stat}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {LabelName}
        </label>
      </div>
    </div>
  );
};

export default CompSelectFilter;
