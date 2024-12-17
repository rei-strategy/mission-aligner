import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface AIOutputProps {
  output: string;
  onSave?: () => void;
}

const AIOutput = ({ output, onSave }: AIOutputProps) => {
  const handleSave = () => {
    localStorage.setItem('aiGeneratedOutput', output);
    if (onSave) {
      onSave();
    }
  };

  return (
    <Card className="w-[35%] animate-fade-in">
      <CardHeader>
        <CardTitle className="text-accent">AI Generated Output</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={output}
          readOnly
          placeholder="AI suggestions will appear here..."
          className="min-h-[380px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
        />
        <Button 
          onClick={handleSave}
          className="w-full bg-[#00BEFF] hover:bg-[#00BEFF]/90 text-lg py-6"
        >
          Save Mission Statement
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIOutput;