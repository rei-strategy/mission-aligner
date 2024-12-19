import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ListCheck, FileText, BarChart2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Chapter5 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Finding the Right Property</h1>
          <p className="text-lg text-gray-600">Selecting and securing the ideal location for your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Selection Guide</h2>
          <p className="text-gray-600 text-lg">Key considerations for choosing a property that meets zoning requirements and resident needs.</p>
        </section>

        <section className="px-4">
          <Tabs defaultValue="property" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="property" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Property Analysis
              </TabsTrigger>
              <TabsTrigger value="zoning" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Zoning Requirements
              </TabsTrigger>
              <TabsTrigger value="costs" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Cost Analysis
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="property">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#13171A] [&_*]:text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                        <ListCheck className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Property Suitability Checklist</h3>
                    </div>
                    <p className="text-gray-400">
                      Ensure the property complies with zoning laws and licensing requirements
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                        <FileText className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Zoning and Compliance Guide</h3>
                    </div>
                    <p className="text-gray-400">
                      Choose a property that promotes a safe, welcoming environment for residents
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                        <BarChart2 className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Cost-Benefit Analysis</h3>
                    </div>
                    <p className="text-gray-400">
                      Balance upfront costs with the potential for long-term profitability and expansion
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="zoning">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Zoning Requirements</h3>
                <p className="text-gray-600">Detailed information about local zoning laws and requirements for sober living homes.</p>
              </div>
            </TabsContent>
            
            <TabsContent value="costs">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cost Analysis</h3>
                <p className="text-gray-600">Comprehensive breakdown of property costs, renovations, and ongoing maintenance.</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter5;