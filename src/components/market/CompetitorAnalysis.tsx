import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListCheck, Target, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="flex flex-col cursor-pointer hover:bg-gray-50 transition-colors rounded-lg border p-4">
            <div className="flex items-start gap-2">
              <Target className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <h3 className="font-semibold">Market Gaps</h3>
                <p className="text-sm text-gray-600">
                  Identify underserved populations and service gaps
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-4 border-t pt-4">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-700">Gap Analysis Tools</h4>
                <div className="grid gap-2">
                  <Button 
                    variant="outline" 
                    className="justify-start flex-1 bg-[#1A1F2C] text-white hover:bg-[#1A1F2C] hover:text-white"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Population Need Assessment
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start hover:bg-transparent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Service Coverage Analysis
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start hover:bg-transparent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Demographic Gap Study
                  </Button>
                  <Button 
                    variant="outline" 
                    className="justify-start hover:bg-transparent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Resource Distribution Map
                  </Button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  Pro tip: Focus on areas with high demand but limited existing services to maximize impact.
                </p>
              </div>
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