import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BarChart2 } from "lucide-react";

interface CostChecklistProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const CostChecklist = ({ checkedItems, onCheckboxChange }: CostChecklistProps) => {
  const items = [
    { id: "ca-1", label: "Purchase price analysis" },
    { id: "ca-2", label: "Renovation costs" },
    { id: "ca-3", label: "Monthly mortgage" },
    { id: "ca-4", label: "Insurance costs" },
    { id: "ca-5", label: "Property taxes" },
    { id: "ca-6", label: "Utility estimates" },
    { id: "ca-7", label: "Maintenance budget" },
    { id: "ca-8", label: "ROI calculation" }
  ];

  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
            <BarChart2 className="h-5 w-5 text-blue-300" />
          </div>
          Cost-Benefit Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox 
                id={item.id} 
                checked={checkedItems[item.id]} 
                onCheckedChange={() => onCheckboxChange(item.id)}
                className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#13171A]"
              />
              <label htmlFor={item.id} className="cursor-pointer">{item.label}</label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};