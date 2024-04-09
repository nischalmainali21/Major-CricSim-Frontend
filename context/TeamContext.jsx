"use client";
import React, { createContext, useContext, useState } from "react";

const TeamDataContext = createContext(null);

export const TeamDataContextProvider = ({ children }) => {
  const [firstTeamData, setFirstTeamData] = useState([
    "A Symonds",
    "AC Gilchrist",
    "SR Watson",
    "AD Russell",
    "BA Stokes",
    "CH Gayle",
    "CH Morris",
    "JC Archer",
    "KA Pollard",
    "KP Pietersen",
    "Shakib Al Hasan",
  ]);
  const [secondTeamData, setSecondTeamData] = useState([
    "SR Tendulkar",
    "Z Khan",
    "RG Sharma",
    "V Kohli",
    "MS Dhoni",
    "KH Pandya",
    "HH Pandya",
    "JJ Bumrah",
    "SK Raina",
    "YK Pathan",
    "YS Chahal",
  ]);
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
