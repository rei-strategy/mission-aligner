import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const MissionBuilder = () => {
  const [answers, setAnswers] = useState<string[]>(['', '', '']);
  
  const prompts = [
    "What impact do you want to make in the recovery community?",
    "How will your work transform lives?",
    "What unique value do you bring to those in recovery?",
  ];

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSave = () => {
    const mission = answers.filter(answer => answer.trim()).join('\n\n');
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
        <div className="space-y-4">
          {prompts.map((prompt, index) => (
            <div key={index} className="space-y-2">
              <p className="text-base text-muted-foreground">{prompt}</p>
              <Textarea
                placeholder="Type your answer here..."
                value={answers[index]}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className="min-h-[80px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
              />
            </div>
          ))}
        </div>
        <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
          Save Mission Statement
        </Button>
      </CardContent>
    </Card>
  );
};

export default MissionBuilder;