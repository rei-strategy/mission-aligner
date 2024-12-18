import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const LegalConsultation = () => {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-black">Legal Consultation Prep Sheet</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-black">
          <li>• Entity Structure Questions</li>
          <li>• Liability Concerns</li>
          <li>• Insurance Requirements</li>
          <li>• Contract Review Points</li>
          <li>• Compliance Checklist</li>
        </ul>
      </CardContent>
    </Card>
  );
};