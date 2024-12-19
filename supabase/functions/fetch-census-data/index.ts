import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received request to fetch census data');
    
    // Parse request body
    const { zipCode } = await req.json();
    console.log('Received zip code:', zipCode);

    if (!zipCode || typeof zipCode !== 'string' || !/^\d{5}$/.test(zipCode)) {
      console.error('Invalid zip code format:', zipCode);
      return new Response(
        JSON.stringify({ error: 'Invalid zip code format' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const CENSUS_API_KEY = Deno.env.get('CENSUS_API_KEY');
    if (!CENSUS_API_KEY) {
      console.error('Census API key not configured');
      return new Response(
        JSON.stringify({ error: 'Census API key not configured' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Generate mock data for development
    const mockData = {
      totalPopulation: 50000 + Math.floor(Math.random() * 50000),
      treatmentCenters: Math.floor(Math.random() * 10) + 2,
      transitStops: Math.floor(Math.random() * 20) + 5,
      healthcareFacilities: Math.floor(Math.random() * 15) + 3
    };

    console.log('Returning mock data:', mockData);
    
    return new Response(
      JSON.stringify(mockData),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error in fetch-census-data function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});