import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { LicensingChecklist } from "@/components/chapter2/LicensingChecklist";
import { ZoningResearch } from "@/components/chapter2/ZoningResearch";
import { LegalConsultation } from "@/components/chapter2/LegalConsultation";

const Chapter2 = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-black mb-3">Legal and Business Setup</h1>
          <p className="text-lg text-black">Essential steps for establishing your sober living home as a legal business entity</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">Business Structure and Legal Requirements</h2>
          <p className="text-black text-lg">Understanding the legal framework and choosing the right business structure for your sober living home operation.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="col-span-1">
            <LicensingChecklist 
              checkedItems={checkedItems}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
          <ZoningResearch />
          <LegalConsultation />
        </div>
      </div>
    </main>
  );
};

export default Chapter2;