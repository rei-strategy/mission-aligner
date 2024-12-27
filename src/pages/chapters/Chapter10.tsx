import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Network, Presentation } from "lucide-react";

const Chapter10 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Marketing and Networking</h1>
          <p className="text-lg text-gray-600">Building relationships and promoting your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="px-4">
          <Tabs defaultValue="resident" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="resident" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Ideal Resident
              </TabsTrigger>
              <TabsTrigger value="referral" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Referral Sources
              </TabsTrigger>
              <TabsTrigger value="marketing" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Marketing Strategy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="resident">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Ideal Resident Template</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Define and connect with your ideal resident population. Create detailed profiles and engagement strategies 
                    to ensure successful matches between residents and your sober living home.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referral">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Network className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Referral Source Mapping</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Build and maintain strong relationships with treatment centers, therapists, and other key referral sources. 
                    Map your network and develop strategies for sustainable partnerships.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Presentation className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Marketing Strategy Planner</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Develop effective marketing strategies that highlight your home's unique benefits and values. 
                    Create compelling messaging that resonates with potential residents and referral partners.
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

export default Chapter10;