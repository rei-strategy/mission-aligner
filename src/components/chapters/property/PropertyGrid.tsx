import { PropertyChecklist } from "./checklists/PropertyChecklist";
import { ZoningChecklist } from "./checklists/ZoningChecklist";
import { CostChecklist } from "./checklists/CostChecklist";

interface PropertyGridProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const PropertyGrid = ({ checkedItems, onCheckboxChange }: PropertyGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <PropertyChecklist 
        checkedItems={checkedItems}
        onCheckboxChange={onCheckboxChange}
      />
      <ZoningChecklist 
        checkedItems={checkedItems}
        onCheckboxChange={onCheckboxChange}
      />
      <CostChecklist 
        checkedItems={checkedItems}
        onCheckboxChange={onCheckboxChange}
      />
    </div>
  );
};