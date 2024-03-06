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
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import MobileNav from "./MobileNav";
import { navItems } from "@/lib/navitem";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <div>
      <NavigationMenu className="p-4  flex justify-between items-center min-w-full">
        <h1 className="font-bold mx-4 text-3xl md:text-3xl xl:text-5xl">
          CricSim.
        </h1>
        <div className="mr-10 hidden md:flex">
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  className="text-xl font-light tracking-widest"
                  href={item.href}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
            <NavigationMenuIndicator />
          </NavigationMenuList>
        </div>
        <Button
          className="flex items-center md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          variant="outline"
          size="icon"
        >
          {showMobileMenu ? <X /> : <Menu />}
        </Button>
        {showMobileMenu && <MobileNav />}
      </NavigationMenu>
    </div>
  );
};

export default Navbar;
