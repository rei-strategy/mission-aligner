import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Chapter2 = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black-800">
        <AppSidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-6xl mx-auto space-y-10">
            <header className="text-center mb-10 pt-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-3">Business Planning</h1>
              <p className="text-lg text-gray-600">Creating a solid foundation for your sober living business</p>
            </header>

            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Plan Essentials</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-3">Executive Summary</h3>
                  <p className="text-gray-600">Learn how to write a compelling executive summary that captures the essence of your sober living home business.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-3">Market Analysis</h3>
                  <p className="text-gray-600">Understand your target market, competition, and unique value proposition in the recovery housing industry.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-3">Financial Projections</h3>
                  <p className="text-gray-600">Create detailed financial forecasts including startup costs, operating expenses, and revenue projections.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Chapter2;