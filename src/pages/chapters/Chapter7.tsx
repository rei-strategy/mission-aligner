import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, ClipboardCheck, ScrollText } from "lucide-react";

const Chapter7 = () => {
  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-[#1A1F2C] mb-3">
            Licensing, Certifications, and Inspections
          </h1>
          <p className="text-lg text-[#8E9196]">
            Meeting regulatory requirements and industry standards
          </p>
        </header>

        <Separator className="bg-gray-200 my-10" />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full justify-start bg-white mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="requirements">Requirements</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-[#D3E4FD]">
                    <FileCheck className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1A1F2C]">
                    Licensing Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8E9196] leading-relaxed">
                    Essential licenses and permits required for operating a sober living home,
                    including state-specific requirements and local regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-[#F2FCE2]">
                    <ClipboardCheck className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1A1F2C]">
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8E9196] leading-relaxed">
                    Professional certifications and accreditations that enhance credibility
                    and demonstrate commitment to quality care standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 rounded-lg bg-[#D6BCFA]">
                    <ScrollText className="h-6 w-6 text-[#9b87f5]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[#1A1F2C]">
                    Inspections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#8E9196] leading-relaxed">
                    Regular safety inspections, health department reviews, and compliance
                    checks required for maintaining operational status.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="requirements">
            <Card className="bg-white p-6">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#1A1F2C]">
                  Licensing Requirements
                </h2>
                <p className="text-[#8E9196] leading-relaxed">
                  Detailed information about licensing requirements will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="process">
            <Card className="bg-white p-6">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-semibold text-[#1A1F2C]">
                  Application Process
                </h2>
                <p className="text-[#8E9196] leading-relaxed">
                  Step-by-step guide to the application process will be displayed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Chapter7;