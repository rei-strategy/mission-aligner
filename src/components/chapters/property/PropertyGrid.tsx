import React from 'react';
import PropertyChecklist from './PropertyChecklist';
import { CostBenefitCalculator } from './CostBenefitCalculator';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, FileCheck, Calculator } from "lucide-react";

export const PropertyGrid = () => {
  const suitabilityItems = [
    { id: "location", label: "Suitable Location and Accessibility", checked: false },
    { id: "size", label: "Adequate Size and Layout", checked: false },
    { id: "condition", label: "Good Structural Condition", checked: false },
    { id: "safety", label: "Safety Features Present", checked: false },
    { id: "parking", label: "Sufficient Parking Space", checked: false },
  ];

  const zoningItems = [
    { id: "residential", label: "Residential Zoning Compliance", checked: false },
    { id: "occupancy", label: "Occupancy Limits Met", checked: false },
    { id: "permits", label: "Required Permits Available", checked: false },
    { id: "ada", label: "ADA Compliance", checked: false },
    { id: "fire", label: "Fire Safety Regulations Met", checked: false },
  ];

  const costItems = [
    { id: "purchase", label: "Purchase/Lease Costs", checked: false },
    { id: "renovation", label: "Renovation Expenses", checked: false },
    { id: "maintenance", label: "Monthly Maintenance Costs", checked: false },
    { id: "utilities", label: "Utility Expenses", checked: false },
    { id: "insurance", label: "Insurance Requirements", checked: false },
  ];

  return (
    <div className="space-y-8">
      <TabsContent value="overview" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PropertyChecklist 
            title="Property Suitability Checklist" 
            items={suitabilityItems}
          />
          <PropertyChecklist 
            title="Zoning and Compliance Guide" 
            items={zoningItems}
          />
          <PropertyChecklist 
            title="Cost-Benefit Analysis" 
            items={costItems}
          />
        </div>
        <div className="w-full">
          <CostBenefitCalculator />
        </div>
      </TabsContent>
      
      <TabsContent value="checklist" className="mt-6">
        <div className="grid grid-cols-1 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#9b87f5]/10 p-3 rounded-full">
                  <ClipboardCheck className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Property Suitability Checklist</h3>
              </div>
              <PropertyChecklist 
                title="" 
                items={suitabilityItems}
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#9b87f5]/10 p-3 rounded-full">
                  <FileCheck className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Zoning and Compliance Guide</h3>
              </div>
              <PropertyChecklist 
                title="" 
                items={zoningItems}
              />
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#9b87f5]/10 p-3 rounded-full">
                  <Calculator className="h-6 w-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Cost-Benefit Analysis</h3>
              </div>
              <PropertyChecklist 
                title="" 
                items={costItems}
              />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </div>
  );
};