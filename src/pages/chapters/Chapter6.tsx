import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, ClipboardCheck, FileText } from "lucide-react";

const Chapter6 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Setting Up Your Sober Living Home</h1>
          <p className="text-lg text-gray-600">Essential steps for preparing your property for residents</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Setup Guidelines</h2>
          <p className="text-gray-600 text-lg">Creating a safe, supportive environment with necessary amenities and accommodations.</p>
        </section>

        <section className="px-4">
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="setup" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Property Setup
              </TabsTrigger>
              <TabsTrigger value="rules" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                House Rules
              </TabsTrigger>
              <TabsTrigger value="intake" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Intake Process
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="setup">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <ClipboardCheck className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Safety Checklist</h3>
                    </div>
                    <p className="text-gray-400">
                      Essential safety features and compliance requirements for your facility
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Amenities Guide</h3>
                    </div>
                    <p className="text-gray-400">
                      Recommended facilities and amenities for resident comfort and recovery
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="rules">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <ClipboardCheck className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">House Rules Template</h3>
                    </div>
                    <p className="text-gray-400">
                      Develop clear, enforceable house rules that promote recovery and community
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Daily Schedule</h3>
                    </div>
                    <p className="text-gray-400">
                      Structure daily routines and activities for resident success
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <Layout className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Consequences Guide</h3>
                    </div>
                    <p className="text-gray-400">
                      Fair and consistent approach to rule violations and consequences
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="intake">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <FileText className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Intake Forms</h3>
                    </div>
                    <p className="text-gray-400">
                      Comprehensive intake documentation and assessment tools
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <ClipboardCheck className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Screening Process</h3>
                    </div>
                    <p className="text-gray-400">
                      Resident screening criteria and evaluation procedures
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600/10 p-2 rounded-lg">
                        <Layout className="h-5 w-5 text-blue-300" />
                      </div>
                      <h3 className="text-xl font-semibold">Orientation Guide</h3>
                    </div>
                    <p className="text-gray-400">
                      New resident orientation process and welcome materials
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter6;