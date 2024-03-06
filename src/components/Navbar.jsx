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
  );
};

export default Navbar;
