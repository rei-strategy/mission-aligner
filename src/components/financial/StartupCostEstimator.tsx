import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Coins } from "lucide-react";

interface CostItem {
  category: string;
  items: { name: string; amount: number }[];
}

export const StartupCostEstimator = () => {
  const [costs, setCosts] = useState<CostItem[]>([
    {
      category: "Property Expenses",
      items: [
        { name: "Down Payment", amount: 0 },
        { name: "Closing Costs", amount: 0 },
        { name: "Initial Repairs", amount: 0 }
      ]
    },
    {
      category: "Renovations",
      items: [
        { name: "Bedroom Furnishings", amount: 0 },
        { name: "Common Areas", amount: 0 },
        { name: "Safety Equipment", amount: 0 }
      ]
    },
    {
      category: "Staffing",
      items: [
        { name: "Initial Training", amount: 0 },
        { name: "First Month Salaries", amount: 0 },
        { name: "HR Setup", amount: 0 }
      ]
    }
  ]);

  const handleCostChange = (categoryIndex: number, itemIndex: number, value: string) => {
    const newCosts = [...costs];
    newCosts[categoryIndex].items[itemIndex].amount = Number(value) || 0;
    setCosts(newCosts);
  };

  const calculateTotal = () => {
    return costs.reduce((total, category) => 
      total + category.items.reduce((catTotal, item) => catTotal + item.amount, 0)
    , 0);
  };

  return (
    <Card className="bg-black-600 border-black-500">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg">
            <Coins className="h-5 w-5 text-blue-300" />
          </div>
          <h2 className="text-2xl font-bold text-gray-100">Startup Cost Estimator</h2>
        </div>
        <p className="text-gray-400">Calculate your initial investment requirements</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {costs.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-200">{category.category}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="space-y-2">
                    <Label htmlFor={`${category.category}-${item.name}`} className="text-gray-300">
                      {item.name}
                    </Label>
                    <Input
                      id={`${category.category}-${item.name}`}
                      type="number"
                      value={item.amount || ''}
                      onChange={(e) => handleCostChange(categoryIndex, itemIndex, e.target.value)}
                      className="bg-black-500 border-black-400 text-gray-100"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-black-500">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-200">Total Estimated Cost:</span>
              <span className="text-2xl font-bold text-blue-300">${calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};