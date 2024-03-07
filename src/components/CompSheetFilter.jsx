import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import CompFilter from "@/components/CompFilter";
import { ScrollArea } from "./ui/scroll-area";
const CompSheetFilter = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open Filter</Button>
        </SheetTrigger>
        <SheetContent className="p-4">
          <ScrollArea className="h-screen">
            <SheetHeader>
              <SheetTitle>Filter Stats</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <CompFilter />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CompSheetFilter;
