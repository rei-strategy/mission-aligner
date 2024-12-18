import { Separator } from "@/components/ui/separator";
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
        
        <div className="space-y-12">
          <StartupCostEstimator />
          <MonthlyBudgetPlanner />
          <FundingSourcesExplorer />
        </div>
      </div>
    </main>
  );
};

export default Chapter3;