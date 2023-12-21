"use client";
import React, { useState } from "react";

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

const AllPlayerTable = ({ playersData }) => {
  const [data, setdata] = useState(() => [playersData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <div>AllPlayerTable</div>;
};

export default AllPlayerTable;
