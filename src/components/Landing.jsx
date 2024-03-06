import React from "react";
import LandingFeatures from "./LandingFeatures";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import landingPic from "../../public/landing.jpg";

const Landing = () => {
  return (
    <div>
      <div className=" w-full mb-10 relative">
        <div className="h-[500px] relative">
          <Image
            src={landingPic}
            alt="landing"
            className=" object-cover"
            fill
            priority
          />
        </div>
        <div className=" h-full  absolute top-0 flex flex-col justify-center text-left md:text-6xl lg:text-5xl text-5xl font-semibold  text-black sm:p-9 mx-5 ">
          <h1 className="sm:mt-4">Empower Your Game</h1>
          <p className="w-full sm:mt-10 md:max-w-[75%] lg:max-w-[75%] xl:max-w-[40%] text-white font-light my-7 text-xl    lg:justify-end py-5">
            Gain Deeper Player Insights and Accurately Simulate Matches to
            Inform Your Strategic Decisions. Dominate the Game with Confidence.
          </p>
          <Button className="sm:px-10 py-6 sm:w-[300px] md:w-[320px] text-xl">
            <Link href="/simulate">Start Simulation</Link>
          </Button>
        </div>
      </div>
      <div>
        <LandingFeatures />
      </div>
    </div>
  );
};

export default Landing;
