import { Checkbox } from "@/components/ui/checkbox";

interface LicensingItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckboxChange: (id: string) => void;
}

export const LicensingItem = ({ id, label, checked, onCheckboxChange }: LicensingItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox 
        id={id} 
        checked={checked} 
        onCheckedChange={() => onCheckboxChange(id)}
      />
      <label htmlFor={id} className="text-black">{label}</label>
    </div>
  );
};