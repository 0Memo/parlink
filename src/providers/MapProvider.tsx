//Since the map will be laoded and displayed on client side
'use client';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

// Define a list of libraries to load from the Google Maps API
const libraries: Libraries = ['places', 'drawing', 'geometry'];

export function MapProvider({ children }: { children: ReactNode }) {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API as string;

  // Load the Google Maps JavaScript API asynchronously
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey,
        libraries,
    });

    if(loadError) return <p>Erreur au chargement de la carte</p>
    
    if (!isLoaded) return <p>Chargement...</p>;

    return children;
}