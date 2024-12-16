import React, { useState } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import MissionInputForm from './mission/MissionInputForm';
import AIOutput from './mission/AIOutput';

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
      <MissionInputForm
        prompts={prompts}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        onGenerateClick={generateAIMission}
        onSaveClick={handleSave}
        isGenerating={isGenerating}
      />
      <AIOutput output={aiOutput} onSave={handleSave} />
    </div>
  );
};

export default MissionBuilder;