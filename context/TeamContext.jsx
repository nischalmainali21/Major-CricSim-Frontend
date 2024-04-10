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
  const [venue, setVenue] = useState("Brabourne Stadium");
  const [versusFirstInningsData, setVersusFirstInningsData] = useState([]);
  const [versusSecondInningsData, setVersusSecondInningsData] = useState([]);
  return (
    <TeamDataContext.Provider
      value={{
        firstTeamData,
        setFirstTeamData,
        secondTeamData,
        setSecondTeamData,
        venue,
        setVenue,
        versusFirstInningsData,
        setVersusFirstInningsData,
        versusSecondInningsData,
        setVersusSecondInningsData,
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
