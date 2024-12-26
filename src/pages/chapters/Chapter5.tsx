import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ListCheck, FileText, BarChart2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PropertyGrid } from "@/components/chapters/property/PropertyGrid";

const Chapter5 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Finding the Right Property</h1>
          <p className="text-lg text-gray-600">Selecting and securing the ideal location for your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Selection Guide</h2>
          <p className="text-gray-600 text-lg">Key considerations for choosing a property that meets zoning requirements and resident needs.</p>
        </section>

        <section className="px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="overview" className="flex-1 px-6 py-3 text-lg text-gray-700">
                Overview
              </TabsTrigger>
              <TabsTrigger value="checklist" className="flex-1 px-6 py-3 text-lg text-gray-700">
                Property Checklist
              </TabsTrigger>
            </TabsList>
            <PropertyGrid />
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter5;