import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Network, Share, Link } from "lucide-react";

const ReferralNetwork = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Network className="h-6 w-6 text-gray-600" />
          <CardTitle>Referral Network Mapping Tool</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-2 rounded-lg border p-4">
            <Share className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold">Network Building</h3>
              <p className="text-sm text-gray-600">
                Map potential referral sources and partnerships
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2 rounded-lg border p-4">
            <Link className="h-5 w-5 text-gray-500" />
            <div>
              <h3 className="font-semibold">Connection Strategy</h3>
              <p className="text-sm text-gray-600">
                Develop outreach plans for healthcare providers
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralNetwork;