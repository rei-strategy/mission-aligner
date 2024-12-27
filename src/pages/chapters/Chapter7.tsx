import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { List, FileText, ScrollText } from "lucide-react";
import { useState } from "react";

const Chapter7 = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="flex-1 bg-[#E6E7E8] p-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Licensing, Certifications, and Inspections
          </h1>
          <p className="text-lg text-gray-600">
            Meeting regulatory requirements and industry standards
          </p>
        </header>

        <Separator className="bg-gray-200 my-10" />

        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Regulatory Compliance Overview</h2>
          <p className="text-gray-600 text-lg">Understanding the essential licenses, certifications, and inspections required for your sober living home.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="bg-[#161A1D] text-white border-none hover:bg-[#1E2225] transition-colors duration-200">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-[#2C3033]">
                <List className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-white">
                Licensing Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Business License Requirements</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>State-Specific Certifications</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Local Permits</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#161A1D] text-white border-none hover:bg-[#1E2225] transition-colors duration-200">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-[#2C3033]">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-white">
                Certification Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Application Requirements</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Documentation Checklist</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Review Timeline</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#161A1D] text-white border-none hover:bg-[#2C3033] transition-colors duration-200">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-2 rounded-lg bg-[#2C3033]">
                <ScrollText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-white">
                Inspection Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Safety Requirements</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Health Standards</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <button className="w-full flex items-center justify-between py-2 text-left hover:bg-[#2C3033] rounded px-2 transition-colors">
                  <span>Compliance Audits</span>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter7;