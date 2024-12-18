import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, MapPin, BarChart } from "lucide-react";

const DemographicsTemplate = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-gray-600" />
          <CardTitle>Local Demographics Research Template</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border p-4">
            <MapPin className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold">Geographic Analysis</h3>
              <p className="text-sm text-gray-600">
                Map out key areas with high demand for recovery services
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border p-4">
            <BarChart className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold">Population Statistics</h3>
              <p className="text-sm text-gray-600">
                Analyze addiction recovery rates and treatment needs
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemographicsTemplate;