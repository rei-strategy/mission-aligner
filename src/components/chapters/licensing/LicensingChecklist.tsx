import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { LicensingSection } from "./LicensingSection";
import { licensingSections } from "@/data/licensingData";
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
          <div className="bg-blue-600/10 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
            <ListChecks className="h-5 w-5 text-blue-300" />
          </div>
          Licensing Checklist
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {licensingSections.map((section) => (
            <LicensingSection
              key={section.value}
              value={section.value}
              title={section.title}
              items={section.items}
              checkedItems={checkedItems}
              onCheckboxChange={onCheckboxChange}
            />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};