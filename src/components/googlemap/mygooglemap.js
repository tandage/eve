import React, {useCallback, useEffect, useState} from 'react';
import { GoogleMap, LoadScript ,Marker,InfoWindow} from '@react-google-maps/api'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMarkers, selectAllMarkers} from "./markersSlice";



const MyGoogleMap = ({})=>{
    const googleMapsApiKey = 'AIzaSyDfgJwdPBOHouIM_O5xt7NPyK9OgrTNEvo'
    const [currentLocation,setCurrentLocation] = useState({  lat: 53.33907339299762, lng: -6.247100830078126})
    const dispatch = useDispatch()
    const markers = useSelector(selectAllMarkers)
    const [selected,setSelected] = useState(null)
    const postStatus = useSelector((state) => state.markers.status)
    const error = useSelector((state) => state.markers.error)
    const getCurrentLocation = useCallback((position) => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        };
        setCurrentLocation(currentPosition);
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(getCurrentLocation);
        dispatch(fetchMarkers())
        // navigator.geolocation.getCurrentPosition(success);
    },[dispatch])

    const getMarkers = ()=>{
        return  markers.map((location)=>(<Marker key={location.name} position={location.location} onClick={() => setSelected(location)} />))
    }

    return (
        <LoadScript
            googleMapsApiKey={googleMapsApiKey}>
            <GoogleMap
                mapContainerStyle={{height: "100vh", width: "100%"}}
                zoom={15}
                center={currentLocation}
            >
                {getMarkers()}
                {
                    selected &&  <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected(null)}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default MyGoogleMap;