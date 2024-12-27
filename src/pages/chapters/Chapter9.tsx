import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, ClipboardCheck } from "lucide-react";

const Chapter9 = () => {
  return (
    <main className="flex-1 bg-[#1A1F2C] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-white mb-3">Developing Policies and Procedures</h1>
          <p className="text-lg text-gray-400">Creating comprehensive guidelines for smooth operations</p>
        </header>

        <Separator className="bg-gray-800 my-10" />
        
        <section className="bg-[#222222] rounded-xl p-8 shadow-lg border border-gray-800">
          <h2 className="text-2xl font-semibold text-white mb-4">Operational Guidelines</h2>
          <p className="text-gray-400 text-lg">Establishing clear policies and procedures for residents, staff, and daily operations.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-[#222222] border-gray-800 hover:bg-[#2A2A2A] transition-colors duration-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-[#161A1D] flex items-center justify-center mb-4 border border-gray-800">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">House Rules Template</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Establish clear, consistent house rules that promote accountability and community living standards
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#222222] border-gray-800 hover:bg-[#2A2A2A] transition-colors duration-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-[#161A1D] flex items-center justify-center mb-4 border border-gray-800">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <CardTitle className="text-xl text-white">Substance Use Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Develop fair and enforceable policies for addressing substance use or testing violations
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#222222] border-gray-800 hover:bg-[#2A2A2A] transition-colors duration-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-[#161A1D] flex items-center justify-center mb-4 border border-gray-800">
                <ClipboardCheck className="w-6 h-6 text-green-400" />
              </div>
              <CardTitle className="text-xl text-white">Incident Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
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