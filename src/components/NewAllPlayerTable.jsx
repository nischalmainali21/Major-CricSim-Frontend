"use client";
import React, { useState, useEffect } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

import { Button } from "./ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTeamData } from "../../context/TeamContext";

const columns = [
  {
    accessorKey: "actions",
    header: "Add Team",
    cell: ({ row, table }) => (
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.options.meta.handleAddToList(row.original.player_name, 1)
          }
        >
          Team 1
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            table.options.meta.handleAddToList(row.original.player_name, 2)
          }
        >
          Team 2
        </Button>
      </div>
    ),
  },
  {
    accessorKey: "player_name",
    header: "Player",
    cell: (props) => <p>{props?.getValue()}</p>,
    enableColumnFilter: true,
    filterFn: "includesString",
  },
  {
    accessorKey: "batter_matches_played",
    header: "Bat Matches",
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
    header: "Bowl Matches",
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

const NewAllPlayerTable = ({ playersData }) => {
  const [data, setData] = useState(() => []);
  const [columnFilters, setColumnFilter] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const { setFirstTeamData, setSecondTeamData, firstTeamData, secondTeamData } =
    useTeamData();
  useEffect(() => {
    const newList = [];
    for (const [key, value] of Object.entries(playersData)) {
      // Create a new object with the key as a property
      const newObject = { player_name: key, ...value };
      newList.push(newObject);
    }

    setData(newList);
  }, []);

  const handleAddToList = (playerName, teamNumber) => {
    // console.log(playerName, teamNumber);

    if (teamNumber === 1) {
      if (firstTeamData.length === 11) {
        toast.warning("First Team Full");
        return;
      }

      if (!firstTeamData.includes(playerName)) {
        setFirstTeamData((prevPlayers) => [...prevPlayers, playerName]);
      } else {
        toast.warning("Player already in team");
      }
      return;
    }

    if (teamNumber === 2) {
      if (secondTeamData.length === 11) {
        toast.warning("Second Team Full");
        return;
      }
      if (!secondTeamData.includes(playerName)) {
        setSecondTeamData((prevPlayers) => [...prevPlayers, playerName]);
      } else {
        toast.warning("Player already in team");
      }
    }
  };

  console.log("firstTeam", firstTeamData, "secondTeam", secondTeamData);
  const table = useReactTable({
    data,
    columns,
    state: { columnFilters, columnVisibility },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilter,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    columnResizeMode: "onChange",
    meta: { handleAddToList: handleAddToList },
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Player..."
          value={table.getColumn("player_name")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("player_name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    <div className="flex items-center justify-between">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {header.column.getCanSort() && (
                        <span className="hover:cursor-pointer">
                          <ArrowUpDown
                            onClick={header.column.getToggleSortingHandler()}
                          />
                        </span>
                      )}
                      {
                        {
                          asc: <ArrowUp />,
                          desc: <ArrowDown />,
                        }[header.column.getIsSorted()]
                      }
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No Results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default NewAllPlayerTable;
