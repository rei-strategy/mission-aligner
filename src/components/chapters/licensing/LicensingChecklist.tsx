import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { LicensingSection } from "./LicensingSection";
import { licensingSections } from "@/data/licensingData";

interface LicensingChecklistProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingChecklist = ({ checkedItems, onCheckboxChange }: LicensingChecklistProps) => {
  return (
    <Card className="bg-white [&_*]:text-black">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Licensing Checklist</CardTitle>
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