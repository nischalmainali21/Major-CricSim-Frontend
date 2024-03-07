"use client";
import React, { createContext, useContext, useState } from "react";
import { defaultFilterStats } from "@/lib/constant";

const SelectedFiltersContext = createContext(null);

export const SelectedFiltersProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState(defaultFilterStats);
  return (
    <SelectedFiltersContext.Provider
      value={{ selectedFilters, setSelectedFilters }}
    >
      {children}
    </SelectedFiltersContext.Provider>
  );
};

export const useSelectedFilters = () => {
  const context = useContext(SelectedFiltersContext);
  if (!context) {
    throw new Error(
      "useSelectedFilters must be used within a SelectedFiltersProvider"
    );
  }
  return context;
};
