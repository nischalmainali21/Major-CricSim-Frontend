"use client";
import React, { createContext, useContext, useState } from "react";

const SimulateMatchDataContext = createContext(null);

export const SimulateMatchDataProvider = ({ children }) => {
  const [simulateMatchData, setSimulateMatchData] = useState(null);
  const [simulateMatchFirstInningData, setsimulateMatchFirstInningData] =
    useState(null);
  const [simulateMatchSecondInningData, setsimulateMatchSecondInningData] =
    useState(null);
  return (
    <SimulateMatchDataContext.Provider
      value={{
        simulateMatchData,
        setSimulateMatchData,
        simulateMatchFirstInningData,
        setsimulateMatchFirstInningData,
        simulateMatchSecondInningData,
        setsimulateMatchSecondInningData,
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
