import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PiggyBank } from "lucide-react";

interface BudgetItem {
  category: string;
  items: { name: string; amount: number }[];
}

export const MonthlyBudgetPlanner = () => {
  const [budget, setBudget] = useState<BudgetItem[]>([
    {
      category: "Income",
      items: [
        { name: "Resident Fees", amount: 0 },
        { name: "Program Services", amount: 0 },
        { name: "Other Income", amount: 0 }
      ]
    },
    {
      category: "Fixed Expenses",
      items: [
        { name: "Mortgage/Rent", amount: 0 },
        { name: "Insurance", amount: 0 },
        { name: "Utilities", amount: 0 },
        { name: "Staff Salaries", amount: 0 }
      ]
    },
    {
      category: "Variable Expenses",
      items: [
        { name: "Maintenance", amount: 0 },
        { name: "Supplies", amount: 0 },
        { name: "Marketing", amount: 0 }
      ]
    }
  ]);

  const handleBudgetChange = (categoryIndex: number, itemIndex: number, value: string) => {
    const newBudget = [...budget];
    newBudget[categoryIndex].items[itemIndex].amount = Number(value) || 0;
    setBudget(newBudget);
  };

  const calculateIncome = () => {
    return budget[0].items.reduce((total, item) => total + item.amount, 0);
  };

  const calculateExpenses = () => {
    return budget.slice(1).reduce((total, category) => 
      total + category.items.reduce((catTotal, item) => catTotal + item.amount, 0)
    , 0);
  };

  const calculateNetIncome = () => {
    return calculateIncome() - calculateExpenses();
  };

  return (
    <Card className="bg-[#E6E7E8] border-gray-200">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg">
            <PiggyBank className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Monthly Budget Planner</h2>
        </div>
        <p className="text-gray-600">Plan your monthly income and expenses</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budget.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, itemIndex) => (
                  <div key={item.name} className="space-y-2">
                    <Label htmlFor={`${category.category}-${item.name}`} className="text-gray-700">
                      {item.name}
                    </Label>
                    <Input
                      id={`${category.category}-${item.name}`}
                      type="number"
                      value={item.amount || ''}
                      onChange={(e) => handleBudgetChange(categoryIndex, itemIndex, e.target.value)}
                      className="bg-white border-gray-200 text-gray-800"
                      placeholder="0"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-gray-200 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Monthly Income:</span>
              <span className="text-lg font-semibold text-green-600">
                ${calculateIncome().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Monthly Expenses:</span>
              <span className="text-lg font-semibold text-red-600">
                ${calculateExpenses().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="text-lg font-semibold text-gray-800">Net Monthly Income:</span>
              <span className={`text-2xl font-bold ${calculateNetIncome() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${calculateNetIncome().toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};