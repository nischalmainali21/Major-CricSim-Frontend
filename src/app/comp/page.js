"use client";
import React, { useState } from "react";
import AddPlayer from "../../components/AddPlayer";

const Comp = () => {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  return (
    <div>
      <div className="flex items-center justify-center">
        <AddPlayer
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      </div>
    </div>
  );
};

export default Comp;
