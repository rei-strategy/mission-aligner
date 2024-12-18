import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import MissionBuilder from '@/components/MissionBuilder';
import ValuesChecklist from '@/components/ValuesChecklist';
import AlignmentPlanner from '@/components/AlignmentPlanner';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const BusinessPlanning = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black-800">
        <AppSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <header className="text-center mb-10 pt-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">Business Planning for Sober Living</h1>
              <p className="text-lg text-gray-600">Create a solid foundation for your sober living business with comprehensive planning tools</p>
            </header>

            <Separator className="bg-gray-200 my-10" />
            
            <section className="bg-white rounded-xl p-4 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Planning Resources</h2>
              <p className="text-gray-600 text-lg">Access tools and guidance to develop your sober living business plan.</p>
            </section>
            
            <section className="px-8">
              <Tabs defaultValue="mission" className="w-full">
                <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
                  <TabsTrigger value="mission" className="flex-1 px-6 py-3 text-lg text-gray-700">
                    Mission Statement Builder
                  </TabsTrigger>
                  <TabsTrigger value="values" className="flex-1 px-6 py-3 text-lg text-gray-700">
                    Personal Values Checklist
                  </TabsTrigger>
                  <TabsTrigger value="alignment" className="flex-1 px-6 py-3 text-lg text-gray-700">
                    Mission-Operations Alignment
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="mission">
                  <div className="grid gap-8 md:grid-cols-1">
                    <MissionBuilder />
                  </div>
                </TabsContent>
                
                <TabsContent value="values">
                  <div className="grid gap-8 md:grid-cols-1">
                    <ValuesChecklist />
                  </div>
                </TabsContent>
                
                <TabsContent value="alignment">
                  <div className="grid gap-8 md:grid-cols-1">
                    <AlignmentPlanner />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-12 space-y-12">
                <section className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Student Workbook</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Worksheets</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="list-disc pl-4 space-y-2 text-gray-600">
                          <li>A compliance checklist template</li>
                          <li>A licensing and permits research tracker</li>
                          <li>A legal readiness self-assessment guide</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Top 3x Struggles</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="list-disc pl-4 space-y-2 text-gray-600">
                          <li>Lack of understanding of state and local laws</li>
                          <li>Overwhelm from tracking multiple licensing requirements</li>
                          <li>Fear of non-compliance and potential shutdowns</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Goals</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <ul className="list-disc pl-4 space-y-2 text-gray-600">
                          <li>Gain clarity on all required permits, licenses, and inspections</li>
                          <li>Create a compliance system to avoid legal complications</li>
                          <li>Build confidence in maintaining operational legality</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Navigate Legal and Compliance Requirements</h2>
                  <ScrollArea className="h-[400px] rounded-md border p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">How To</h3>
                        <ul className="list-disc pl-6 space-y-4 text-gray-600">
                          <li>
                            <span className="font-medium">Licensing Checklist:</span> Includes typical permits, such as business licenses, zoning permits, health inspections, and fire safety approvals
                          </li>
                          <li>
                            <span className="font-medium">Zoning Research Template:</span> A map to evaluate local zoning laws and align your property choice
                          </li>
                          <li>
                            <span className="font-medium">Legal Consultation Prep Sheet:</span> Key questions to ask legal advisors
                          </li>
                        </ul>
                      </div>
                    </div>
                  </ScrollArea>
                </section>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BusinessPlanning;