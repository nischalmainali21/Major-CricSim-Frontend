"use server";
export async function getData() {
  const res = await fetch("http://localhost:8000/api/full_data", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPlotData() {
  const res = await fetch("http://localhost:8000/api/plot_data", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
