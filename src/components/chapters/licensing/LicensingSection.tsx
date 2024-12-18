import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LicensingItem } from "./LicensingItem";

interface LicensingSectionProps {
  value: string;
  title: string;
  items: Array<{ id: string; label: string }>;
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingSection = ({ value, title, items, checkedItems, onCheckboxChange }: LicensingSectionProps) => {
  return (
    <AccordionItem value={value} className="bg-[#13171A] [&_*]:text-white border-white/20">
      <AccordionTrigger className="hover:text-white/70">{title}</AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3">
          {items.map((item) => (
            <LicensingItem
              key={item.id}
              id={item.id}
              label={item.label}
              checked={checkedItems[item.id]}
              onCheckboxChange={onCheckboxChange}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};