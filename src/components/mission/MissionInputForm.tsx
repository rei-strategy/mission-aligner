import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MissionInputFormProps {
  prompts: string[];
  answers: string[];
  onAnswerChange: (index: number, value: string) => void;
  onGenerateClick: () => void;
  onSaveClick: () => void;
  isGenerating: boolean;
}

const MissionInputForm = ({
  prompts,
  answers,
  onAnswerChange,
  onGenerateClick,
  onSaveClick,
  isGenerating
}: MissionInputFormProps) => {
  const [savedMission, setSavedMission] = useState<string>('');

  useEffect(() => {
    const storedMission = localStorage.getItem('missionStatement');
    if (storedMission) {
      setSavedMission(storedMission);
    }
  }, []);

  const handleSave = () => {
    onSaveClick();
    const storedMission = localStorage.getItem('missionStatement');
    if (storedMission) {
      setSavedMission(storedMission);
    }
  };

  return (
    <Card className="w-[65%] animate-fade-in">
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
                onChange={(e) => onAnswerChange(index, e.target.value)}
                className="min-h-[80px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
              />
            </div>
          ))}
        </div>
        <Button 
          onClick={onGenerateClick} 
          className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6"
          disabled={isGenerating}
        >
          <Sparkles className="mr-2 h-5 w-5" />
          {isGenerating ? "Generating..." : "Get AI Suggestions"}
        </Button>
        {savedMission && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Your Saved Mission Statement:</h3>
            <p className="text-gray-700 whitespace-pre-line">{savedMission}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MissionInputForm;