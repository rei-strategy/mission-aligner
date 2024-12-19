import { supabase } from "@/integrations/supabase/client";

interface CensusData {
  totalPopulation: number;
  treatmentCenters: number;
  transitStops: number;
  healthcareFacilities: number;
}

export async function fetchCensusData(zipCode: string): Promise<CensusData> {
  console.log('Fetching census data for zip code:', zipCode);
  
  try {
    const { data, error } = await supabase.functions.invoke('fetch-census-data', {
      body: { zipCode }
    });

    if (error) {
      console.error('Error fetching census data:', error);
      throw error;
    }

    if (!data) {
      throw new Error('No data returned from census API');
    }

    return data as CensusData;
  } catch (error) {
    console.error('Error fetching census data:', error);
    throw error;
  }
}