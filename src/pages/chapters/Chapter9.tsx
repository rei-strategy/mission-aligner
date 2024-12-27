import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, ClipboardCheck } from "lucide-react";

const Chapter9 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Developing Policies and Procedures</h1>
          <p className="text-lg text-gray-600">Creating comprehensive guidelines for smooth operations</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Operational Guidelines</h2>
          <p className="text-gray-600 text-lg">Establishing clear policies and procedures for residents, staff, and daily operations.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="bg-blue-600/10 p-2 rounded-lg mb-4">
                <FileText className="h-5 w-5 text-blue-300" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">House Rules Template</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Establish clear, consistent house rules that promote accountability and community
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="bg-blue-600/10 p-2 rounded-lg mb-4">
                <Shield className="h-5 w-5 text-blue-300" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">Substance Use Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Develop fair and enforceable policies for addressing substance use or testing violations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="bg-blue-600/10 p-2 rounded-lg mb-4">
                <ClipboardCheck className="h-5 w-5 text-blue-300" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-800">Incident Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Implement protocols that ensure quick, effective responses to emergencies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter9;