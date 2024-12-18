import { Separator } from "@/components/ui/separator";

const Chapter11 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Managing Daily Operations</h1>
          <p className="text-lg text-gray-600">Running an efficient and supportive sober living environment</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operational Management</h2>
          <p className="text-gray-600 text-lg">Day-to-day management practices for maintaining a successful sober living home.</p>
        </section>
      </div>
    </main>
  );
};

export default Chapter11;
