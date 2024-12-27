import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Scale, Users } from "lucide-react";

const Chapter11 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Long-term Planning & Growth</h1>
          <p className="text-lg text-gray-600">Strategic planning for sustainable growth and community impact</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="px-4">
          <Tabs defaultValue="goals" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="goals" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Long-term Goals
              </TabsTrigger>
              <TabsTrigger value="scalability" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Scalability Assessment
              </TabsTrigger>
              <TabsTrigger value="community" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Community Engagement
              </TabsTrigger>
            </TabsList>

            <TabsContent value="goals">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Long-term Goals & Milestones Planner</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Define clear, measurable long-term goals that align with your mission. Create a structured timeline 
                    for achieving key milestones while maintaining focus on your core values and objectives.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scalability">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Scale className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Scalability Assessment Checklist</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Develop a comprehensive plan for scaling operations while maintaining compliance and quality. 
                    Evaluate readiness for growth and identify key areas requiring attention before expansion.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="community">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Community Engagement Strategy Template</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Build strong relationships with the local community to ensure ongoing support. Create strategies 
                    for positive community impact and establish meaningful partnerships with local organizations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter11;