import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ListChecks } from "lucide-react";

interface PropertyChecklistProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const PropertyChecklist = ({ checkedItems, onCheckboxChange }: PropertyChecklistProps) => {
  const items = [
    { id: "ps-1", label: "Adequate bedroom count" },
    { id: "ps-2", label: "Common area space" },
    { id: "ps-3", label: "Kitchen facilities" },
    { id: "ps-4", label: "Bathroom ratio" },
    { id: "ps-5", label: "Storage space" },
    { id: "ps-6", label: "Outdoor space" },
    { id: "ps-7", label: "Parking availability" },
    { id: "ps-8", label: "Safety features" }
  ];

  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
            <ListChecks className="h-5 w-5 text-blue-300" />
          </div>
          Property Suitability Checklist
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