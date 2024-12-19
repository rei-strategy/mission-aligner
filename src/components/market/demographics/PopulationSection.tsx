import { BarChart, Building2, Bus, Hospital } from "lucide-react";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface PopulationSectionProps {
  zipCode: string;
}

const PopulationSection = ({ zipCode }: PopulationSectionProps) => {
  // Mock data - in a real application, this would come from an API
  const mockData = [
    { name: 'Treatment Centers', value: 8, icon: Building2 },
    { name: 'Transit Stops', value: 12, icon: Bus },
    { name: 'Healthcare Facilities', value: 5, icon: Hospital },
  ];

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
          </div>
          
          <div className="relative">
            <div className="h-64">
              <ChartContainer
                config={{
                  line: {
                    theme: {
                      light: "rgba(14, 165, 233, 0.5)", // Ocean Blue with opacity
                      dark: "rgba(14, 165, 233, 0.2)", // Ocean Blue with lower opacity
                    },
                  },
                }}
              >
                <RechartsBarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip />
                  <Bar dataKey="value" fill="#0EA5E9" /> {/* Ocean Blue */}
                </RechartsBarChart>
              </ChartContainer>
            </div>
            <div className="h-16 w-full"></div>
          </div>

          <div className="grid gap-4">
            {mockData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <item.icon className="h-5 w-5 text-[#0EA5E9]" /> {/* Ocean Blue */}
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.value} locations nearby</div>
                </div>
              </div>
            ))}
          </div>
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