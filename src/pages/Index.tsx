import React from 'react';
import MissionBuilder from '@/components/MissionBuilder';
import ValuesChecklist from '@/components/ValuesChecklist';
import AlignmentPlanner from '@/components/AlignmentPlanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-accent mb-2">Sober Living for Beginners</h1>
          <p className="text-muted-foreground">Your step-by-step guide to establishing and managing a successful sober living business</p>
        </header>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <MissionBuilder />
          <ValuesChecklist />
          <AlignmentPlanner />
        </div>
      </div>
    </div>
  );
};

export default Index;