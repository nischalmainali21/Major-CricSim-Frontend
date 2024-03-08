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

const FirstViewOneOver = ({ overData }) => {
  return (
    <Card className="p-2">
      <CardContent className="flex gap-4 justify-center items-center">
        {Object.entries(overData).map(
          ([ballnumber, { predicted_outcome, isWicketDelivery }]) => (
            <div key={`${overData} + ${ballnumber}`}>
              {ballnumber}
              {/* chech for isWicketDelivery, if true, pass on to a different component the outcome for the ball and display it in a box */}
              <div>
                <FirstViewOneBall
                  predicted_outcome={predicted_outcome}
                  isWicketDelivery={isWicketDelivery}
                />
              </div>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default FirstViewOneOver;
