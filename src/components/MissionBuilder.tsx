import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const MissionBuilder = () => {
  const [answers, setAnswers] = useState<string[]>(['', '', '']);
  const [aiOutput, setAiOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  
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

  const generateAIMission = async () => {
    setIsGenerating(true);
    console.log("Starting AI mission generation with answers:", answers);

    // Check if we have enough content to generate
    if (answers.filter(answer => answer.trim()).length < 2) {
      toast.error("Please fill in at least two prompts for AI suggestions");
      setIsGenerating(false);
      return;
    }

    try {
      console.log("Invoking Supabase Edge Function: generate-mission");
      const { data, error } = await supabase.functions.invoke('generate-mission', {
        body: { answers }
      });

      console.log("Edge Function response:", { data, error });

      if (error) {
        console.error("Supabase Edge Function error:", error);
        throw new Error(error.message || 'Failed to generate mission statement');
      }

      if (!data?.mission) {
        console.error("No mission data in response:", data);
        throw new Error('Invalid response from mission generator');
      }

      // Update AI output textarea
      setAiOutput(data.mission);
      
      toast.success("AI suggestion generated!");
      console.log("Successfully generated mission statement:", data.mission);
    } catch (error) {
      console.error("Error in generateAIMission:", error);
      toast.error(error.message || "Failed to generate mission statement. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex gap-6">
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
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="min-h-[80px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <Button 
              onClick={generateAIMission} 
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-lg py-6"
              disabled={isGenerating}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {isGenerating ? "Generating..." : "Get AI Suggestions"}
            </Button>
            <Button 
              onClick={handleSave} 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-lg py-6"
            >
              Save Mission Statement
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[35%] animate-fade-in">
        <CardHeader>
          <CardTitle className="text-accent">AI Generated Output</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={aiOutput}
            readOnly
            placeholder="AI suggestions will appear here..."
            className="min-h-[400px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default MissionBuilder;