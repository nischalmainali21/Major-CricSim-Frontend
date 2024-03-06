"use client";
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div>
      <NavigationMenu className="p-4 flex justify-between items-center min-w-full">
        <h1 className="font-bold mx-4 text-3xl md:text-3xl xl:text-5xl">
          CricSim.
        </h1>
        <div className="mr-10">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link className="text-xl font-light tracking-widest" href="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                className="text-xl font-light tracking-widest"
                href="/allplayer"
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Player
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="text-xl font-light tracking-widest" href="/comp">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Compare
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>

    // <div className="w-full h-[80px] drop-shadow-lg relative z-10 shadow-xl">
    //   <div className="px-20 flex justify-between items-center w-full h-full">
    //     <h1 className="font-bold mx-4 text-3xl md:text-3xl xl:text-5xl">
    //       CricSim.
    //     </h1>

    //     <ul className="hidden lg:flex items-center gap-x-6">
    //       <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-orange-300 via-yellow-500 to-[#f9a826] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
    //         <Link className="text-xl font-light tracking-widest" href="/">
    //           HOME
    //         </Link>
    //       </li>

    //       <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-orange-300 via-yellow-500 to-[#f9a826] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
    //         <Link
    //           className="text-xl font-light tracking-widest"
    //           href="/allplayer"
    //         >
    //           All PLAYER
    //         </Link>
    //       </li>

    //       <li className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-gradient-to-r from-orange-300 via-yellow-500 to-[#f9a826] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
    //         <Link className="text-xl font-light tracking-widest" href="comp">
    //           COMPARE
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
