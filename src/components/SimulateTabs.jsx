import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SimulateFirstView from "./SimulateFirstView";
const SimulateTabs = ({ simulateMatchData }) => {
  return (
    <Tabs defaultValue="over_view">
      <div className="flex justify-center">
        <TabsList className="mb-10">
          <TabsTrigger value="over_view">Over by Over View</TabsTrigger>
          <TabsTrigger value="graph_view">Graph View</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="over_view">
        {simulateMatchData && <SimulateFirstView />}
      </TabsContent>
      <TabsContent value="graph_view">Graphs</TabsContent>
    </Tabs>
  );
};

export default SimulateTabs;
