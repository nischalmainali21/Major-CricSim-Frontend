import React from "react";
import { Button } from "./ui/button";

const predicted_run = {
  0: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-100"
    >
      .
    </Button>
  ),
  1: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-100"
    >
      1
    </Button>
  ),
  2: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-200"
    >
      2
    </Button>
  ),
  3: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-300"
    >
      3
    </Button>
  ),
  4: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-400"
    >
      4
    </Button>
  ),
  5: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-500"
    >
      5
    </Button>
  ),
  6: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-600"
    >
      6
    </Button>
  ),
  7: (
    <Button
      variant="outline"
      size="icon"
      className="border-2 border-solid border-sky-700"
    >
      7
    </Button>
  ),
};
const FirstViewOneBall = ({ predicted_outcome, isWicketDelivery }) => {
  return (
    <div>
      {isWicketDelivery ? (
        <Button
          variant="outline"
          size="icon"
          className=" border-red-100
          border-2
          border-solid"
        >
          <span className="text-red-500">W</span>
        </Button>
      ) : predicted_outcome === null ? (
        predicted_run[1]
      ) : (
        predicted_run[predicted_outcome]
      )}
    </div>
  );
};

export default FirstViewOneBall;
