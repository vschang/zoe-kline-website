import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

const center = {
  lat: 40.42764604867461,
  lng: -3.7008989999999997
};

function MyComponent() {
  const key = process.env.REACT_APP_API_KEY
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: key
  })

  const [map, setMap] = React.useState(null)
  console.log(map)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(16)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={center} title={"Studio"} />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
