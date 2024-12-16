import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Value {
  id: string;
  label: string;
  checked: boolean;
  priority: number;
}

const ValuesChecklist = () => {
  const [values, setValues] = useState<Value[]>([
    { id: "integrity", label: "Integrity in Recovery Support", checked: false, priority: 0 },
    { id: "empathy", label: "Empathetic Understanding", checked: false, priority: 0 },
    { id: "growth", label: "Continuous Growth", checked: false, priority: 0 },
    { id: "community", label: "Community Building", checked: false, priority: 0 },
    { id: "accountability", label: "Accountability", checked: false, priority: 0 },
  ]);

  const handleToggle = (id: string) => {
    setValues(values.map(value => 
      value.id === id ? { ...value, checked: !value.checked } : value
    ));
  };

  const handleSave = () => {
    localStorage.setItem('personalValues', JSON.stringify(values));
    toast.success("Values saved successfully!");
    console.log("Values saved:", values);
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-accent">Personal Values Checklist</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {values.map((value) => (
          <div key={value.id} className="flex items-center space-x-2">
            <Checkbox
              id={value.id}
              checked={value.checked}
              onCheckedChange={() => handleToggle(value.id)}
            />
            <Label htmlFor={value.id} className="text-sm">
              {value.label}
            </Label>
          </div>
        ))}
        <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90">
          Save Values
        </Button>
      </CardContent>
    </Card>
  );
};

export default ValuesChecklist;