import { Separator } from "@/components/ui/separator";

const Chapter9 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Developing Policies and Procedures</h1>
          <p className="text-lg text-gray-600">Creating comprehensive guidelines for smooth operations</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operational Guidelines</h2>
          <p className="text-gray-600 text-lg">Establishing clear policies and procedures for residents, staff, and daily operations.</p>
        </section>
      </div>
    </main>
  );
};

export default Chapter9;