import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface AlignmentItem {
  id: string;
  mission: string;
  strategy: string;
}

const AlignmentPlanner = () => {
  const [alignments, setAlignments] = useState<AlignmentItem[]>([
    { id: '1', mission: '', strategy: '' }
  ]);

  const addAlignment = () => {
    setAlignments([...alignments, { 
      id: String(alignments.length + 1),
      mission: '',
      strategy: ''
    }]);
  };

  const updateAlignment = (id: string, field: 'mission' | 'strategy', value: string) => {
    setAlignments(alignments.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSave = () => {
    localStorage.setItem('alignmentPlan', JSON.stringify(alignments));
    toast.success("Alignment plan saved!");
    console.log("Alignment plan saved:", alignments);
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-accent">Mission-Operations Alignment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {alignments.map((item) => (
          <div key={item.id} className="space-y-3 p-4 rounded-lg bg-black-700">
            <Input
              placeholder="Mission Component"
              value={item.mission}
              onChange={(e) => updateAlignment(item.id, 'mission', e.target.value)}
              className="text-base mb-3"
            />
            <Input
              placeholder="Operational Strategy"
              value={item.strategy}
              onChange={(e) => updateAlignment(item.id, 'strategy', e.target.value)}
              className="text-base"
            />
          </div>
        ))}
        <Button 
          onClick={addAlignment}
          variant="outline" 
          className="w-full mb-3 text-lg py-6"
        >
          Add Another Alignment
        </Button>
        <Button 
          onClick={handleSave}
          className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
        >
          Save Alignment Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default AlignmentPlanner;