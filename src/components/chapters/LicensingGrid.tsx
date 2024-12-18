import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface LicensingGridProps {
  checkedItems: { [key: string]: boolean };
  onCheckboxChange: (id: string) => void;
}

export const LicensingGrid = ({ checkedItems, onCheckboxChange }: LicensingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-black">Licensing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="business-license">
              <AccordionTrigger className="text-black">Business License Requirements</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bl-1" 
                      checked={checkedItems['bl-1']} 
                      onCheckedChange={() => onCheckboxChange('bl-1')}
                    />
                    <label htmlFor="bl-1" className="text-black">Apply for local business license</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bl-2" 
                      checked={checkedItems['bl-2']} 
                      onCheckedChange={() => onCheckboxChange('bl-2')}
                    />
                    <label htmlFor="bl-2" className="text-black">Register business name</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="bl-3" 
                      checked={checkedItems['bl-3']} 
                      onCheckedChange={() => onCheckboxChange('bl-3')}
                    />
                    <label htmlFor="bl-3" className="text-black">Obtain EIN from IRS</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="zoning-permits">
              <AccordionTrigger className="text-black">Zoning Permits</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="zp-1" 
                      checked={checkedItems['zp-1']} 
                      onCheckedChange={() => onCheckboxChange('zp-1')}
                    />
                    <label htmlFor="zp-1" className="text-black">Check local zoning regulations</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="zp-2" 
                      checked={checkedItems['zp-2']} 
                      onCheckedChange={() => onCheckboxChange('zp-2')}
                    />
                    <label htmlFor="zp-2" className="text-black">Submit zoning permit application</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="zp-3" 
                      checked={checkedItems['zp-3']} 
                      onCheckedChange={() => onCheckboxChange('zp-3')}
                    />
                    <label htmlFor="zp-3" className="text-black">Obtain property use approval</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="health-inspections">
              <AccordionTrigger className="text-black">Health Inspections</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hi-1" 
                      checked={checkedItems['hi-1']} 
                      onCheckedChange={() => onCheckboxChange('hi-1')}
                    />
                    <label htmlFor="hi-1" className="text-black">Schedule initial health inspection</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hi-2" 
                      checked={checkedItems['hi-2']} 
                      onCheckedChange={() => onCheckboxChange('hi-2')}
                    />
                    <label htmlFor="hi-2" className="text-black">Prepare facility for inspection</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="hi-3" 
                      checked={checkedItems['hi-3']} 
                      onCheckedChange={() => onCheckboxChange('hi-3')}
                    />
                    <label htmlFor="hi-3" className="text-black">Obtain health department certification</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="fire-safety">
              <AccordionTrigger className="text-black">Fire Safety Approvals</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="fs-1" 
                      checked={checkedItems['fs-1']} 
                      onCheckedChange={() => onCheckboxChange('fs-1')}
                    />
                    <label htmlFor="fs-1" className="text-black">Install fire safety equipment</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="fs-2" 
                      checked={checkedItems['fs-2']} 
                      onCheckedChange={() => onCheckboxChange('fs-2')}
                    />
                    <label htmlFor="fs-2" className="text-black">Schedule fire marshal inspection</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="fs-3" 
                      checked={checkedItems['fs-3']} 
                      onCheckedChange={() => onCheckboxChange('fs-3')}
                    />
                    <label htmlFor="fs-3" className="text-black">Obtain fire safety certification</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="state-certifications">
              <AccordionTrigger className="text-black">State-Specific Certifications</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sc-1" 
                      checked={checkedItems['sc-1']} 
                      onCheckedChange={() => onCheckboxChange('sc-1')}
                    />
                    <label htmlFor="sc-1" className="text-black">Research state requirements</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sc-2" 
                      checked={checkedItems['sc-2']} 
                      onCheckedChange={() => onCheckboxChange('sc-2')}
                    />
                    <label htmlFor="sc-2" className="text-black">Complete certification applications</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="sc-3" 
                      checked={checkedItems['sc-3']} 
                      onCheckedChange={() => onCheckboxChange('sc-3')}
                    />
                    <label htmlFor="sc-3" className="text-black">Submit required documentation</label>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-black">Zoning Research Template</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-black">
            <li>• Local Zoning Laws Overview</li>
            <li>• Residential vs Commercial Zones</li>
            <li>• Property Use Restrictions</li>
            <li>• Neighborhood Requirements</li>
            <li>• Variance Procedures</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-black">Legal Consultation Prep Sheet</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-black">
            <li>• Entity Structure Questions</li>
            <li>• Liability Concerns</li>
            <li>• Insurance Requirements</li>
            <li>• Contract Review Points</li>
            <li>• Compliance Checklist</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
