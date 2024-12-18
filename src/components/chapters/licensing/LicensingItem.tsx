import { Checkbox } from "@/components/ui/checkbox";

interface LicensingItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckboxChange: (id: string) => void;
}

export const LicensingItem = ({ id, label, checked, onCheckboxChange }: LicensingItemProps) => {
  return (
    <div className="flex items-center space-x-2 [&_*]:text-black">
      <Checkbox 
        id={id} 
        checked={checked} 
        onCheckedChange={() => onCheckboxChange(id)}
        className="border-black data-[state=checked]:bg-black data-[state=checked]:text-white"
      />
      <label htmlFor={id} className="cursor-pointer">{label}</label>
    </div>
  );
};