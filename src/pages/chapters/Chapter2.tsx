import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const Chapter2 = () => {
  const [licensingChecks, setLicensingChecks] = useState<Record<string, boolean>>({});
  const [zoningChecks, setZoningChecks] = useState<Record<string, boolean>>({});
  const [legalChecks, setLegalChecks] = useState<Record<string, boolean>>({});

  const handleCheckChange = (
    id: string, 
    setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>
  ) => {
    setter(prev => ({ ...prev, [id]: !prev[id] }));
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
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="business-license">
                  <AccordionTrigger>Business License Requirements</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bl-1" 
                          checked={licensingChecks['bl-1']} 
                          onCheckedChange={() => handleCheckChange('bl-1', setLicensingChecks)}
                        />
                        <label htmlFor="bl-1">Research local business license requirements</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bl-2" 
                          checked={licensingChecks['bl-2']} 
                          onCheckedChange={() => handleCheckChange('bl-2', setLicensingChecks)}
                        />
                        <label htmlFor="bl-2">Complete business license application</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="bl-3" 
                          checked={licensingChecks['bl-3']} 
                          onCheckedChange={() => handleCheckChange('bl-3', setLicensingChecks)}
                        />
                        <label htmlFor="bl-3">Pay licensing fees</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="health-inspections">
                  <AccordionTrigger>Health Inspections</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hi-1" 
                          checked={licensingChecks['hi-1']} 
                          onCheckedChange={() => handleCheckChange('hi-1', setLicensingChecks)}
                        />
                        <label htmlFor="hi-1">Schedule initial health inspection</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="hi-2" 
                          checked={licensingChecks['hi-2']} 
                          onCheckedChange={() => handleCheckChange('hi-2', setLicensingChecks)}
                        />
                        <label htmlFor="hi-2">Prepare facility for inspection</label>
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
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="local-zoning">
                  <AccordionTrigger>Local Zoning Laws</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="zn-1" 
                          checked={zoningChecks['zn-1']} 
                          onCheckedChange={() => handleCheckChange('zn-1', setZoningChecks)}
                        />
                        <label htmlFor="zn-1">Review local zoning ordinances</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="zn-2" 
                          checked={zoningChecks['zn-2']} 
                          onCheckedChange={() => handleCheckChange('zn-2', setZoningChecks)}
                        />
                        <label htmlFor="zn-2">Identify property zone classification</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="property-restrictions">
                  <AccordionTrigger>Property Use Restrictions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="pr-1" 
                          checked={zoningChecks['pr-1']} 
                          onCheckedChange={() => handleCheckChange('pr-1', setZoningChecks)}
                        />
                        <label htmlFor="pr-1">Check occupancy limits</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="pr-2" 
                          checked={zoningChecks['pr-2']} 
                          onCheckedChange={() => handleCheckChange('pr-2', setZoningChecks)}
                        />
                        <label htmlFor="pr-2">Review parking requirements</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Legal Consultation Prep Sheet</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="entity-structure">
                  <AccordionTrigger>Entity Structure Questions</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="es-1" 
                          checked={legalChecks['es-1']} 
                          onCheckedChange={() => handleCheckChange('es-1', setLegalChecks)}
                        />
                        <label htmlFor="es-1">Research business entity types</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="es-2" 
                          checked={legalChecks['es-2']} 
                          onCheckedChange={() => handleCheckChange('es-2', setLegalChecks)}
                        />
                        <label htmlFor="es-2">Prepare ownership structure documents</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="liability-concerns">
                  <AccordionTrigger>Liability Concerns</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="lc-1" 
                          checked={legalChecks['lc-1']} 
                          onCheckedChange={() => handleCheckChange('lc-1', setLegalChecks)}
                        />
                        <label htmlFor="lc-1">List potential liability risks</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="lc-2" 
                          checked={legalChecks['lc-2']} 
                          onCheckedChange={() => handleCheckChange('lc-2', setLegalChecks)}
                        />
                        <label htmlFor="lc-2">Research insurance requirements</label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter2;