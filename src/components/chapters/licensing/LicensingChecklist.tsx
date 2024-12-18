import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";
import { LicensingItem } from "./LicensingItem";

interface LicensingChecklistProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingChecklist = ({ checkedItems, onCheckboxChange }: LicensingChecklistProps) => {
  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
            <ListChecks className="h-5 w-5 text-blue-300" />
          </div>
          Licensing Checklist
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <LicensingItem
          id="business-license"
          label="Obtain Business License"
          checked={checkedItems["business-license"]}
          onCheckboxChange={onCheckboxChange}
        />
        <LicensingItem
          id="zoning-permit"
          label="Secure Zoning Permit"
          checked={checkedItems["zoning-permit"]}
          onCheckboxChange={onCheckboxChange}
        />
        <LicensingItem
          id="fire-safety"
          label="Pass Fire Safety Inspection"
          checked={checkedItems["fire-safety"]}
          onCheckboxChange={onCheckboxChange}
        />
        <LicensingItem
          id="health-inspection"
          label="Complete Health Department Inspection"
          checked={checkedItems["health-inspection"]}
          onCheckboxChange={onCheckboxChange}
        />
      </CardContent>
    </Card>
  );
};