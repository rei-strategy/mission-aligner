import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Chapter2 = () => {
  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Legal and Business Setup</h1>
          <p className="text-lg text-gray-600">Essential steps for establishing your sober living home as a legal business entity</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-8 shadow-lg space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Structure and Legal Requirements</h2>
          
          {/* Student Workbook Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-700">Student Workbook</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compliance Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">A comprehensive template to track and maintain compliance with all legal requirements</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Licensing Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Research and track progress on required permits and licenses</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Legal Readiness Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Self-assessment tool to evaluate your legal preparation</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Top Struggles Section */}
          <div className="space-y-6 mt-12">
            <h3 className="text-xl font-semibold text-gray-700">Top 3 Struggles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">Lack of understanding of state and local laws</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">Overwhelm from tracking multiple licensing requirements</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">Fear of non-compliance and potential shutdowns</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Goals Section */}
          <div className="space-y-6 mt-12">
            <h3 className="text-xl font-semibold text-gray-700">Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">Gain clarity on all required permits, licenses, and inspections</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">Create a compliance system to avoid legal complications</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-gray-600">Build confidence in maintaining operational legality</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How To Section */}
          <div className="space-y-6 mt-12">
            <h3 className="text-xl font-semibold text-gray-700">How To Navigate Legal and Compliance Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Licensing Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Includes typical permits, such as business licenses, zoning permits, health inspections, and fire safety approvals</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Zoning Research Template</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">A map to evaluate local zoning laws and align your property choice</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Legal Consultation Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Key questions to ask legal advisors</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Chapter2;