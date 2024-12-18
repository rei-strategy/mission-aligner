import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { LicensingGrid } from "@/components/chapters/LicensingGrid";

const Chapter2 = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Legal and Business Setup</h1>
          <p className="text-lg text-gray-600">Essential steps for establishing your sober living home as a legal business entity</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Structure and Legal Requirements</h2>
          <p className="text-gray-600 text-lg">Understanding the legal framework and choosing the right business structure for your sober living home operation.</p>
        </section>

        <LicensingGrid 
          checkedItems={checkedItems}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
    </main>
  );
};

export default Chapter2;
