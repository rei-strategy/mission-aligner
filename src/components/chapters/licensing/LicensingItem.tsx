import { Checkbox } from "@/components/ui/checkbox";

interface LicensingItemProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckboxChange: (id: string) => void;
}

export const LicensingItem = ({ id, label, checked, onCheckboxChange }: LicensingItemProps) => {
  return (
    <div className="flex items-center space-x-2 [&_*]:text-white">
      <Checkbox 
        id={id} 
        checked={checked} 
        onCheckedChange={() => onCheckboxChange(id)}
        className="border-white data-[state=checked]:bg-white data-[state=checked]:text-[#13171A]"
      />
      <label htmlFor={id} className="cursor-pointer">{label}</label>
    </div>
  );
};