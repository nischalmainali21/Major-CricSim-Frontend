import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const LandingFeaturesCard = ({
  svg,
  title,
  description,
  buttonContent,
  buttonLink,
}) => {
  return (
    <Card className="p-20">
      <CardHeader>
        <CardTitle>
          <div className="gap-5 flex flex-col items-start">
            {svg}
            <span>{title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-5">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="mt-2">
        <Button>
          <Link href={buttonLink}>{buttonContent}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LandingFeaturesCard;
