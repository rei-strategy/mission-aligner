import React from 'react';

interface MapContainerProps {
  children?: React.ReactNode;
}

export const MapContainer: React.FC<MapContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      {children}
    </div>
  );
};