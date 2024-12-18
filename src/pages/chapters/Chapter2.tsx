import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Chapter2 = () => {
  const [licenseChecklist, setLicenseChecklist] = useState({
    businessLicense: false,
    zoningPermits: false,
    healthInspections: false,
    fireSafety: false,
    stateCertifications: false,
  });

  const [zoningChecklist, setZoningChecklist] = useState({
    localLaws: false,
    zoneTypes: false,
    useRestrictions: false,
    neighborhoodReqs: false,
    varianceProcedures: false,
  });

  const [legalChecklist, setLegalChecklist] = useState({
    entityStructure: false,
    liabilityConcerns: false,
    insuranceReqs: false,
    contractReview: false,
    complianceChecklist: false,
  });

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
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="businessLicense" 
                    checked={licenseChecklist.businessLicense}
                    onCheckedChange={(checked) => 
                      setLicenseChecklist(prev => ({...prev, businessLicense: checked === true}))
                    }
                  />
                  <label htmlFor="businessLicense" className="text-gray-600 cursor-pointer">Business License Requirements</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="zoningPermits"
                    checked={licenseChecklist.zoningPermits}
                    onCheckedChange={(checked) => 
                      setLicenseChecklist(prev => ({...prev, zoningPermits: checked === true}))
                    }
                  />
                  <label htmlFor="zoningPermits" className="text-gray-600 cursor-pointer">Zoning Permits</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="healthInspections"
                    checked={licenseChecklist.healthInspections}
                    onCheckedChange={(checked) => 
                      setLicenseChecklist(prev => ({...prev, healthInspections: checked === true}))
                    }
                  />
                  <label htmlFor="healthInspections" className="text-gray-600 cursor-pointer">Health Inspections</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="fireSafety"
                    checked={licenseChecklist.fireSafety}
                    onCheckedChange={(checked) => 
                      setLicenseChecklist(prev => ({...prev, fireSafety: checked === true}))
                    }
                  />
                  <label htmlFor="fireSafety" className="text-gray-600 cursor-pointer">Fire Safety Approvals</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="stateCertifications"
                    checked={licenseChecklist.stateCertifications}
                    onCheckedChange={(checked) => 
                      setLicenseChecklist(prev => ({...prev, stateCertifications: checked === true}))
                    }
                  />
                  <label htmlFor="stateCertifications" className="text-gray-600 cursor-pointer">State-Specific Certifications</label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Zoning Research Template</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="localLaws"
                    checked={zoningChecklist.localLaws}
                    onCheckedChange={(checked) => 
                      setZoningChecklist(prev => ({...prev, localLaws: checked === true}))
                    }
                  />
                  <label htmlFor="localLaws" className="text-gray-600 cursor-pointer">Local Zoning Laws Overview</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="zoneTypes"
                    checked={zoningChecklist.zoneTypes}
                    onCheckedChange={(checked) => 
                      setZoningChecklist(prev => ({...prev, zoneTypes: checked === true}))
                    }
                  />
                  <label htmlFor="zoneTypes" className="text-gray-600 cursor-pointer">Residential vs Commercial Zones</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="useRestrictions"
                    checked={zoningChecklist.useRestrictions}
                    onCheckedChange={(checked) => 
                      setZoningChecklist(prev => ({...prev, useRestrictions: checked === true}))
                    }
                  />
                  <label htmlFor="useRestrictions" className="text-gray-600 cursor-pointer">Property Use Restrictions</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="neighborhoodReqs"
                    checked={zoningChecklist.neighborhoodReqs}
                    onCheckedChange={(checked) => 
                      setZoningChecklist(prev => ({...prev, neighborhoodReqs: checked === true}))
                    }
                  />
                  <label htmlFor="neighborhoodReqs" className="text-gray-600 cursor-pointer">Neighborhood Requirements</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="varianceProcedures"
                    checked={zoningChecklist.varianceProcedures}
                    onCheckedChange={(checked) => 
                      setZoningChecklist(prev => ({...prev, varianceProcedures: checked === true}))
                    }
                  />
                  <label htmlFor="varianceProcedures" className="text-gray-600 cursor-pointer">Variance Procedures</label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-800">Legal Consultation Prep Sheet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="entityStructure"
                    checked={legalChecklist.entityStructure}
                    onCheckedChange={(checked) => 
                      setLegalChecklist(prev => ({...prev, entityStructure: checked === true}))
                    }
                  />
                  <label htmlFor="entityStructure" className="text-gray-600 cursor-pointer">Entity Structure Questions</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="liabilityConcerns"
                    checked={legalChecklist.liabilityConcerns}
                    onCheckedChange={(checked) => 
                      setLegalChecklist(prev => ({...prev, liabilityConcerns: checked === true}))
                    }
                  />
                  <label htmlFor="liabilityConcerns" className="text-gray-600 cursor-pointer">Liability Concerns</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="insuranceReqs"
                    checked={legalChecklist.insuranceReqs}
                    onCheckedChange={(checked) => 
                      setLegalChecklist(prev => ({...prev, insuranceReqs: checked === true}))
                    }
                  />
                  <label htmlFor="insuranceReqs" className="text-gray-600 cursor-pointer">Insurance Requirements</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="contractReview"
                    checked={legalChecklist.contractReview}
                    onCheckedChange={(checked) => 
                      setLegalChecklist(prev => ({...prev, contractReview: checked === true}))
                    }
                  />
                  <label htmlFor="contractReview" className="text-gray-600 cursor-pointer">Contract Review Points</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="complianceChecklist"
                    checked={legalChecklist.complianceChecklist}
                    onCheckedChange={(checked) => 
                      setLegalChecklist(prev => ({...prev, complianceChecklist: checked === true}))
                    }
                  />
                  <label htmlFor="complianceChecklist" className="text-gray-600 cursor-pointer">Compliance Checklist</label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Chapter2;