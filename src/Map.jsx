import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '300px'
};

const center = {
  lat: 40.4277484851424,
  lng: -3.7008993026091046
};

function MyComponent() {
  const key = process.env.REACT_APP_API_KEY
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        initialCenter={center}
        zoom={7}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat: 40.4277484851424, lng: -3.7008993026091046}} />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
