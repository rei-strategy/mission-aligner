import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ChecklistItem {
  id: string;
  label: string;
  checked: boolean;
}

interface PropertyChecklistProps {
  title: string;
  items: ChecklistItem[];
}

const PropertyChecklist = ({ title, items: initialItems }: PropertyChecklistProps) => {
  const [items, setItems] = useState<ChecklistItem[]>(initialItems);

  const handleToggle = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleSave = () => {
    console.log(`Saving ${title}:`, items);
    toast.success(`${title} saved successfully!`);
  };

  return (
    <div className="space-y-4">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 cursor-pointer hover:bg-[#E5DEFF] ${
              item.checked ? 'bg-[#E5DEFF]' : 'bg-[#F2FCE2]'
            }`}
            onClick={() => handleToggle(item.id)}
          >
            <Checkbox
              id={item.id}
              checked={item.checked}
              onCheckedChange={() => handleToggle(item.id)}
              className="h-5 w-5 border-2 border-[#9b87f5] data-[state=checked]:bg-[#9b87f5] data-[state=checked]:text-white"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
            <Label 
              htmlFor={item.id} 
              className="text-base cursor-pointer flex-grow text-gray-700"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {item.label}
            </Label>
          </div>
        ))}
      </div>
      <Button 
        onClick={handleSave} 
        className="w-full bg-[#9b87f5] hover:bg-[#9b87f5]/90 text-white text-lg py-6 mt-4"
      >
        Save {title}
      </Button>
    </div>
  );
};

export default PropertyChecklist;