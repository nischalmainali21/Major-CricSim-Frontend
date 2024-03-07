import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CompSelectFilter from "./CompSelectFilter";
const CompCollapsibleFilter = ({
  filteredStats,
  selectedFilters,
  handleFilterChange,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2 flex flex-col justify-center ml-6 ">
        <ScrollArea className="border rounded-sm p-4 h-[430px]">
          <div className="flex flex-col gap-2">
            {Object.entries(filteredStats).map(([stat, { LabelName }]) => (
              <CompSelectFilter
                key={stat}
                stat={stat}
                LabelName={LabelName}
                selectedFilters={selectedFilters}
                handleFilterChange={handleFilterChange}
              />
            ))}
          </div>
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CompCollapsibleFilter;
