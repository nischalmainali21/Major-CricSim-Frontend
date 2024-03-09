import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FirstViewOneBall from "./FirstViewOneBall";
import CricketBall from "./CricketBall";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const FirstViewOneOver = ({ overData }) => {
  return (
    <Card className="p-2 border-none">
      <CardContent className="flex gap-4 justify-center items-center">
        <div className="flex flex-col gap-2 mt-[25px] ">
          <Button variant="outline">Predicted</Button>
          <Separator />
          <Button variant="outline">Actual</Button>
        </div>
        {Object.entries(overData).map(
          ([
            ballnumber,
            { predicted_outcome, isWicketDelivery, actual_outcome },
          ]) => {
            // console.log(Object.keys(overData));
            // console.log(overData[overData.length - 1]);
            return (
              <div
                key={`${overData} + ${ballnumber}`}
                className="flex flex-col items-center"
              >
                <CricketBall />
                {/* chech for isWicketDelivery, if true, pass on to a different component the outcome for the ball and display it in a box */}
                <div className="flex flex-col gap-2">
                  <FirstViewOneBall
                    outcome={predicted_outcome}
                    isWicketDelivery={isWicketDelivery}
                  />
                  <Separator />
                  <FirstViewOneBall
                    outcome={actual_outcome}
                    isWicketDelivery={isWicketDelivery}
                  />
                </div>
              </div>
            );
          }
        )}
      </CardContent>
    </Card>
  );
};

export default FirstViewOneOver;
