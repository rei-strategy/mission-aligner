import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListCheck } from "lucide-react";
import { useState } from "react";
import MarketGapsSection from "./analysis/MarketGapsSection";
import ServiceAnalysisSection from "./analysis/ServiceAnalysisSection";

const CompetitorAnalysis = () => {
  const [zipCode, setZipCode] = useState("");

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
          <MarketGapsSection onZipCodeChange={setZipCode} />
          <ServiceAnalysisSection zipCode={zipCode} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CompetitorAnalysis;