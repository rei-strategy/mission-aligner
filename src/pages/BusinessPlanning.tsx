import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import MissionBuilder from '@/components/MissionBuilder';
import ValuesChecklist from '@/components/ValuesChecklist';
import AlignmentPlanner from '@/components/AlignmentPlanner';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
                  <TabsTrigger value="mission" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                    Mission Statement Builder
                  </TabsTrigger>
                  <TabsTrigger value="values" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                    Personal Values Checklist
                  </TabsTrigger>
                  <TabsTrigger value="alignment" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
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
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default BusinessPlanning;