import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, ClipboardCheck, FileText } from "lucide-react";

const Chapter6 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Setting Up Your Sober Living Home</h1>
          <p className="text-lg text-gray-600">Essential steps for preparing your property for residents</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Setup Guidelines</h2>
          <p className="text-gray-600 text-lg">Creating a safe, supportive environment with necessary amenities and accommodations.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <Layout className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold">Room Layout Planner</h3>
              </div>
              <p className="text-gray-400">
                Create a layout that fosters community while respecting residents' privacy
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <ClipboardCheck className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold">Resident Intake Checklist</h3>
              </div>
              <p className="text-gray-400">
                Develop and implement clear, enforceable house rules and routines
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#13171A] [&_*]:text-white hover:bg-black/90 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600/10 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold">Daily Operations Template</h3>
              </div>
              <p className="text-gray-400">
                Ensure a seamless intake process that makes residents feel welcome and supported
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter6;