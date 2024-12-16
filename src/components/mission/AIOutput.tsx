import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface AIOutputProps {
  output: string;
  onSave?: () => void;
}

const AIOutput = ({ output, onSave }: AIOutputProps) => {
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
          className="min-h-[400px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
        />
        <Button 
          onClick={onSave}
          className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
        >
          Save Mission Statement
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIOutput;