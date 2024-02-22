import React from "react";
import Landing_features from "./Landing_features";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <div className=" w-full h-screen static ">
        {/* <img className=' w-full h-full object-cover hidden lg:block ' src={sane} /> */}
        <Image
          src="/landing.jpg"
          width={100}
          height={100}
          alt="landing"
          className="w-full h-full object-cover hidden lg:block"
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
              <button className="px-7 py-4 rounded-full bg-[#f9a826] border-[#f9a826] hover:text-white">
                <Link href="/simulate">Start Simulation</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Landing_features />
      </div>
    </div>
  );
};

export default Landing;
