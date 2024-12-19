import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StartupCostEstimator } from "@/components/financial/StartupCostEstimator";
import { MonthlyBudgetPlanner } from "@/components/financial/MonthlyBudgetPlanner";
import { FundingSourcesExplorer } from "@/components/financial/FundingSourcesExplorer";

const Chapter3 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Financial Planning and Budgeting</h1>
          <p className="text-lg text-gray-600">Creating a sustainable financial framework for your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Financial Planning Resources</h2>
          <p className="text-gray-600 text-lg">Essential tools and guidance for planning your sober living home's finances.</p>
        </section>
        
        <section className="px-4">
          <Tabs defaultValue="startup" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="startup" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Startup Costs
              </TabsTrigger>
              <TabsTrigger value="monthly" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Monthly Budget
              </TabsTrigger>
              <TabsTrigger value="funding" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Funding Sources
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="startup">
              <div className="grid gap-8 md:grid-cols-1">
                <StartupCostEstimator />
              </div>
            </TabsContent>
            
            <TabsContent value="monthly">
              <div className="grid gap-8 md:grid-cols-1">
                <MonthlyBudgetPlanner />
              </div>
            </TabsContent>
            
            <TabsContent value="funding">
              <div className="grid gap-8 md:grid-cols-1">
                <FundingSourcesExplorer />
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter3;