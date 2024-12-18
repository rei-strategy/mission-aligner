import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ChecklistItem = {
  id: string;
  label: string;
};

const checklistSections = {
  businessLicense: [
    { id: 'bl-1', label: 'Apply for local business license' },
    { id: 'bl-2', label: 'Register business name' },
    { id: 'bl-3', label: 'Obtain EIN from IRS' }
  ],
  zoningPermits: [
    { id: 'zp-1', label: 'Check local zoning regulations' },
    { id: 'zp-2', label: 'Submit zoning permit application' },
    { id: 'zp-3', label: 'Obtain property use approval' }
  ],
  healthInspections: [
    { id: 'hi-1', label: 'Schedule initial health inspection' },
    { id: 'hi-2', label: 'Prepare facility for inspection' },
    { id: 'hi-3', label: 'Obtain health department certification' }
  ],
  fireSafety: [
    { id: 'fs-1', label: 'Install fire safety equipment' },
    { id: 'fs-2', label: 'Schedule fire marshal inspection' },
    { id: 'fs-3', label: 'Obtain fire safety certification' }
  ],
  stateCertifications: [
    { id: 'sc-1', label: 'Research state requirements' },
    { id: 'sc-2', label: 'Complete certification applications' },
    { id: 'sc-3', label: 'Submit required documentation' }
  ]
};

const ChecklistSection = ({ 
  items, 
  checkedItems, 
  onCheckboxChange 
}: { 
  items: ChecklistItem[];
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}) => (
  <div className="space-y-3">
    {items.map((item) => (
      <div key={item.id} className="flex items-center space-x-2">
        <Checkbox 
          id={item.id} 
          checked={checkedItems[item.id]} 
          onCheckedChange={() => onCheckboxChange(item.id)}
        />
        <label htmlFor={item.id} className="text-black">{item.label}</label>
      </div>
    ))}
  </div>
);

export const LicensingChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-black">Licensing Checklist</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="business-license">
            <AccordionTrigger className="text-black">Business License Requirements</AccordionTrigger>
            <AccordionContent>
              <ChecklistSection 
                items={checklistSections.businessLicense}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="zoning-permits">
            <AccordionTrigger className="text-black">Zoning Permits</AccordionTrigger>
            <AccordionContent>
              <ChecklistSection 
                items={checklistSections.zoningPermits}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="health-inspections">
            <AccordionTrigger className="text-black">Health Inspections</AccordionTrigger>
            <AccordionContent>
              <ChecklistSection 
                items={checklistSections.healthInspections}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fire-safety">
            <AccordionTrigger className="text-black">Fire Safety Approvals</AccordionTrigger>
            <AccordionContent>
              <ChecklistSection 
                items={checklistSections.fireSafety}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="state-certifications">
            <AccordionTrigger className="text-black">State-Specific Certifications</AccordionTrigger>
            <AccordionContent>
              <ChecklistSection 
                items={checklistSections.stateCertifications}
                checkedItems={checkedItems}
                onCheckboxChange={handleCheckboxChange}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};