"use client";
import React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columns = [
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

const PlayerBowlingTable = ({ playerName, playerStats }) => {
  //   console.log(playerStats);
  const [data, setData] = React.useState(() => [playerStats]);
  //   console.log("🚀 ~ file: PlayerTable.jsx:64 ~ PlayerTable ~ data:", data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  //   console.log(table.getHeaderGroups());
  return (
    <div>
      <h2 className="mb-2">Bowling Stats</h2>
      <table
        width={table.getTotalSize()}
        className="border-[1px] border-stone-600 mb-2 font-normal"
      >
        <thead className="border-stone-600 border-[2px]">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-stone-600 border-[2px] text-gray-800"
                >
                  {header.column.columnDef.header}
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

export default PlayerBowlingTable;
