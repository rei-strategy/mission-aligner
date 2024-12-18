import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { LicensingItem } from "./LicensingItem";
import { FileCheck } from "lucide-react";

interface LicensingSectionProps {
  value: string;
  title: string;
  items: { id: string; label: string }[];
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingSection = ({ value, title, items, checkedItems, onCheckboxChange }: LicensingSectionProps) => {
  return (
    <AccordionItem value={value} className="bg-[#13171A] [&_*]:text-white border-white/20">
      <AccordionTrigger className="hover:text-white/70">
        <div className="flex items-center gap-2">
          <div className="bg-[#00BEFF]/10 p-2 rounded-full">
            <FileCheck className="h-5 w-5 text-[#00BEFF]" />
          </div>
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent>
        {items.map(item => (
          <LicensingItem
            key={item.id}
            id={item.id}
            label={item.label}
            checked={checkedItems[item.id] || false}
            onCheckboxChange={onCheckboxChange}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
