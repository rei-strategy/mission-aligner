import { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useMapInitialization = (mapContainer: React.RefObject<HTMLDivElement>, zipCode: string) => {
  const [token, setToken] = useState<string | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [navControl, setNavControl] = useState<mapboxgl.NavigationControl | null>(null);

  // Fetch token only once when component mounts
  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log('Fetching Mapbox token...');
        const { data, error } = await supabase.functions.invoke('get-mapbox-token');
        
        if (error) {
          console.error('Error fetching Mapbox token:', error);
          toast.error('Failed to initialize map. Please try again.');
          return;
        }

        if (!data?.mapbox_token) {
          console.error('No Mapbox token received');
          toast.error('Map configuration is incomplete. Please contact support.');
          return;
        }

        console.log('Successfully received Mapbox token');
        setToken(data.mapbox_token);
      } catch (error) {
        console.error('Error in fetchToken:', error);
        toast.error('Failed to initialize map configuration');
      }
    };

    fetchToken();
  }, []);

  // Handle map initialization and cleanup
  useEffect(() => {
    if (!mapContainer.current || !token || !zipCode) return;

    console.log('Initializing map with zip code:', zipCode);
    
    try {
      // Initialize map
      mapboxgl.accessToken = token;
      const newMap = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        zoom: 12,
        center: [-118.2437, 34.0522], // Default to LA, will be updated with geocoding
      });

      // Create navigation control
      const newNavControl = new mapboxgl.NavigationControl({
        visualizePitch: true,
      });

      // Add the control to the map
      newMap.addControl(newNavControl, 'top-right');

      // Store references
      setMap(newMap);
      setNavControl(newNavControl);

      console.log('Map initialization complete');
    } catch (error) {
      console.error('Error in map initialization:', error);
      toast.error('Failed to load map. Please try again later.');
    }

    // Cleanup function
    return () => {
      console.log('Starting map cleanup...');
      
      if (map) {
        try {
          if (navControl) {
            map.removeControl(navControl);
            setNavControl(null);
          }
          map.remove();
          setMap(null);
        } catch (error) {
          console.error('Error during map cleanup:', error);
        }
      }
    };
  }, [zipCode, token, mapContainer]);

  return { map, navControl };
};