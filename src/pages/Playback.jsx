import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, MarkerF, useLoadScript, DirectionsRenderer, InfoWindow } from "@react-google-maps/api";
import { Skeleton } from '@mui/material';

export default function Playback() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    })

   
    if (!isLoaded) {
        return <Skeleton />
    }

    return (
        <GoogleMap zoom={17}
        center={{ lat: 12.8797, lng: 121.7740 }}
        mapContainerClassName='playback-map-container'>
        </GoogleMap>
    )
}