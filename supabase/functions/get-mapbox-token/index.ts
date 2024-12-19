import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

console.log("Hello from get-mapbox-token function!")

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request')
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Fetching Mapbox token from environment variables')
    const mapbox_token = Deno.env.get('MAPBOX_PUBLIC_TOKEN')
    
    if (!mapbox_token) {
      console.error('MAPBOX_PUBLIC_TOKEN not found in environment variables')
      throw new Error('MAPBOX_PUBLIC_TOKEN not configured')
    }

    console.log('Successfully retrieved Mapbox token')
    return new Response(
      JSON.stringify({ mapbox_token }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in get-mapbox-token function:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      },
    )
  }
})