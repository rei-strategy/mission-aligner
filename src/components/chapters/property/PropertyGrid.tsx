import React from 'react';
import PropertyChecklist from './PropertyChecklist';
import { CostBenefitCalculator } from './CostBenefitCalculator';

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
      <div className="w-full">
        <CostBenefitCalculator />
      </div>
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
    </div>
  );
};