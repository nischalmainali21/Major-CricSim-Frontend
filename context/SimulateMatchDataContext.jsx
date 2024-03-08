"use client";
import React, { createContext, useContext, useState } from "react";

const SimulateMatchDataContext = createContext(null);

export const SimulateMatchDataProvider = ({ children }) => {
  const [simulateMatchData, setSimulateMatchData] = useState(null);
  const [simulateMatchFirstInningData, setSimulateMatchFirstInningData] =
    useState(null);
  const [simulateMatchSecondInningData, setSimulateMatchSecondInningData] =
    useState(null);
  return (
    <SimulateMatchDataContext.Provider
      value={{
        simulateMatchData,
        setSimulateMatchData,
        simulateMatchFirstInningData,
        setSimulateMatchFirstInningData,
        simulateMatchSecondInningData,
        setSimulateMatchSecondInningData,
      }}
    >
      {children}
    </SimulateMatchDataContext.Provider>
  );
};

export const useSimulateMatchData = () => {
  const context = useContext(SimulateMatchDataContext);
  if (!context) {
    throw new Error(
      "useSimulateMatchData must be used within a SimulateMatchDataProvider"
    );
  }
  return context;
};
