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
        <main className="flex-1 bg-black-700 p-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <header className="text-center mb-8 pt-4">
              <h1 className="text-3xl font-bold text-gray-100 mb-2">Sober Living for Beginners</h1>
              <p className="text-gray-400">Your step-by-step guide to establishing and managing a successful sober living business</p>
            </header>

            <Separator className="bg-black-600 mt-4 mb-8" />
            
            <section className="bg-black-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-100 mb-4">Additional Resources</h2>
              <p className="text-gray-400">This section will contain additional resources and guidance for your sober living business journey.</p>
            </section>
            
            <section className="px-8">
              <Tabs defaultValue="mission" className="w-full">
                <TabsList className="w-full bg-black-600 p-1">
                  <TabsTrigger value="mission" className="flex-1">
                    Mission Statement Builder
                  </TabsTrigger>
                  <TabsTrigger value="values" className="flex-1">
                    Personal Values Checklist
                  </TabsTrigger>
                  <TabsTrigger value="alignment" className="flex-1">
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