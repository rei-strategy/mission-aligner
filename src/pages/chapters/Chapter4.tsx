import { Separator } from "@/components/ui/separator";
import MissionBuilder from "@/components/MissionBuilder";
import ValuesChecklist from "@/components/ValuesChecklist";
import AlignmentPlanner from "@/components/AlignmentPlanner";

const Chapter4 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Mission and Values</h1>
          <p className="text-lg text-gray-600">Define your sober living home's purpose and guiding principles</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <div className="space-y-12">
          <MissionBuilder />
          <ValuesChecklist />
          <AlignmentPlanner />
        </div>
      </div>
    </main>
  );
};

export default Chapter4;