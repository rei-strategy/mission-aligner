import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BusinessPlanning = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 bg-white p-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <header className="text-center mb-10 pt-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Business Planning for Sober Living</h1>
              <p className="text-lg text-gray-600">Essential steps and considerations for creating a successful sober living business plan</p>
            </header>

            <Separator className="bg-gray-200 my-10" />
            
            <section className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Business Plan Components</h2>
              <p className="text-gray-600 text-lg">Learn about the key elements that make up a comprehensive sober living business plan.</p>
            </section>
            
            <section className="px-8">
              <Tabs defaultValue="executive" className="w-full">
                <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm border border-gray-200">
                  <TabsTrigger value="executive" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Executive Summary
                  </TabsTrigger>
                  <TabsTrigger value="market" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Market Analysis
                  </TabsTrigger>
                  <TabsTrigger value="financial" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Financial Projections
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="executive">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Executive Summary</h3>
                    <p className="text-gray-600">Create a compelling overview of your sober living home business.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="market">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Market Analysis</h3>
                    <p className="text-gray-600">Understand your target market and competition.</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="financial">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Financial Projections</h3>
                    <p className="text-gray-600">Plan your financial strategy and forecasts.</p>
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