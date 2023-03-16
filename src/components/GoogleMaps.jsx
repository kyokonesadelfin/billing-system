import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, MarkerF, useLoadScript, DirectionsRenderer, InfoWindow } from "@react-google-maps/api";
import { Skeleton } from '@mui/material';

export default function GoogleMaps({ position, singleDevice }) {

    const [infoWindowOpen, setInfoWindowOpen] = useState(false);
    const [location, setLocation] = useState('');

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    })

    const lat = [position][0].lat === undefined ? 0 : [position][0]?.lat
    const lng = [position][0].lon === undefined ? 0 : [position][0]?.lon

    useEffect(() => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLEMAPS_API_KEY}`, {

    })
        .then(res => res.json())
        .catch(err => {
            console.log(err)
        })
        .then(data => {
            setLocation(data.plus_code.compound_code)
        })
    }, [])
   

    const markerOnClick = () => {
        setInfoWindowOpen(true);
    }

    const onInfoWindowClose = () => {
        setInfoWindowOpen(false);
    }

    if (!isLoaded) {
        return <Skeleton />
    }

    return (
        <GoogleMap
            zoom={10}
            center={{ lat: lat, lng: lng }}
            mapContainerClassName='map-container'>

            <MarkerF
                position={{ lat: lat, lng: lng }}
                animation={window.google.maps.Animation.BOUNCE}
                // label={{
                //     text: [singleDevice][0]?.tags?.VIN !== undefined ? [singleDevice][0]?.tags?.VIN : 'UNKNOWN',
                //     className: 'marker-label'
                // }}
                onClick={markerOnClick}
            >
                {
                    infoWindowOpen ?
                        <InfoWindow onCloseClick={onInfoWindowClose} options={{ disableAutoPan: true }}>
                            <div>
                                <p><span style={{fontWeight: 'bold'}}>Vehicle Name:</span><span style={{fontWeight: '400'}}> {[singleDevice][0]?.tags?.VIN !== undefined ? [singleDevice][0]?.tags?.VIN : 'UNKNOWN'}</span></p>
                                <p><span style={{fontWeight: 'bold'}}>Estimated Location:</span><span style={{fontWeight: '400'}}> ${location}</span></p>
                            </div>
                        </InfoWindow>
                        : null
                }
            </MarkerF>
        </GoogleMap>
    )
}