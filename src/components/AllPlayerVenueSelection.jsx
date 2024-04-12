"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTeamData } from "../../context/TeamContext";
import { VenuesList } from "@/lib/constant";
const AllPlayerVenueSelection = () => {
  const { venue, setVenue } = useTeamData();
  return (
    <Select
      value={`${venue}`}
      onValueChange={(value) => {
        setVenue(value);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select a Venue"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {VenuesList.map((venue) => (
          <SelectItem key={venue} value={`${venue}`}>
            {venue}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default AllPlayerVenueSelection;
