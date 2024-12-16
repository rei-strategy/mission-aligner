import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface AIOutputProps {
  output: string;
  onSave?: () => void;
}

const AIOutput = ({ output, onSave }: AIOutputProps) => {
  const [savedMission, setSavedMission] = useState<string>('');

  useEffect(() => {
    const storedMission = localStorage.getItem('missionStatement');
    if (storedMission) {
      setSavedMission(storedMission);
    }
  }, []);

  const handleSave = () => {
    if (onSave) {
      onSave();
      const storedMission = localStorage.getItem('missionStatement');
      if (storedMission) {
        setSavedMission(storedMission);
      }
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
          className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
        >
          Save Mission Statement
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

export default AIOutput;