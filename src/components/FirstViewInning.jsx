import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FirstViewOneOver from "./FirstViewOneOver";
const FirstViewInning = ({ inningTitle, inningData }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4>{inningTitle}</h4>
      {/* <Separator /> */}
      <div className="flex flex-col gap-10">
        {Object.entries(inningData).map(([over, rest]) => (
          <div key={`first_inning_${over}`} className="flex gap-10 ">
            <Card className="w-[600px]">
              <CardHeader>
                <CardTitle>Over: {parseInt(over) + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <FirstViewOneOver overData={rest} />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstViewInning;
