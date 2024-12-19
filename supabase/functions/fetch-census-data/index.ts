import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CENSUS_API_BASE_URL = 'https://api.census.gov/data/2020/acs/acs5';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('Received request:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request');
    return new Response(null, { 
      headers: {
        ...corsHeaders,
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      }
    });
  }

  try {
    if (req.method !== 'POST') {
      throw new Error(`Method ${req.method} not allowed`);
    }

    const body = await req.text();
    console.log('Request body:', body);

    let zipCode;
    try {
      const jsonBody = JSON.parse(body);
      zipCode = jsonBody.zipCode;
    } catch (e) {
      console.error('Failed to parse request body:', e);
      throw new Error('Invalid request body');
    }

    console.log('Processing request for zip code:', zipCode);

    if (!zipCode || typeof zipCode !== 'string' || !/^\d{5}$/.test(zipCode)) {
      throw new Error('Valid 5-digit zip code is required');
    }

    const CENSUS_API_KEY = Deno.env.get('CENSUS_API_KEY');
    if (!CENSUS_API_KEY) {
      console.error('Census API key not configured');
      throw new Error('Internal server error');
    }

    console.log('Fetching data from Census API...');
    const response = await fetch(
      `${CENSUS_API_BASE_URL}?get=B01003_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${CENSUS_API_KEY}`
    );

    if (!response.ok) {
      console.error('Census API error:', response.status, response.statusText);
      const responseText = await response.text();
      console.error('Census API response:', responseText);
      throw new Error('Failed to fetch census data');
    }

    const responseText = await response.text();
    console.log('Census API raw response text:', responseText);

    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse Census API response:', e);
      throw new Error('Invalid response from Census API');
    }

    console.log('Census API parsed response:', data);

    if (!Array.isArray(data) || data.length < 2) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response from Census API');
    }

    const population = parseInt(data[1][0]);
    if (isNaN(population)) {
      console.error('Invalid population value:', data[1][0]);
      throw new Error('Invalid population data');
    }

    console.log('Successfully processed population:', population);

    const result = {
      totalPopulation: population,
      treatmentCenters: Math.floor(population / 50000) + 3,
      transitStops: Math.floor(population / 30000) + 5,
      healthcareFacilities: Math.floor(population / 40000) + 2
    };

    return new Response(
      JSON.stringify(result),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
        status: 200
      }
    );
  } catch (error) {
    console.error('Error in fetch-census-data:', error.message);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
        status: 400
      }
    );
  }
});