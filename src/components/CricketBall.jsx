import Image from "next/image";
import React from "react";
import cricketball from "@/../public/cricketball.svg";

function CricketBall() {
  return (
    <div>
      <Image alt="cricketball" width={25} height={15} src={cricketball} />
    </div>
  );
}

export default CricketBall;
