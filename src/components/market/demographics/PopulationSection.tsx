import { BarChart, Building2, Bus, Hospital } from "lucide-react";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PopulationSectionProps {
  zipCode: string;
}

async function fetchCensusData(zipCode: string) {
  console.log("Fetching census data for zip code:", zipCode);
  const { data, error } = await supabase.functions.invoke('fetch-census-data', {
    body: { zipCode }
  });

  if (error) {
    console.error("Error fetching census data:", error);
    throw error;
  }

  console.log("Census data response:", data);
  return data;
}

const PopulationSection = ({ zipCode }: PopulationSectionProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['census', zipCode],
    queryFn: () => fetchCensusData(zipCode),
    enabled: Boolean(zipCode?.length === 5),
  });

  const chartData = data ? [
    { name: 'Treatment Centers', value: data.treatmentCenters, icon: Building2 },
    { name: 'Transit Stops', value: data.transitStops, icon: Bus },
    { name: 'Healthcare Facilities', value: data.healthcareFacilities, icon: Hospital },
  ] : [];

  return (
    <div className="flex flex-col rounded-lg border p-4">
      <div className="flex items-start gap-2 mb-4">
        <BarChart className="h-5 w-5 text-gray-500" />
        <div>
          <h3 className="font-semibold">Population Statistics</h3>
          <p className="text-sm text-gray-600">
            Analyze addiction recovery rates and treatment needs
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
              Loading census data...
            </div>
          ) : error ? (
            <div className="text-center text-red-500 p-8">
              Error loading census data. Please try again.
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
                    <RechartsBarChart data={chartData}>
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
                {chartData.map((item, index) => (
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
          Enter a zip code to view local statistics
        </div>
      )}
    </div>
  );
};

export default PopulationSection;