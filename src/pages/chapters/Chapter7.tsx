import { Separator } from "@/components/ui/separator";

const Chapter7 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Licensing, Certifications, and Inspections</h1>
          <p className="text-lg text-gray-600">Meeting regulatory requirements and industry standards</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Regulatory Compliance</h2>
          <p className="text-gray-600 text-lg">Understanding and obtaining necessary licenses, certifications, and passing required inspections.</p>
        </section>
      </div>
    </main>
  );
};

export default Chapter7;
