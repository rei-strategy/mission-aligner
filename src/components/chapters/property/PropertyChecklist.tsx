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
    <Card className="w-full">
      <CardContent className="space-y-6 pt-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors cursor-pointer ${
              item.checked ? 'bg-[#0A1D4D]' : 'bg-[#1E3A8A]'
            }`}
            onClick={() => handleToggle(item.id)}
          >
            <Checkbox
              id={item.id}
              checked={item.checked}
              onCheckedChange={(e) => {
                e?.stopPropagation();
                handleToggle(item.id);
              }}
              className="h-5 w-5"
            />
            <Label 
              htmlFor={item.id} 
              className="text-base cursor-pointer flex-grow text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {item.label}
            </Label>
          </div>
        ))}
        <Button onClick={handleSave} className="w-full bg-[#00BEFF] hover:bg-[#00BEFF]/90 text-black text-lg py-6">
          Save {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyChecklist;