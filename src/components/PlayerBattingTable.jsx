"use client";
import React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "batter_matches_played",
    header: "Matches Played",
    cell: (props) => <p>{props.getValue()}</p>,
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
    accessorKey: "explosivity_rating",
    header: "Explosivity",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "strike_rate_x",
    header: "Strike Rate",
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
      {playerName}
      <h1>Batting Stats</h1>
      <table width={table.getTotalSize()} className="border-[1px] ">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{header.column.columnDef.header}</th>
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
                  className="text-center"
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
