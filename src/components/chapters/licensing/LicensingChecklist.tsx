import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ListChecks } from "lucide-react";

interface LicensingChecklistProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingChecklist = ({ checkedItems, onCheckboxChange }: LicensingChecklistProps) => {
  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="bg-[#00BEFF]/10 p-2 rounded-full">
            <ListChecks className="h-5 w-5 text-[#00BEFF]" />
          </div>
          Licensing Requirements Checklist
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.keys(checkedItems).map((id) => (
            <div key={id} className="flex items-center">
              <Checkbox
                id={id}
                checked={checkedItems[id]}
                onCheckedChange={() => onCheckboxChange(id)}
                className="h-5 w-5"
              />
              <label htmlFor={id} className="ml-2 text-base cursor-pointer">
                {id}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
