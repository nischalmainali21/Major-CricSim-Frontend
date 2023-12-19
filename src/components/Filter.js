"use client";
import React, { useState, useEffect } from "react";

const Filter = ({ selectedPlayer, setSelectedPlayer, playerStatsData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  useEffect(() => {
    // Filter players based on the search term
    const filteredResults = Object.entries(playerStatsData)
      .filter(([playerName, playerStats]) =>
        playerName.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map(([playerName, playerStats]) => ({ playerName }));

    setFilteredPlayers(filteredResults);
  }, [searchTerm]);

  const handleNameClick = (playerName) => {
    console.log(`Selected player: ${playerName}`);
    setSelectedPlayer(playerName);
    setSearchTerm("");
  };

  return (
    <div>
      {/* <div className="search-container">
        <input
          type="text"
          placeholder="Search by player name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div> */}
      <div className="flex p-2 rounded-lg relative">
        <input
          className="border-b-2 p-4 "
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          value={searchTerm}
          placeholder="Search Players"
        />
        <div className="py-3 relative top-1 right-8 text-white font-semibold rounded-lg transition duration-3000 cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30 text-dark hover:text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      {searchTerm.length > 0 && (
        <ul>
          {filteredPlayers.map(({ playerName }) => (
            <li
              className="cursor-pointer w-[250px] hover:bg-blue-400"
              key={playerName}
              onClick={() => handleNameClick(playerName)}
            >
              {playerName}
            </li>
          ))}
        </ul>
      )}

      {selectedPlayer && (
        <div>
          <h2>Selected Player:</h2>
          <p>{selectedPlayer}</p>
        </div>
      )}
    </div>
  );
};

export default Filter;
