import React from 'react';
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
        <div className="flex gap-4">
          <Button 
            onClick={onGenerateClick} 
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-lg py-6"
            disabled={isGenerating}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            {isGenerating ? "Generating..." : "Get AI Suggestions"}
          </Button>
          <Button 
            onClick={onSaveClick} 
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg py-6"
          >
            Save Mission Statement
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissionInputForm;