import React from 'react';
import { GoogleMap, LoadScript, MarkerF, useLoadScript } from "@react-google-maps/api";

export default function GoogleMaps({ position }) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    }) 

    if(!isLoaded) return <div>Loading...</div>
    console.log([position][0].lat)
    console.log([position][0].lon)
    return (
        <GoogleMap zoom={18} center={{lat: [position][0].lat, lng: [position][0].lon}} mapContainerClassName='map-container'>
            <MarkerF position={{lat: [position][0].lat, lng: [position][0].lon}} animation={window.google.maps.Animation.BOUNCE}/>
        </GoogleMap>
    )
}