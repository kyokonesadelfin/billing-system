import React, { useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import { Skeleton } from '@mui/material';

export default function GoogleMaps({ position, singleDevice, isOpen }) {

    const [infoWindowOpen, setInfoWindowOpen] = useState(isOpen);
    const [location, setLocation] = useState('');

    console.log(infoWindowOpen)
    console.log(isOpen)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    })

    // useEffect(() => {
    //     setInfoWindowOpen(true);
    // }, [singleDevice])

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
                setLocation(data?.results?.length > 1 ? data.results[0]?.formatted_address : data?.plus_code?.compound_code)
            })
    }, [])

    const markerOnClick = () => {
        setInfoWindowOpen(isOpen);
    }

    const onInfoWindowClose = () => {
        setInfoWindowOpen(!isOpen)
    }

    if (!isLoaded) {
        return <Skeleton />
    }

    return (
        <GoogleMap
            zoom={17}
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

            </MarkerF>
            {
                isOpen && infoWindowOpen ?
                    <InfoWindow onCloseClick={onInfoWindowClose} position={{ lat: lat, lng: lng }} options={{ disableAutoPan: true, pixelOffset: infoWindowOpen ? new window.google.maps.Size(0, -40) : null }}>
                        <div>
                            <p><span style={{ fontWeight: 'bold' }}>Vehicle Name:</span><span style={{ fontWeight: '400' }}><br />{[singleDevice][0]?.tags?.VIN !== undefined ? [singleDevice][0]?.tags?.VIN : 'UNKNOWN'}</span></p>
                            <p><span style={{ fontWeight: 'bold' }}>Estimated Location:</span><span style={{ fontWeight: '400' }}><br />{location}</span></p>
                        </div>
                    </InfoWindow>
                    : null
            }
        </GoogleMap>
    )
}