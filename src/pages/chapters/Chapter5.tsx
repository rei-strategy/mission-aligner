import { Separator } from "@/components/ui/separator";

const Chapter5 = () => {
  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Finding the Right Property</h1>
          <p className="text-lg text-gray-600">Selecting and securing the ideal location for your sober living home</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Selection Guide</h2>
          <p className="text-gray-600 text-lg">Key considerations for choosing a property that meets zoning requirements and resident needs.</p>
        </section>
      </div>
    </main>
  );
};

export default Chapter5;