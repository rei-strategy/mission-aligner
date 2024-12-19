import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface ServiceMapProps {
  zipCode: string;
}

const ServiceMap = ({ zipCode }: ServiceMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const navigationControl = useRef<mapboxgl.NavigationControl | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Separate token fetching logic
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

    if (!token) {
      fetchToken();
    }
  }, [token]);

  // Separate map initialization and cleanup
  useEffect(() => {
    if (!mapContainer.current || !zipCode || !token) return;

    let mounted = true;

    const initializeMap = () => {
      try {
        console.log('Initializing map with zip code:', zipCode);
        
        mapboxgl.accessToken = token;
        
        const mapInstance = new mapboxgl.Map({
          container: mapContainer.current!,
          style: 'mapbox://styles/mapbox/light-v11',
          zoom: 12,
          center: [-118.2437, 34.0522], // Default to LA, will be updated with geocoding
        });

        // Create navigation control
        const navControl = new mapboxgl.NavigationControl({
          visualizePitch: true,
        });

        // Add the control to the map
        mapInstance.addControl(navControl, 'top-right');

        // Store references
        map.current = mapInstance;
        navigationControl.current = navControl;

        console.log('Map initialization complete');
      } catch (error) {
        console.error('Error in map initialization:', error);
        toast.error('Failed to load map. Please try again later.');
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      mounted = false;
      
      if (map.current) {
        try {
          console.log('Starting map cleanup...');
          
          // Remove the navigation control if it exists
          if (navigationControl.current) {
            map.current.removeControl(navigationControl.current);
            navigationControl.current = null;
          }

          // Remove the map instance
          map.current.remove();
          map.current = null;
        } catch (error) {
          console.error('Error during map cleanup:', error);
        }
      }
    };
  }, [zipCode, token]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default ServiceMap;