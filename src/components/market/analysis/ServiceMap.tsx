import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const initializeMap = async () => {
      if (!mapContainer.current || !zipCode) return;

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
        mapboxgl.accessToken = data.mapbox_token;

        // Only create a new map instance if one doesn't exist
        if (!map.current && mapContainer.current) {
          console.log('Initializing map with zip code:', zipCode);
          map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v11',
            zoom: 12,
            center: [-118.2437, 34.0522], // Default to LA, will be updated with geocoding
          });

          map.current.addControl(
            new mapboxgl.NavigationControl({
              visualizePitch: true,
            }),
            'top-right'
          );

          console.log('Map initialization complete');
        }
      } catch (error) {
        console.error('Error in map initialization:', error);
        toast.error('Failed to load map. Please try again later.');
      }
    };

    initializeMap();

    // Cleanup function
    return () => {
      try {
        if (map.current) {
          console.log('Cleaning up map instance');
          // Remove controls first
          const controls = map.current.getControls();
          controls.forEach(control => {
            map.current?.removeControl(control);
          });
          // Then remove the map
          map.current.remove();
          map.current = null;
        }
      } catch (error) {
        console.error('Error during map cleanup:', error);
      }
    };
  }, [zipCode]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default ServiceMap;