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
  const { predicted_total_runs, actual_total_runs, balls } = overData;
  return (
    <Card className="p-2 border-none">
      <CardContent className="flex gap-4 justify-center items-center">
        <div className="flex flex-col gap-2 mt-[25px] ">
          <Button variant="outline">Predicted</Button>
          <Separator />
          <Button variant="outline">Actual</Button>
        </div>
        {Object.entries(balls).map(
          ([
            ballnumber,
            { predicted_outcome, isWicketDelivery, actual_outcome },
          ]) => {
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
      <CardFooter className="justify-end">
        <div className="flex items-end justify-end text-center gap-2 font-extralight">
          <p className="text-md ">Runs in this over:</p>

          <span className="text-md ">Predicted:{predicted_total_runs}</span>
          <span className="text-md ">Actual:{actual_total_runs}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FirstViewOneOver;
