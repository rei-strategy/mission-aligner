import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion } from "@/components/ui/accordion";
import { LicensingSection } from "./licensing/LicensingSection";
import { InfoCard } from "./licensing/InfoCard";

interface LicensingGridProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

const licensingSections = [
  {
    value: "business-license",
    title: "Business License Requirements",
    items: [
      { id: "bl-1", label: "Apply for local business license" },
      { id: "bl-2", label: "Register business name" },
      { id: "bl-3", label: "Obtain EIN from IRS" }
    ]
  },
  {
    value: "zoning-permits",
    title: "Zoning Permits",
    items: [
      { id: "zp-1", label: "Check local zoning regulations" },
      { id: "zp-2", label: "Submit zoning permit application" },
      { id: "zp-3", label: "Obtain property use approval" }
    ]
  },
  {
    value: "health-inspections",
    title: "Health Inspections",
    items: [
      { id: "hi-1", label: "Schedule initial health inspection" },
      { id: "hi-2", label: "Prepare facility for inspection" },
      { id: "hi-3", label: "Obtain health department certification" }
    ]
  },
  {
    value: "fire-safety",
    title: "Fire Safety Approvals",
    items: [
      { id: "fs-1", label: "Install fire safety equipment" },
      { id: "fs-2", label: "Schedule fire marshal inspection" },
      { id: "fs-3", label: "Obtain fire safety certification" }
    ]
  },
  {
    value: "state-certifications",
    title: "State-Specific Certifications",
    items: [
      { id: "sc-1", label: "Research state requirements" },
      { id: "sc-2", label: "Complete certification applications" },
      { id: "sc-3", label: "Submit required documentation" }
    ]
  }
];

const infoCards = [
  {
    title: "Zoning Research Template",
    items: [
      {
        section: "Local Zoning Laws Overview",
        tasks: [
          { id: "zl-1", label: "Review municipal zoning code" },
          { id: "zl-2", label: "Document applicable ordinances" },
          { id: "zl-3", label: "Check for recent amendments" }
        ]
      },
      {
        section: "Residential vs Commercial Zones",
        tasks: [
          { id: "rc-1", label: "Identify zone classifications" },
          { id: "rc-2", label: "Compare permitted uses" },
          { id: "rc-3", label: "Review transition area requirements" }
        ]
      },
      {
        section: "Property Use Restrictions",
        tasks: [
          { id: "pu-1", label: "Check occupancy limits" },
          { id: "pu-2", label: "Review parking requirements" },
          { id: "pu-3", label: "Verify setback requirements" }
        ]
      },
      {
        section: "Neighborhood Requirements",
        tasks: [
          { id: "nr-1", label: "Research density restrictions" },
          { id: "nr-2", label: "Check noise ordinances" },
          { id: "nr-3", label: "Review community guidelines" }
        ]
      },
      {
        section: "Variance Procedures",
        tasks: [
          { id: "vp-1", label: "Document application process" },
          { id: "vp-2", label: "List required documentation" },
          { id: "vp-3", label: "Note appeal procedures" }
        ]
      }
    ]
  },
  {
    title: "Legal Consultation Prep Sheet",
    items: [
      {
        section: "Entity Structure Questions",
        tasks: [
          { id: "es-1", label: "Determine optimal business structure" },
          { id: "es-2", label: "Review tax implications" },
          { id: "es-3", label: "Consider ownership distribution" }
        ]
      },
      {
        section: "Liability Concerns",
        tasks: [
          { id: "lc-1", label: "Assess potential risks" },
          { id: "lc-2", label: "Review liability protection options" },
          { id: "lc-3", label: "Document mitigation strategies" }
        ]
      },
      {
        section: "Insurance Requirements",
        tasks: [
          { id: "ir-1", label: "Research required coverage types" },
          { id: "ir-2", label: "Compare insurance providers" },
          { id: "ir-3", label: "Review policy exclusions" }
        ]
      },
      {
        section: "Contract Review Points",
        tasks: [
          { id: "cr-1", label: "Draft resident agreements" },
          { id: "cr-2", label: "Review vendor contracts" },
          { id: "cr-3", label: "Prepare employment agreements" }
        ]
      },
      {
        section: "Compliance Checklist",
        tasks: [
          { id: "cc-1", label: "Review ADA requirements" },
          { id: "cc-2", label: "Check Fair Housing regulations" },
          { id: "cc-3", label: "Verify local compliance standards" }
        ]
      }
    ]
  }
];

export const LicensingGrid = ({ checkedItems, onCheckboxChange }: LicensingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card className="bg-white [&_*]:text-black">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Licensing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {licensingSections.map((section) => (
              <LicensingSection
                key={section.value}
                value={section.value}
                title={section.title}
                items={section.items}
                checkedItems={checkedItems}
                onCheckboxChange={onCheckboxChange}
              />
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {infoCards.map((card, index) => (
        <InfoCard 
          key={index} 
          title={card.title} 
          items={card.items}
          checkedItems={checkedItems}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
    </div>
  );
};