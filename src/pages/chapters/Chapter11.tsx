import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckSquare, AlertOctagon } from "lucide-react";

const Chapter11 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Managing Daily Operations</h1>
          <p className="text-lg text-gray-600">Running an efficient and supportive sober living environment</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="px-4">
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="schedule" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Daily Schedule
              </TabsTrigger>
              <TabsTrigger value="accountability" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Accountability System
              </TabsTrigger>
              <TabsTrigger value="crisis" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Crisis Management
              </TabsTrigger>
            </TabsList>

            <TabsContent value="schedule">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Daily Schedule Template</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Establish a clear, consistent daily schedule that balances structure and flexibility. Create routines 
                    that promote recovery while allowing residents to maintain work and personal commitments.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="accountability">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <CheckSquare className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Accountability System Guide</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Implement comprehensive accountability systems that empower residents while maintaining order. 
                    Design clear protocols for monitoring progress and addressing concerns constructively.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="crisis">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <AlertOctagon className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Crisis Management Protocol</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Develop a comprehensive crisis management plan that ensures swift, effective responses to emergencies. 
                    Create clear escalation protocols and emergency contact procedures.
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