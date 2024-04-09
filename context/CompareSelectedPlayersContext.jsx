"use client";
import React, { createContext, useContext, useState } from "react";

const CompareSelectedPlayersContext = createContext(null);

export const CompareSelectedPlayersProvider = ({ children }) => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [allSelectedPlayers, setAllSelectedPlayers] = useState([]);
  return (
    <CompareSelectedPlayersContext.Provider
      value={{
        selectedPlayer,
        setSelectedPlayer,
        allSelectedPlayers,
        setAllSelectedPlayers,
      }}
    >
      {children}
    </CompareSelectedPlayersContext.Provider>
  );
};

export const useCompareSelectedPlayers = () => {
  const context = useContext(CompareSelectedPlayersContext);
  if (!context) {
    throw new Error(
      "useSimulateMatchData must be used within a SimulateMatchDataProvider"
    );
  }
  return context;
};
