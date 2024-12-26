import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText } from "lucide-react";

interface ZoningChecklistProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const ZoningChecklist = ({ checkedItems, onCheckboxChange }: ZoningChecklistProps) => {
  const items = [
    { id: "zc-1", label: "Residential zoning compliance" },
    { id: "zc-2", label: "Group home regulations" },
    { id: "zc-3", label: "Occupancy limits" },
    { id: "zc-4", label: "Distance requirements" },
    { id: "zc-5", label: "Parking regulations" },
    { id: "zc-6", label: "Fire safety codes" },
    { id: "zc-7", label: "ADA compliance" },
    { id: "zc-8", label: "Local ordinances review" }
  ];

  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
            <FileText className="h-5 w-5 text-blue-300" />
          </div>
          Zoning and Compliance Guide
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