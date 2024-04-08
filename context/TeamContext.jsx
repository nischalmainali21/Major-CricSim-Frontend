"use client";
import React, { createContext, useContext, useState } from "react";

const TeamDataContext = createContext(null);

export const TeamDataContextProvider = ({ children }) => {
  const [firstTeamData, setFirstTeamData] = useState([]);
  const [secondTeamData, setSecondTeamData] = useState([]);
  return (
    <TeamDataContext.Provider
      value={{
        firstTeamData,
        setFirstTeamData,
        secondTeamData,
        setSecondTeamData,
      }}
    >
      {children}
    </TeamDataContext.Provider>
  );
};

export const useTeamData = () => {
  const context = useContext(TeamDataContext);
  if (!context) {
    throw new Error(
      "useSimulateMatchData must be used within a SimulateMatchDataProvider"
    );
  }
  return context;
};
