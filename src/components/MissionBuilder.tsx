import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const MissionBuilder = () => {
  const [mission, setMission] = useState('');
  
  const prompts = [
    "What impact do you want to make in the recovery community?",
    "How will your work transform lives?",
    "What unique value do you bring to those in recovery?",
  ];

  const handleSave = () => {
    if (mission.trim()) {
      localStorage.setItem('missionStatement', mission);
      toast.success("Mission statement saved!");
      console.log("Mission statement saved:", mission);
    }
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-accent">Mission Statement Builder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          {prompts.map((prompt, index) => (
            <p key={index} className="text-base text-muted-foreground">{prompt}</p>
          ))}
        </div>
        <Textarea
          placeholder="Our mission is to..."
          value={mission}
          onChange={(e) => setMission(e.target.value)}
          className="min-h-[200px] text-lg"
        />
        <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
          Save Mission Statement
        </Button>
      </CardContent>
    </Card>
  );
};

export default MissionBuilder;