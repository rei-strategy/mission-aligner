import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { LicensingSection } from "./LicensingSection";
import { ListCheck } from "lucide-react";

interface Task {
  id: string;
  label: string;
}

interface Section {
  section: string;
  tasks: Task[];
}

interface InfoCardProps {
  title: string;
  items: Section[] | string[];
  checkedItems?: { [key: string]: boolean };
  onCheckboxChange?: (id: string) => void;
}

export const InfoCard = ({ title, items, checkedItems = {}, onCheckboxChange = () => {} }: InfoCardProps) => {
  // Check if items is an array of sections (for zoning research) or strings (for legal consultation)
  const isZoningResearch = items.length > 0 && typeof items[0] !== 'string';

  return (
    <Card className="bg-[#13171A] [&_*]:text-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center gap-2">
          <ListCheck className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isZoningResearch ? (
          <Accordion type="single" collapsible className="w-full">
            {(items as Section[]).map((section) => (
              <LicensingSection
                key={section.section}
                value={section.section.toLowerCase().replace(/\s+/g, '-')}
                title={section.section}
                items={section.tasks}
                checkedItems={checkedItems}
                onCheckboxChange={onCheckboxChange}
              />
            ))}
          </Accordion>
        ) : (
          <ul className="space-y-2">
            {(items as string[]).map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};