import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DemographicsTemplate from "@/components/market/DemographicsTemplate";
import CompetitorAnalysis from "@/components/market/CompetitorAnalysis";
import ReferralNetwork from "@/components/market/ReferralNetwork";

const Chapter4 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Market Research and Analysis</h1>
          <p className="text-lg text-gray-600">Understanding your market and identifying opportunities for your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Market Analysis Fundamentals</h2>
          <p className="text-gray-600 text-lg">
            Analyzing local demographics, competition, and market needs to position your sober living home effectively.
          </p>
        </section>

        <section className="px-4">
          <Tabs defaultValue="demographics" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="demographics" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Demographics Research
              </TabsTrigger>
              <TabsTrigger value="competitors" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Competitor Analysis
              </TabsTrigger>
              <TabsTrigger value="referrals" className="flex-1 px-6 py-3 text-lg text-gray-700 data-[state=active]:bg-[#161A1D] data-[state=active]:text-white">
                Referral Network
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="demographics">
              <div className="grid gap-8 md:grid-cols-1">
                <DemographicsTemplate />
              </div>
            </TabsContent>
            
            <TabsContent value="competitors">
              <div className="grid gap-8 md:grid-cols-1">
                <CompetitorAnalysis />
              </div>
            </TabsContent>
            
            <TabsContent value="referrals">
              <div className="grid gap-8 md:grid-cols-1">
                <ReferralNetwork />
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter4;