import { MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface GeographicSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
  onZipCodeChange: (zipCode: string) => void;
}

const GeographicSection = ({ isExpanded: propIsExpanded, onToggle, onZipCodeChange }: GeographicSectionProps) => {
  const [localZipCode, setLocalZipCode] = useState("");

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newZipCode = e.target.value;
    setLocalZipCode(newZipCode);
    onZipCodeChange(newZipCode);
  };

  return (
    <div 
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
      </div>
      
      <div className="mt-4 space-y-4 border-t pt-4">
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Area Analysis Tools</h4>
          <div className="grid gap-2">
            <div className="flex items-center justify-between gap-4">
              <Button 
                variant="outline" 
                className="justify-start flex-1 bg-[#1A1F2C] text-white hover:bg-[#1A1F2C] hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                Population Density Maps
              </Button>
              <Input
                placeholder="zip code"
                className="w-32"
                value={localZipCode}
                onChange={handleZipCodeChange}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <Button 
              variant="outline" 
              className="justify-start hover:bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              Treatment Center Locations
            </Button>
            <Button 
              variant="outline" 
              className="justify-start hover:bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              Public Transportation Access
            </Button>
            <Button 
              variant="outline" 
              className="justify-start hover:bg-transparent"
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
    </div>
  );
};

export default GeographicSection;