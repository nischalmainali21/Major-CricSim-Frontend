import React from "react";
import { useSimulateMatchData } from "../../context/SimulateMatchDataContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";

const SimulateMatchOverview = () => {
  const { simulatePlotData } = useSimulateMatchData();
  const {
    actual_winning_team,
    predicted_winning_team,
    inning1_actual_total_run,
    inning1_predicted_total_run,
    inning2_actual_total_run,
    inning2_predicted_total_run,
    team_1,
    team_2,
    season,
  } = simulatePlotData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Overview</CardTitle>
        <CardDescription className="flex flex-col">
          {team_1} vs {team_2} in {season}
          <span>Actual Winning Team: {actual_winning_team}</span>
          <span>Predicted Winning Team: {predicted_winning_team}</span>
        </CardDescription>
        <CardContent>
          <p>
            <span>Inning 1 Runs </span>
            <span>Actual: {inning1_actual_total_run} </span>
            <span>vs </span>
            <span>Predicted: {inning1_predicted_total_run}</span>
          </p>
          <Separator />
          <p>
            <span>Inning 2 Runs </span>
            <span>Actual: {inning2_actual_total_run} </span>
            <span>vs </span>
            <span>Predicted: {inning2_predicted_total_run}</span>
          </p>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default SimulateMatchOverview;
