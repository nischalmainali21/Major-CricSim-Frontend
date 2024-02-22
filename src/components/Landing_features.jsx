import Link from "next/link";
import React from "react";

const Landing_features = () => {
  return (
    <div className="w-full">
      <h1 className="text-4xl text-center font-bold">What We Do?</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-20 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 text-[#f9a826]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>

            <h3 className="text-3xl lg:text-xl mt-5 font-semibold">
              Player Insights
            </h3>
            <p className="mt-5">
              Unlock the secrets of your players&apos; performance with
              comprehensive Player Insights, empowering you to make informed
              decisions and optimize strategies for success.
            </p>
            <button className="px-5 py-3 mt-5 rounded-full bg-[#f9a826] border-[#f9a826] hover:text-white">
              <Link href="/allplayer">Watch Players</Link>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 text-[#f9a826]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
              />
            </svg>

            <h3 className="lg:text-xl mt-5 font-semibold">Player Comparison</h3>
            <p className="mt-5">
              Compare players effortlessly to identify strengths, weaknesses,
              and key performance metrics, empowering you to make data-driven
              decisions and gain a competitive edge.
            </p>
            <button className="px-5 py-3 mt-5 rounded-full bg-[#f9a826] border-[#f9a826] hover:text-white">
              <Link href="/comp">Compare</Link>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-12 text-[#f9a826]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>

            <h3 className="text-3xl lg:text-xl mt-5 font-semibold">
              Match Simulation
            </h3>
            <p className="mt-5">
              Experience the thrill of simulated matches, providing valuable
              insights into potential outcomes and helping you refine your
              strategies for real-game success.
            </p>
            <button className="px-5 py-3 mt-5 rounded-full bg-[#f9a826] border-[#f9a826] hover:text-white">
              Simulate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing_features;
