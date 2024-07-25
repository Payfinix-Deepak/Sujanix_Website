import React, { useRef } from 'react';
import Map, { Layer,Source  } from 'react-map-gl';

import NavigationIcon from 'src/assets/data/location-pin.png';

const accessToken =
  'pk.eyJ1Ijoia3VtYXJzYW5qZWV2ZHV0dCIsImEiOiJjbGQ4aTJjYjgwcDIzM3FwYjU0a3ZvaTk5In0.mPZrYwIN2FKvpG3H97EPZg';

export default function MapMarkersPopups() {
  const userMapRef = useRef();

  const TEMP_GEOJSON = {
    features: [
      {
        type: 'Feature',
        properties: {
          title: 'Xeady Technology Inc',
          description: '304 S.Jones Blvd #4449 Las Vegas, NV 89107',
        },
        geometry: {
          coordinates: [-115.3398102,36.1248871],
          type: 'Point',
        },
      },
      {
        type: 'Feature',
        properties: {
          title: 'Bangalore',
          description: 'Unit 301-303, Oxford Towers, #139, HAL Airport Road, Bangaluru - 560008.',
        },
        geometry: {
          coordinates: [77.6471308, 12.9590849],
          type: 'Point',
        },
      },
      {
        type: 'Feature',
        properties: {
          title: 'Kolkata',
          description: 'No 128, Gold Park, Rajdanga, Kasba, Kolkata - 700 107.',
        },
        geometry: {
          coordinates: [88.3896092, 22.5163023],
          type: 'Point',
        },
      },
    ],
    type: 'FeatureCollection',
  };

  //   useEffect(() => {
  //     if (userMapRef.current) {
  //       userMapRef.current.flyTo({
  //         center: [-87.580389, 41.783185],
  //         essential: true,
  //         duration: 800,
  //         zoom: 16,
  //       });
  //     }
  //   }, []);

  return (
    <Map
      ref={userMapRef}
      onLoad={(event) => {
        userMapRef.current = event.target;
        event.target.loadImage(NavigationIcon, (error, image) => {
          if (error) throw error;
          console.log(image);
          event.target.addImage('map-pin', image);
        });
      }}
      mapboxAccessToken={accessToken}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom:1
      }}
      mapLib={import('mapbox-gl')}
      mapStyle="mapbox://styles/mapbox/streets-v11?optimize=true"
      onRender={(e) => e.target.resize()}
      style={{ width: '100%', height: 500, borderRadius: 10 }}
    >
      <Source id="my-data" type="geojson" data={TEMP_GEOJSON}>
        <Layer
          id="route-symbol"
          type="symbol"
          source="my-data"
          layout={{
            'icon-image': 'map-pin',
            'icon-size': 0.05,
          }}
        />
      </Source>
    </Map>
  );
}
