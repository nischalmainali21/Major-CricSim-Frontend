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
    <Card className="p-4 md:p-6 lg:p-10">
      <CardHeader>
        <CardTitle>
          <div className="gap-5 flex flex-col items-start">
            {svg}
            <span className="md:text-3xl">{title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-5 text-xl md:text-2xl">
        <p>{description}</p>
      </CardContent>
      <CardFooter className="mt-2">
        <Button className="text-xl py-6">
          <Link href={buttonLink}>{buttonContent}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LandingFeaturesCard;
