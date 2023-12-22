"use client";
import React, { useState, useEffect } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableFilter from "./TableFilter";

const columns = [
  {
    accessorKey: "player_name",
    header: "Player",
    cell: (props) => <p>{props?.getValue()}</p>,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "batter_matches_played",
    header: "Matches Played",
    cell: (props) => <p>{props?.getValue()}</p>,
  },
  {
    accessorKey: "runs_scored",
    header: "Runs Scored",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "batting_average",
    header: "Batting Avg",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "strike_rate_x",
    header: "Strike Rate",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "explosivity_rating",
    header: "Explosivity",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "50_scored",
    header: "Half Century",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "100_scored",
    header: "Century",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "bowler_matches_played",
    header: "Matches Played",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "runs_conceded",
    header: "Runs Conceded",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "bowling_average",
    header: "Bowling Avg",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "strike_rate_y",
    header: "Strike Rate",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "economy",
    header: "Economy",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "wickets_taken",
    header: "Wickets Taken",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "balls_bowled",
    header: "Balls Bowled",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const AllPlayerTable = ({ playersData }) => {
  const [data, setData] = useState(() => []);
  const [columnFilters, setColumnFilter] = useState([]);

  useEffect(() => {
    const newList = [];
    for (const [key, value] of Object.entries(playersData)) {
      // Create a new object with the key as a property
      const newObject = { player_name: key, ...value };
      newList.push(newObject);
    }

    setData(newList);
  }, []);

  console.log(columnFilters);
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    columnResizeMode: "onChange",
  });
  return (
    <div>
      <TableFilter
        columnFilters={columnFilters}
        setColumnFilter={setColumnFilter}
      />
      <table
        // width={table.getTotalSize()}
        className={`border-[1px] border-stone-600 mb-2 font-normal w-[${table.getTotalSize()}]`}
      >
        <thead className="border-stone-600 border-[2px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`relative border-stone-600 border-[2px] text-gray-800 w-[${header.getSize()}]`}
                >
                  {header.column.columnDef.header}
                  <div
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    className={`absolute opacity-0 top-0 right-0 h-[100%] w-[5px] bg-[#27bbff] cursor-col-resize select-none touch-none rounded-[6px] hover:opacity-100 ${
                      header.column.getIsResizing()
                        ? "bg-[#2eff31] opacity-100"
                        : ""
                    }`}
                  ></div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  width={cell.column.getSize()}
                  className="text-center border-stone-600 border-[2px] text-zinc-950 font-bold"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPlayerTable;
