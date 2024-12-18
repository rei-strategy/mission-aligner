import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListCheck, Target, BarChart } from "lucide-react";

const CompetitorAnalysis = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <ListCheck className="h-6 w-6 text-gray-600" />
          <CardTitle>Competitor Analysis Checklist</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border p-4">
            <Target className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold">Market Gaps</h3>
              <p className="text-sm text-gray-600">
                Identify underserved populations and service gaps
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border p-4">
            <BarChart className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold">Service Analysis</h3>
              <p className="text-sm text-gray-600">
                Compare existing facilities and their offerings
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorAnalysis;