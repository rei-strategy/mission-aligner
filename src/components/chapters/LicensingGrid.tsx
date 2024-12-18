import { LicensingChecklist } from "./licensing/LicensingChecklist";
import { InfoCard } from "./licensing/InfoCard";
import { infoCards } from "@/data/licensingData";

interface LicensingGridProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingGrid = ({ checkedItems, onCheckboxChange }: LicensingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <LicensingChecklist 
        checkedItems={checkedItems}
        onCheckboxChange={onCheckboxChange}
      />

      {infoCards.map((card, index) => (
        <InfoCard 
          key={index} 
          title={card.title} 
          items={card.items}
          checkedItems={checkedItems}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
    </div>
  );
};