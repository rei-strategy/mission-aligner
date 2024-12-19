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
    const { zipCode } = await req.json()
    console.log('Fetching census data for zip code:', zipCode)

    if (!zipCode) {
      throw new Error('Zip code is required')
    }

    const CENSUS_API_KEY = Deno.env.get('CENSUS_API_KEY')
    if (!CENSUS_API_KEY) {
      throw new Error('Census API key not configured')
    }

    const response = await fetch(
      `${CENSUS_API_BASE_URL}?get=B01003_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${CENSUS_API_KEY}`
    )

    if (!response.ok) {
      console.error('Census API error:', response.status, response.statusText)
      throw new Error('Failed to fetch census data')
    }

    const data = await response.json()
    console.log('Census API response:', data)

    if (!Array.isArray(data) || data.length < 2) {
      throw new Error('Invalid response format from Census API')
    }

    // The Census API returns population in data[1][0]
    const population = parseInt(data[1][0])

    if (isNaN(population)) {
      throw new Error('Invalid population data received')
    }

    // Generate mock data for other metrics based on population
    const result = {
      totalPopulation: population,
      treatmentCenters: Math.floor(population / 50000) + 3,
      transitStops: Math.floor(population / 30000) + 5,
      healthcareFacilities: Math.floor(population / 40000) + 2
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})