import React, { useState, useEffect } from 'react';
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
  const [savedMission, setSavedMission] = useState<string>('');

  useEffect(() => {
    const storedMission = localStorage.getItem('missionStatement');
    if (storedMission) {
      setSavedMission(storedMission);
    }
  }, []);

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
      <CardContent className="space-y-6">
        {values.map((value) => (
          <div key={value.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-black-700 transition-colors">
            <Checkbox
              id={value.id}
              checked={value.checked}
              onCheckedChange={() => handleToggle(value.id)}
              className="h-5 w-5"
            />
            <Label htmlFor={value.id} className="text-base cursor-pointer">
              {value.label}
            </Label>
          </div>
        ))}
        <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
          Save Values
        </Button>
        {savedMission && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Your Last Saved Mission Statement:</h3>
            <p className="text-gray-700 whitespace-pre-line">{savedMission}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ValuesChecklist;