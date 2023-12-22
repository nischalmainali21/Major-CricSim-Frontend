"use client";
import React, { useState, useEffect } from "react";
import { LiaSortSolid } from "react-icons/lia";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
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
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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
                  <div className="flex items-center justify-center gap-1">
                    {header.column.columnDef.header}
                    {header.column.getCanSort() && (
                      <span className="text-gray-600 text-xl hover:cursor-pointer">
                        <LiaSortSolid
                          onClick={header.column.getToggleSortingHandler()}
                        />
                      </span>
                    )}
                    {
                      {
                        asc: <FaArrowUp />,
                        desc: <FaArrowDown />,
                      }[header.column.getIsSorted()]
                    }
                  </div>
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
      <br />
      <div className="flex-start flex-col items-center justify-center">
        <div className="mb-2">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center border-t gap-7">
          <button
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-lg text-center font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md hover:bg-indigo-500"
            onClick={() => table.previousPage()}
            isDisabled={table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-lg text-center font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-md hover:bg-indigo-500"
            onClick={() => table.nextPage()}
            isDisabled={table.getCanNextPage()}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllPlayerTable;
