import { Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MarketGapsSectionProps {
  onZipCodeChange: (zipCode: string) => void;
}

const MarketGapsSection = ({ onZipCodeChange }: MarketGapsSectionProps) => {
  return (
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
                onChange={(e) => onZipCodeChange(e.target.value)}
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
  );
};

export default MarketGapsSection;