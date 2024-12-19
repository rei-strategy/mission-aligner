import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const fetchCensusData = async (zipCode: string) => {
  try {
    console.log("Fetching census data for zip code:", zipCode);
    const { data, error } = await supabase.functions.invoke('fetch-census-data', {
      body: { zipCode },
    });

    if (error) {
      console.error("Supabase function error:", error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching census data:", error);
    throw error;
  }
};

const PopulationSection = ({ isExpanded, onToggle }: { isExpanded: boolean; onToggle: () => void }) => {
  const [zipCode, setZipCode] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ['censusData', zipCode],
    queryFn: () => fetchCensusData(zipCode),
    enabled: Boolean(zipCode?.length === 5),
    retry: 1,
    meta: {
      onSettled: (_, error) => {
        if (error) {
          console.error("Error in census data query:", error);
          toast.error("Failed to fetch demographic data. Please try again.");
        }
      }
    }
  });

  return (
    <div className="flex flex-col p-4 border rounded-lg">
      <h3 className="font-semibold text-lg">Population Data</h3>
      <div className="flex items-center gap-2 mt-2">
        <Input
          placeholder="Enter ZIP code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="flex-1"
        />
        <Button onClick={onToggle}>Toggle</Button>
      </div>
      {isLoading && <p>Loading...</p>}
      {data && (
        <div className="mt-4">
          <h4 className="font-medium">Census Data:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PopulationSection;
