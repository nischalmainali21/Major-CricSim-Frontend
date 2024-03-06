import React from "react";
import LandingFeatures from "./LandingFeatures";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Landing = () => {
  return (
    <div>
      <div className=" w-full h-screen static mb-10">
        {/* <img className=' w-full h-full object-cover hidden lg:block ' src={sane} /> */}
        <Image
          src="/landing.jpg"
          width={100}
          height={100}
          alt="landing"
          className="w-full h-full object-cover "
        />
        <div className="w-full h-full  absolute top-0 flex flex-col justify-center text-left md:text-6xl lg:text-5xl text-4xl font-semibold font-body text-black p-9 mx-5 ">
          <h1 className="mt-20">Empower Your Game</h1>

          <div className="w-full font-light my-7 text-lg text-slate-500 md:text-xl justify-center flex flex-col lg:justify-end py-5">
            <p className="w-full mt-10 md:max-w-[75%] lg:max-w-[75%] xl:max-w-[40%] text-white">
              Gain Deeper Player Insights and Accurately Simulate Matches to
              Inform Your Strategic Decisions. Dominate the Game with
              Confidence.
            </p>
            <div className="py-10 mt-10 font-sembold">
              <Button className="px-10 py-6">
                <Link href="/simulate">Start Simulation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LandingFeatures />
      </div>
    </div>
  );
};

export default Landing;
