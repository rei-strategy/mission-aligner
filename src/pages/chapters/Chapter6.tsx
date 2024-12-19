import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, ClipboardCheck, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Chapter6 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Setting Up Your Sober Living Home</h1>
          <p className="text-lg text-gray-600">Essential steps for preparing your property for residents</p>
        </header>

        <Separator className="bg-gray-200 my-10" />

        <Tabs defaultValue="property" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="property">Property Setup</TabsTrigger>
            <TabsTrigger value="operations">Operations</TabsTrigger>
            <TabsTrigger value="intake">Intake Process</TabsTrigger>
          </TabsList>

          <TabsContent value="property">
            <section className="bg-white rounded-xl p-8 shadow-lg mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Setup Guidelines</h2>
              <p className="text-gray-600 text-lg">Creating a safe, supportive environment with necessary amenities and accommodations.</p>
            </section>

            <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600/10 p-2 rounded-lg">
                    <Layout className="h-5 w-5 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Room Layout Planner</h3>
                </div>
                <p className="text-gray-400">
                  Create a layout that fosters community while respecting residents' privacy
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="operations">
            <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600/10 p-2 rounded-lg">
                    <ClipboardCheck className="h-5 w-5 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Daily Operations Template</h3>
                </div>
                <p className="text-gray-400">
                  Ensure smooth day-to-day operations with clear procedures and responsibilities
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="intake">
            <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600/10 p-2 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-semibold">Resident Intake Checklist</h3>
                </div>
                <p className="text-gray-400">
                  Develop and implement clear, enforceable house rules and intake procedures
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Chapter6;