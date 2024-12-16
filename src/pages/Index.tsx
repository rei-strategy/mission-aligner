import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import MissionBuilder from '@/components/MissionBuilder';
import ValuesChecklist from '@/components/ValuesChecklist';
import AlignmentPlanner from '@/components/AlignmentPlanner';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black-800">
        <AppSidebar />
        <main className="flex-1 bg-black-700 p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="text-center mb-12">
              <h1 className="text-3xl font-bold text-gray-100 mb-2">Sober Living for Beginners</h1>
              <p className="text-gray-400">Your step-by-step guide to establishing and managing a successful sober living business</p>
              <Separator className="my-8" />
            </header>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <MissionBuilder />
              <ValuesChecklist />
              <AlignmentPlanner />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;