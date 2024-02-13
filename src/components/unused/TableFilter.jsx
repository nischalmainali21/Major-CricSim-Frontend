import React from "react";
import { CiSearch } from "react-icons/ci";

const TableFilter = ({ columnFilters, setColumnFilter }) => {
  const playerName =
    columnFilters.find((f) => f.id === "player_name")?.value.toLowerCase() ||
    "";

  const onFilterChange = (id, value) =>
    setColumnFilter((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );
  return (
    <div className="mb-4">
      <div className="relative mt-2 rounded-md shadow-sm w-[250px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <CiSearch className="mr-1" />
          </span>
        </div>
        <input
          type="text"
          name="player"
          id="player"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search player"
          value={playerName}
          onChange={(e) => onFilterChange("player_name", e.target.value)}
        />
      </div>
    </div>
  );
};

export default TableFilter;
