import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Chapter2 = () => {
  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Legal and Business Setup</h1>
          <p className="text-lg text-gray-600">Essential steps for establishing your sober living home as a legal business entity</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Structure and Legal Requirements</h2>
          <p className="text-gray-600 text-lg">Understanding the legal framework and choosing the right business structure for your sober living home operation.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Licensing Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Business License Requirements</li>
                <li>• Zoning Permits</li>
                <li>• Health Inspections</li>
                <li>• Fire Safety Approvals</li>
                <li>• State-Specific Certifications</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Zoning Research Template</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Local Zoning Laws Overview</li>
                <li>• Residential vs Commercial Zones</li>
                <li>• Property Use Restrictions</li>
                <li>• Neighborhood Requirements</li>
                <li>• Variance Procedures</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Legal Consultation Prep Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Entity Structure Questions</li>
                <li>• Liability Concerns</li>
                <li>• Insurance Requirements</li>
                <li>• Contract Review Points</li>
                <li>• Compliance Checklist</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter2;