import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, BookOpen } from "lucide-react";

const Chapter8 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Staffing Your Sober Living Home</h1>
          <p className="text-lg text-gray-600">Building and managing an effective recovery support team</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Staff Management Guidelines</h2>
          <p className="text-gray-600 text-lg">Essential strategies for building and managing an effective recovery support team.</p>
        </section>

        <section className="px-4">
          <Tabs defaultValue="roles" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="roles" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Job Roles Guide
              </TabsTrigger>
              <TabsTrigger value="interview" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Interview Template
              </TabsTrigger>
              <TabsTrigger value="training" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Training Plan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="roles">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Job Role Definitions and Responsibilities</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Define clear roles and responsibilities for each staff position to ensure smooth operations 
                    and effective support for residents. Create detailed job descriptions that align with your 
                    facility's mission and values.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interview">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Interview Question Template</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Structured interview questions designed to assess candidates' understanding of recovery principles, 
                    compassion, and qualifications. Ensure consistent evaluation of potential staff members while 
                    maintaining high standards.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training">
              <Card className="bg-[#161A1D] text-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-2 rounded-lg w-fit">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold">Staff Training and Development Plan</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Comprehensive training program that covers emergency protocols, daily operations, 
                    resident support, and professional development. Ensure staff are well-equipped to handle 
                    various scenarios while maintaining high standards of care.
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

export default Chapter8;