import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, MarkerF, useLoadScript, DirectionsRenderer } from "@react-google-maps/api";
import { Skeleton } from '@mui/material';
import moment from 'moment-timezone';

export default function Playback() {

    const device = JSON.parse(localStorage.getItem('activationStatus'))[0]

    const deviceId = device.deviceId;
    const lat = device.position.lat
    const lng = device.position.lon
    const [nextValue, setNextValue] = useState('');

    const today = moment(new Date(), 'YYYY-MM-DD HH:mm:ss').tz('UTC').format()
    const yesterday = moment(new Date(), 'YYYY-MM-DD HH:mm:ss').subtract(1, 'days').tz('UTC').format()
    useEffect(() => {

        fetch(`https://api.cloud-gms.com/v3/devices/${deviceId}/route?from=${yesterday}&to=${today}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
            }
        })
            .then(res => res.json())
            .catch(err => {
                console.log(err)
            })
            .then(data => {
                console.log(data)
                if (data.next !== null) {
                    setNextValue(data.next);
                }
                else {
                    return 
                }
            })

    }, [])

    console.log(encodeURI(nextValue))

    useEffect(() => {
        if(nextValue !== null) {
            const fetchNow = async () => {
                await fetch(`https://api.cloud-gms.com/v3/devices/${deviceId}/route?from=${yesterday}&to=${today}&start=${encodeURI(nextValue)}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_MSPF_ACCESS_TOKEN}`
                    }
                })
                    .then(res => res.json())
                    .catch(err => {
                        console.log(err)
                    })
                    .then(data => {
                        if (data.next !== null) {
                            console.log(data.next)
                            
                        } else {

                        }
                    })
            }
            
            var interval = setInterval(() => {
                fetchNow();
            }, 30000);
            return () => clearInterval(interval);
        }
    }, [yesterday, today, nextValue])


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_API_KEY,
    })


    if (!isLoaded) {
        return <Skeleton />
    }

    return (
        <GoogleMap zoom={17}
            center={{ lat: lat, lng: lng }}
            mapContainerClassName='playback-map-container'>
            <MarkerF
                position={{ lat: lat, lng: lng }}
            ></MarkerF>
        </GoogleMap>
    )
}