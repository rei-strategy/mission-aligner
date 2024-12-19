import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const CENSUS_API_BASE_URL = 'https://api.census.gov/data/2020/acs/acs5';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Parse request body
    const { zipCode } = await req.json()
    console.log('Processing request for zip code:', zipCode)

    // Validate zip code
    if (!zipCode || typeof zipCode !== 'string' || !/^\d{5}$/.test(zipCode)) {
      throw new Error('Valid 5-digit zip code is required')
    }

    // Get API key
    const CENSUS_API_KEY = Deno.env.get('CENSUS_API_KEY')
    if (!CENSUS_API_KEY) {
      console.error('Census API key not configured')
      throw new Error('Internal server error')
    }

    // Make request to Census API
    console.log('Fetching data from Census API...')
    const response = await fetch(
      `${CENSUS_API_BASE_URL}?get=B01003_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${CENSUS_API_KEY}`
    )

    if (!response.ok) {
      console.error('Census API error:', response.status, response.statusText)
      throw new Error('Failed to fetch census data')
    }

    const data = await response.json()
    console.log('Census API raw response:', data)

    if (!Array.isArray(data) || data.length < 2) {
      console.error('Invalid response format:', data)
      throw new Error('Invalid response from Census API')
    }

    const population = parseInt(data[1][0])
    if (isNaN(population)) {
      console.error('Invalid population value:', data[1][0])
      throw new Error('Invalid population data')
    }

    console.log('Successfully processed population:', population)

    // Return processed data
    const result = {
      totalPopulation: population,
      treatmentCenters: Math.floor(population / 50000) + 3,
      transitStops: Math.floor(population / 30000) + 5,
      healthcareFacilities: Math.floor(population / 40000) + 2
    }

    return new Response(
      JSON.stringify(result),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 200
      }
    )
  } catch (error) {
    console.error('Error in fetch-census-data:', error.message)
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
        status: 400
      }
    )
  }
})