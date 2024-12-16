import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

interface AIOutputProps {
  output: string;
}

const AIOutput = ({ output }: AIOutputProps) => {
  return (
    <Card className="w-[35%] animate-fade-in">
      <CardHeader>
        <CardTitle className="text-accent">AI Generated Output</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={output}
          readOnly
          placeholder="AI suggestions will appear here..."
          className="min-h-[400px] text-base bg-[#F1F1F1] text-[#222222] placeholder:text-[#555555]"
        />
      </CardContent>
    </Card>
  );
};

export default AIOutput;