const CENSUS_API_BASE_URL = 'https://api.census.gov/data/2020/acs/acs5';

interface CensusData {
  totalPopulation: number;
  treatmentCenters: number;
  transitStops: number;
  healthcareFacilities: number;
}

export async function fetchCensusData(zipCode: string): Promise<CensusData> {
  console.log('Fetching census data for zip code:', zipCode);
  
  try {
    const response = await fetch(
      `${CENSUS_API_BASE_URL}?get=B01003_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${process.env.CENSUS_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch census data');
    }

    const data = await response.json();
    console.log('Census API response:', data);

    // The Census API returns population in data[1][0]
    const population = parseInt(data[1][0]);

    // For now, we'll generate mock data for other metrics based on population
    // In a real app, you'd fetch this from other Census tables or APIs
    return {
      totalPopulation: population,
      treatmentCenters: Math.floor(population / 50000) + 3,
      transitStops: Math.floor(population / 30000) + 5,
      healthcareFacilities: Math.floor(population / 40000) + 2
    };
  } catch (error) {
    console.error('Error fetching census data:', error);
    throw error;
  }
}