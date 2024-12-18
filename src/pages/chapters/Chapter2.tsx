import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Chapter2 = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({});

  const handleCheckboxChange = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="flex-1 bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center mb-10 pt-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Legal and Business Setup</h1>
          <p className="text-lg text-gray-600">Essential steps for establishing your sober living home as a legal business entity</p>
        </header>

        <Separator className="bg-gray-200 my-10" />
        
        <section className="bg-white rounded-xl p-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Structure and Legal Requirements</h2>
          <p className="text-gray-600 text-lg">Understanding the legal framework and choosing the right business structure for your sober living home operation.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Licensing Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="business-license">
                  <AccordionTrigger>Business License Requirements</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bl-1" 
                          checked={checkedItems['bl-1']} 
                          onCheckedChange={() => handleCheckboxChange('bl-1')}
                        />
                        <label htmlFor="bl-1">Apply for local business license</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bl-2" 
                          checked={checkedItems['bl-2']} 
                          onCheckedChange={() => handleCheckboxChange('bl-2')}
                        />
                        <label htmlFor="bl-2">Register business name</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bl-3" 
                          checked={checkedItems['bl-3']} 
                          onCheckedChange={() => handleCheckboxChange('bl-3')}
                        />
                        <label htmlFor="bl-3">Obtain EIN from IRS</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="zoning-permits">
                  <AccordionTrigger>Zoning Permits</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="zp-1" 
                          checked={checkedItems['zp-1']} 
                          onCheckedChange={() => handleCheckboxChange('zp-1')}
                        />
                        <label htmlFor="zp-1">Check local zoning regulations</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="zp-2" 
                          checked={checkedItems['zp-2']} 
                          onCheckedChange={() => handleCheckboxChange('zp-2')}
                        />
                        <label htmlFor="zp-2">Submit zoning permit application</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="zp-3" 
                          checked={checkedItems['zp-3']} 
                          onCheckedChange={() => handleCheckboxChange('zp-3')}
                        />
                        <label htmlFor="zp-3">Obtain property use approval</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="health-inspections">
                  <AccordionTrigger>Health Inspections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hi-1" 
                          checked={checkedItems['hi-1']} 
                          onCheckedChange={() => handleCheckboxChange('hi-1')}
                        />
                        <label htmlFor="hi-1">Schedule initial health inspection</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hi-2" 
                          checked={checkedItems['hi-2']} 
                          onCheckedChange={() => handleCheckboxChange('hi-2')}
                        />
                        <label htmlFor="hi-2">Prepare facility for inspection</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hi-3" 
                          checked={checkedItems['hi-3']} 
                          onCheckedChange={() => handleCheckboxChange('hi-3')}
                        />
                        <label htmlFor="hi-3">Obtain health department certification</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="fire-safety">
                  <AccordionTrigger>Fire Safety Approvals</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="fs-1" 
                          checked={checkedItems['fs-1']} 
                          onCheckedChange={() => handleCheckboxChange('fs-1')}
                        />
                        <label htmlFor="fs-1">Install fire safety equipment</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="fs-2" 
                          checked={checkedItems['fs-2']} 
                          onCheckedChange={() => handleCheckboxChange('fs-2')}
                        />
                        <label htmlFor="fs-2">Schedule fire marshal inspection</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="fs-3" 
                          checked={checkedItems['fs-3']} 
                          onCheckedChange={() => handleCheckboxChange('fs-3')}
                        />
                        <label htmlFor="fs-3">Obtain fire safety certification</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="state-certifications">
                  <AccordionTrigger>State-Specific Certifications</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sc-1" 
                          checked={checkedItems['sc-1']} 
                          onCheckedChange={() => handleCheckboxChange('sc-1')}
                        />
                        <label htmlFor="sc-1">Research state requirements</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sc-2" 
                          checked={checkedItems['sc-2']} 
                          onCheckedChange={() => handleCheckboxChange('sc-2')}
                        />
                        <label htmlFor="sc-2">Complete certification applications</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="sc-3" 
                          checked={checkedItems['sc-3']} 
                          onCheckedChange={() => handleCheckboxChange('sc-3')}
                        />
                        <label htmlFor="sc-3">Submit required documentation</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Zoning Research Template</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
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
              <CardTitle className="text-xl font-semibold text-gray-800">Legal Consultation Prep Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-600">
                <li>• Entity Structure Questions</li>
                <li>• Liability Concerns</li>
                <li>• Insurance Requirements</li>
                <li>• Contract Review Points</li>
                <li>• Compliance Checklist</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter2;