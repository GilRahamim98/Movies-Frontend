import { MapContainer,TileLayer, useMapEvent,Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordinateDTO } from "../../models/coordinates.model";
import { useState } from "react";

let defaultIcon=L.icon({
    iconUrl:icon,
    shadowUrl:iconShadow,
    iconAnchor:[16,37]
})

L.Marker.prototype.options.icon=defaultIcon

export default function Map(props:mapProps){
    const [coordinates,setCoordinates]=useState<coordinateDTO[]>(props.coordinates)
    return(
        <MapContainer
            center={[32.01518371313545, 34.76183690994715]}
            zoom={12}
            style={{height:props.height}}
        >
            <TileLayer attribution="פופקורן" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {props.readOnly?null: <MapClick setCoordinates={coordinates=>{
                setCoordinates([coordinates])
                props.handleMapClick(coordinates)

            }}/>}
           
            {coordinates.map((coordinate,index)=><Marker  key={index} position={[coordinate.lat,coordinate.lng]}>{coordinate.name?<Popup>{coordinate.name}</Popup>:null}</Marker>)}
        </MapContainer>
    )

}

interface mapProps{
    height:string;
    coordinates:coordinateDTO[];
    handleMapClick(coordinates:coordinateDTO):void;
    readOnly:boolean;
}

Map.defaultProps={
    height:'500px',
    handleMapClick:()=>{},
    readOnly:false
}

function MapClick(props:mapClickProps){
    useMapEvent('click',eventsArgs=>{
        props.setCoordinates({lat:eventsArgs.latlng.lat,lng:eventsArgs.latlng.lng})
    })

    return null
}

interface mapClickProps{
    setCoordinates(coordinates:coordinateDTO):void;

}

