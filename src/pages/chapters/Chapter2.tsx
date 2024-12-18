import { Separator } from "@/components/ui/separator";

const Chapter2 = () => {
  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Business Planning</h1>
          <p className="text-lg text-gray-600">Creating a solid business plan for your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Business Plan Components</h2>
          <div className="space-y-4 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Executive Summary</h3>
              <p className="text-gray-600">Overview of your sober living home business and its mission.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Market Analysis</h3>
              <p className="text-gray-600">Understanding your target market and competition.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Financial Projections</h3>
              <p className="text-gray-600">Detailed financial planning and forecasting.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Chapter2;