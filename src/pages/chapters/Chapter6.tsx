import { Separator } from "@/components/ui/separator";

const Chapter6 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Setting Up Your Sober Living Home</h1>
          <p className="text-lg text-gray-600">Essential steps for preparing your property for residents</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Setup Guidelines</h2>
          <p className="text-gray-600 text-lg">Creating a safe, supportive environment with necessary amenities and accommodations.</p>
        </section>
      </div>
    </main>
  );
};

export default Chapter6;
