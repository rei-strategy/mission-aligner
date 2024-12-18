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
              <p className="text-lg text-gray-600">Creating a solid foundation for your sober living home business</p>
            </header>

            <section className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Components of Your Business Plan</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Executive Summary</h3>
                  <p className="text-gray-600">Outline your mission, vision, and core values. Describe your sober living home's unique approach and target demographic.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Market Analysis</h3>
                  <p className="text-gray-600">Research local competition, identify your target market, and analyze industry trends in sober living homes.</p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Financial Projections</h3>
                  <p className="text-gray-600">Detail your startup costs, operational expenses, revenue streams, and projected growth over the next 3-5 years.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Operational Plan</h3>
                  <p className="text-gray-600">Describe your facility management approach, staffing requirements, and day-to-day operations procedures.</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-8 shadow-lg mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Next Steps</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-600">
                <li>Schedule a consultation with a business advisor</li>
                <li>Research local zoning laws and regulations</li>
                <li>Begin drafting your detailed business plan</li>
                <li>Identify potential funding sources</li>
                <li>Network with other sober living home operators</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Chapter2;