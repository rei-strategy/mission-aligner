import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ZoningResearch = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-black">Zoning Research Template</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-black">
          <li>• Local Zoning Laws Overview</li>
          <li>• Residential vs Commercial Zones</li>
          <li>• Property Use Restrictions</li>
          <li>• Neighborhood Requirements</li>
          <li>• Variance Procedures</li>
        </ul>
      </CardContent>
    </Card>
  );
};