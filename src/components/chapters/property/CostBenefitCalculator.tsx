import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

interface CostItem {
  label: string;
  value: number;
}

export const CostBenefitCalculator = () => {
  const [costs, setCosts] = useState<CostItem[]>([
    { label: "Purchase Price", value: 0 },
    { label: "Renovation Costs", value: 0 },
    { label: "Annual Maintenance", value: 0 },
    { label: "Insurance", value: 0 },
    { label: "Property Tax", value: 0 }
  ]);

  const [benefits, setBenefits] = useState<CostItem[]>([
    { label: "Monthly Rent per Resident", value: 0 },
    { label: "Expected Number of Residents", value: 0 },
    { label: "Additional Service Fees", value: 0 },
    { label: "Tax Benefits", value: 0 }
  ]);

  const handleCostChange = (index: number, value: string) => {
    const newCosts = [...costs];
    newCosts[index].value = Number(value) || 0;
    setCosts(newCosts);
  };

  const handleBenefitChange = (index: number, value: string) => {
    const newBenefits = [...benefits];
    newBenefits[index].value = Number(value) || 0;
    setBenefits(newBenefits);
  };

  const calculateTotalCosts = () => {
    return costs.reduce((acc, item) => acc + item.value, 0);
  };

  const calculateAnnualBenefits = () => {
    const monthlyRent = benefits[0].value * benefits[1].value;
    const annualRent = monthlyRent * 12;
    const additionalFees = benefits[2].value;
    const taxBenefits = benefits[3].value;
    return annualRent + additionalFees + taxBenefits;
  };

  const calculateROI = () => {
    const totalCosts = calculateTotalCosts();
    const annualBenefits = calculateAnnualBenefits();
    if (totalCosts === 0) return 0;
    return ((annualBenefits / totalCosts) * 100).toFixed(2);
  };

  return (
    <Card className="w-full mt-8 bg-[#13171A] text-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600/10 p-2 rounded-lg">
            <Calculator className="h-5 w-5 text-blue-300" />
          </div>
          <h3 className="text-xl font-semibold">Cost-Benefit Calculator</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">Costs</h4>
            {costs.map((cost, index) => (
              <div key={cost.label} className="space-y-2">
                <Label htmlFor={`cost-${index}`}>{cost.label}</Label>
                <Input
                  id={`cost-${index}`}
                  type="number"
                  value={cost.value || ''}
                  onChange={(e) => handleCostChange(index, e.target.value)}
                  className="bg-gray-700 border-gray-600"
                  placeholder="0"
                />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">Benefits</h4>
            {benefits.map((benefit, index) => (
              <div key={benefit.label} className="space-y-2">
                <Label htmlFor={`benefit-${index}`}>{benefit.label}</Label>
                <Input
                  id={`benefit-${index}`}
                  type="number"
                  value={benefit.value || ''}
                  onChange={(e) => handleBenefitChange(index, e.target.value)}
                  className="bg-gray-700 border-gray-600"
                  placeholder="0"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-gray-400 mb-2">Total Costs</p>
              <p className="text-2xl font-bold">${calculateTotalCosts().toLocaleString()}</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-gray-400 mb-2">Annual Benefits</p>
              <p className="text-2xl font-bold text-green-400">${calculateAnnualBenefits().toLocaleString()}</p>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <p className="text-gray-400 mb-2">ROI</p>
              <p className="text-2xl font-bold text-blue-400">{calculateROI()}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};