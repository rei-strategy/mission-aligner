import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListCheck, Target, BarChart, Building2, Bus, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CompetitorAnalysis = () => {
  const [zipCode, setZipCode] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ['serviceAnalysis', zipCode],
    queryFn: async () => {
      console.log("Fetching service analysis data for zip code:", zipCode);
      
      if (!zipCode || zipCode.length !== 5) {
        throw new Error("Invalid zip code");
      }

      const { data, error } = await supabase.functions.invoke('fetch-census-data', {
        body: { zipCode }
      });

      if (error) {
        console.error("Error fetching service analysis data:", error);
        throw error;
      }

      console.log("Service analysis data response:", data);
      return data;
    },
    enabled: Boolean(zipCode?.length === 5),
    retry: 1,
    meta: {
      onError: () => {
        console.error("Error in service analysis query:", error);
        toast.error("Failed to fetch service analysis data. Please try again.");
      }
    }
  });

  const serviceChartData = data ? [
    { name: 'Treatment Centers', value: data.treatmentCenters, icon: Building2 },
    { name: 'Transit Stops', value: data.transitStops, icon: Bus },
    { name: 'Healthcare Facilities', value: data.healthcareFacilities, icon: Hospital },
  ] : [];

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
                  <div className="flex items-center justify-between gap-4">
                    <Button 
                      variant="outline" 
                      className="justify-start flex-1 bg-[#1A1F2C] text-white hover:bg-[#1A1F2C] hover:text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Population Need Assessment
                    </Button>
                    <Input
                      placeholder="zip code"
                      className="w-32"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
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
          <div className="flex flex-col rounded-lg border p-4">
            <div className="flex items-start gap-2 mb-4">
              <BarChart className="h-5 w-5 text-gray-500" />
              <div>
                <h3 className="font-semibold">Service Analysis</h3>
                <p className="text-sm text-gray-600">
                  Compare existing facilities and their offerings
                </p>
              </div>
            </div>

            {zipCode ? (
              <div className="mt-4 space-y-6">
                <div className="text-sm text-gray-600">
                  Showing statistics for zip code: <span className="font-semibold">{zipCode}</span>
                  {data?.totalPopulation && (
                    <div className="mt-1">
                      Total Population: <span className="font-semibold">{data.totalPopulation.toLocaleString()}</span>
                    </div>
                  )}
                </div>
                
                {isLoading ? (
                  <div className="text-center text-gray-500 p-8">
                    Loading service data...
                  </div>
                ) : error ? (
                  <div className="text-center text-red-500 p-8">
                    Error loading service data. Please try again.
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <div className="h-64">
                        <ChartContainer
                          config={{
                            line: {
                              theme: {
                                light: "rgba(14, 165, 233, 0.5)",
                                dark: "rgba(14, 165, 233, 0.2)",
                              },
                            },
                          }}
                        >
                          <RechartsBarChart data={serviceChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip />
                            <Bar dataKey="value" fill="#0EA5E9" />
                          </RechartsBarChart>
                        </ChartContainer>
                      </div>
                      <div className="h-16 w-full"></div>
                    </div>

                    <div className="grid gap-4">
                      {serviceChartData.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <item.icon className="h-5 w-5 text-[#0EA5E9]" />
                          <div className="flex-1">
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.value} locations nearby</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="mt-4 text-center text-gray-500 p-8 bg-gray-50 rounded-lg">
                Enter a zip code to view local service statistics
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorAnalysis;