"use client";
import React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columns = [
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
];

const PlayerBattingTable = ({ playerName, playerStats }) => {
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
      <h1 className="mb-2">{playerName}</h1>
      <hr className="border-stone-800 mb-2" />
      <h2 className="mb-2">Batting Stats</h2>
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

export default PlayerBattingTable;
