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
        
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Structure and Legal Requirements</h2>
          <p className="text-gray-600 text-lg mb-8">Understanding the legal framework and choosing the right business structure for your sober living home operation.</p>
          
          <div className="mt-8">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  How to Navigate Legal and Compliance Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4">Essential Checklists and Templates</h3>
                    <ul className="space-y-4 list-disc pl-6">
                      <li className="text-gray-700">
                        <span className="font-medium">Licensing Checklist:</span> Comprehensive guide covering typical permits including business licenses, zoning permits, health inspections, and fire safety approvals
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Zoning Research Template:</span> Detailed mapping tool to evaluate local zoning laws and ensure your property choice aligns with regulations
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Legal Consultation Prep Sheet:</span> Curated list of key questions to ask legal advisors during consultations
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Chapter2;