import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { landingFeatures } from "@/lib/constant";
import LandingFeaturesCard from "./LandingFeaturesCard";

const LandingFeatures = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bold">What We Do?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 ">
        {landingFeatures.map((feature) => (
          <LandingFeaturesCard
            key={feature.title}
            svg={feature.svg}
            title={feature.title}
            description={feature.description}
            buttonContent={feature.buttonContent}
            buttonLink={feature.buttonLink}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingFeatures;
