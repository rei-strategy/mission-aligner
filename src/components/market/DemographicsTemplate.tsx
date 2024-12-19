import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, MapPin, BarChart, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DemographicsTemplate = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
          <div 
            onClick={() => toggleSection('geographic')}
            className="flex flex-col cursor-pointer hover:bg-gray-50 transition-colors rounded-lg border p-4"
          >
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <div className="flex-1">
                <h3 className="font-semibold">Geographic Analysis</h3>
                <p className="text-sm text-gray-600">
                  Map out key areas with high demand for recovery services
                </p>
              </div>
              {expandedSection === 'geographic' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {expandedSection === 'geographic' && (
              <div className="mt-4 space-y-4 border-t pt-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-700">Area Analysis Tools</h4>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between gap-4">
                      <Button 
                        variant="outline" 
                        className="justify-start flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Population Density Maps
                      </Button>
                      <Input
                        placeholder="zip code"
                        className="w-32"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Treatment Center Locations
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Public Transportation Access
                    </Button>
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Healthcare Facility Distribution
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Pro tip: Consider areas with existing healthcare infrastructure and good public transportation access for optimal service delivery.
                  </p>
                </div>
              </div>
            )}
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