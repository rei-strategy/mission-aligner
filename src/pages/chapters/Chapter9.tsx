import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

        <section className="px-4">
          <Tabs defaultValue="rules" className="w-full">
            <TabsList className="w-full bg-white py-4 px-2 rounded-xl mb-6 shadow-sm">
              <TabsTrigger value="rules" className="flex-1 px-6 py-3 text-lg text-gray-700">
                House Rules
              </TabsTrigger>
              <TabsTrigger value="substance" className="flex-1 px-6 py-3 text-lg text-gray-700">
                Substance Policy
              </TabsTrigger>
              <TabsTrigger value="incident" className="flex-1 px-6 py-3 text-lg text-gray-700">
                Incident Response
              </TabsTrigger>
            </TabsList>

            <TabsContent value="rules">
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
            </TabsContent>

            <TabsContent value="substance">
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
            </TabsContent>

            <TabsContent value="incident">
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
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </main>
  );
};

export default Chapter9;