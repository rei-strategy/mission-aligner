import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { useState } from "react";
import GeographicSection from "./demographics/GeographicSection";
import PopulationSection from "./demographics/PopulationSection";

const DemographicsTemplate = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState<string>("");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleZipCodeChange = (newZipCode: string) => {
    setZipCode(newZipCode);
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
          <GeographicSection 
            isExpanded={expandedSection === 'geographic'}
            onToggle={() => toggleSection('geographic')}
            onZipCodeChange={handleZipCodeChange}
          />
          <PopulationSection zipCode={zipCode} />
        </div>
      </CardContent>
    </Card>
  );
};

export default DemographicsTemplate;