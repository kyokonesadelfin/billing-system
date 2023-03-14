import React from 'react';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export default function GoogleMaps({ position }) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    })
    const lat = [position][0].lat === undefined ? 0 : [position][0].lat
    const lng = [position][0].lon === undefined ? 0 : [position][0].lon
    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap zoom={18} center={{ lat: lat, lng: lng }} mapContainerClassName='map-container'>
            <MarkerF position={{ lat: lat, lng: lng }} animation={window.google.maps.Animation.BOUNCE} />
        </GoogleMap>
    )
}