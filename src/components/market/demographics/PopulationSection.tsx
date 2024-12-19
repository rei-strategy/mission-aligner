import { BarChart } from "lucide-react";

const PopulationSection = () => {
  return (
    <div className="flex items-start gap-2 rounded-lg border p-4">
      <BarChart className="h-5 w-5 text-gray-500" />
      <div>
        <h3 className="font-semibold">Population Statistics</h3>
        <p className="text-sm text-gray-600">
          Analyze addiction recovery rates and treatment needs
        </p>
      </div>
    </div>
  );
};

export default PopulationSection;