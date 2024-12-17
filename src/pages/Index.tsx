import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import MissionBuilder from '@/components/MissionBuilder';
import ValuesChecklist from '@/components/ValuesChecklist';
import AlignmentPlanner from '@/components/AlignmentPlanner';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black-800">
        <AppSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <header className="text-center mb-10 pt-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">Sober Living for Beginners</h1>
              <p className="text-lg text-gray-600">Your step-by-step guide to establishing and managing a successful sober living business</p>
            </header>

            <Separator className="bg-gray-200 my-10" />
            
            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Resources</h2>
              <p className="text-gray-600 text-lg">This section will contain additional resources and guidance for your sober living business journey.</p>
            </section>
            
            <section className="px-8">
              <Tabs defaultValue="mission" className="w-full">
                <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
                  <TabsTrigger value="mission" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#222222] data-[state=active]:text-white">
                    Mission Statement Builder
                  </TabsTrigger>
                  <TabsTrigger value="values" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#222222] data-[state=active]:text-white">
                    Personal Values Checklist
                  </TabsTrigger>
                  <TabsTrigger value="alignment" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#222222] data-[state=active]:text-white">
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

export default Index;