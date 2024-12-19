import React, { useRef } from 'react';
import { useMapInitialization } from './map/useMapInitialization';
import { MapContainer } from './map/MapContainer';
import 'mapbox-gl/dist/mapbox-gl.css';

interface ServiceMapProps {
  zipCode: string;
}

const ServiceMap = ({ zipCode }: ServiceMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  useMapInitialization(mapContainer, zipCode);

  return (
    <MapContainer>
      <div ref={mapContainer} className="w-full h-full" />
    </MapContainer>
  );
};

export default ServiceMap;