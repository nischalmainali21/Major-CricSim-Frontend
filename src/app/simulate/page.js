import React from "react";

async function getData() {
  const res = await fetch("http://127.0.0.1:5000/simulate_match");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Simulate() {
  const data = await getData();
  return <div>Simulate</div>;
}

export default Simulate;
