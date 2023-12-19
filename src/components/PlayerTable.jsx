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
    header: "Batting Matches Played",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "runs_scored",
    header: "runs scored",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "batting_average",
    header: "batting average",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "bowling_average",
    header: "Bowling Average",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const PlayerTable = ({ playerName, playerStats }) => {
  //   console.log(playerStats);
  const [data, setData] = React.useState(() => [playerStats]);
  //   console.log("🚀 ~ file: PlayerTable.jsx:64 ~ PlayerTable ~ data:", data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <div>
      {playerName}
      <h1>Batting Stats</h1>
      <table width={table.getTotalSize()}>
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
                <td key={cell.id} width={cell.column.getSize()}>
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

export default PlayerTable;
