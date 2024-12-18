import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DollarSign } from "lucide-react";

interface FundingSource {
  name: string;
  description: string;
  requirements: string[];
  pros: string[];
  cons: string[];
}

const fundingSources: FundingSource[] = [
  {
    name: "Traditional Bank Loans",
    description: "Commercial loans from banks specifically for business purposes",
    requirements: [
      "Strong credit score (usually 680+)",
      "Business plan",
      "Financial projections",
      "Collateral"
    ],
    pros: [
      "Lower interest rates",
      "Builds business credit",
      "Larger loan amounts available"
    ],
    cons: [
      "Strict qualification requirements",
      "Lengthy approval process",
      "May require personal guarantee"
    ]
  },
  {
    name: "SBA Loans",
    description: "Government-backed loans for small businesses",
    requirements: [
      "Good credit score (usually 640+)",
      "Detailed business plan",
      "Industry experience",
      "Down payment (10-20%)"
    ],
    pros: [
      "Lower down payments",
      "Longer repayment terms",
      "Competitive rates"
    ],
    cons: [
      "Complex application process",
      "Longer processing time",
      "Strict use requirements"
    ]
  },
  {
    name: "Private Investors",
    description: "Individual or group investors who provide capital for equity",
    requirements: [
      "Compelling business model",
      "Clear growth strategy",
      "Strong management team",
      "Exit strategy"
    ],
    pros: [
      "No debt repayment",
      "Access to investor expertise",
      "Potential networking opportunities"
    ],
    cons: [
      "Give up equity/ownership",
      "Less control over decisions",
      "Pressure to grow quickly"
    ]
  },
  {
    name: "Crowdfunding",
    description: "Raising small amounts from many people, typically online",
    requirements: [
      "Strong social media presence",
      "Compelling story",
      "Clear funding goals",
      "Rewards/perks for backers"
    ],
    pros: [
      "No equity or debt obligations",
      "Marketing benefits",
      "Community building"
    ],
    cons: [
      "Uncertain funding success",
      "Platform fees",
      "Time-intensive campaign management"
    ]
  }
];

export const FundingSourcesExplorer = () => {
  return (
    <Card className="bg-[#E6E7E8] border-gray-200">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600/10 p-2 rounded-lg">
            <DollarSign className="h-5 w-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Funding Sources Explorer</h2>
        </div>
        <p className="text-gray-600">Explore various funding options for your sober living home</p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-2">
          {fundingSources.map((source) => (
            <AccordionItem key={source.name} value={source.name} className="border-gray-200">
              <AccordionTrigger className="text-gray-800 hover:text-blue-600">
                {source.name}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 space-y-4">
                <p className="text-gray-600">{source.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {source.requirements.map((req) => (
                      <li key={req}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">Pros:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {source.pros.map((pro) => (
                        <li key={pro}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Cons:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {source.cons.map((con) => (
                        <li key={con}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};