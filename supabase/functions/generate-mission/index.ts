import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { answers } = await req.json();
    console.log('Received answers:', answers);

    if (!openAIApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Combine the answers into a meaningful prompt
    const prompt = `Based on these responses about a sober living business:
    
    Impact desired: ${answers[0]}
    Life transformation approach: ${answers[1]}
    Unique value: ${answers[2]}
    
    Generate a concise, powerful, and professional mission statement that captures these elements. The mission statement should be inspiring and focused on the recovery community.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at crafting mission statements for recovery and healthcare organizations. Create clear, impactful statements that inspire trust and hope.'
          },
          { role: 'user', content: prompt }
        ],
      }),
    });

    const data = await response.json();
    console.log('OpenAI response:', data);

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate mission statement');
    }

    const mission = data.choices[0].message.content.trim();
    return new Response(JSON.stringify({ mission }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-mission function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});