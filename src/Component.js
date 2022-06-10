// import { MapContainer } from "react-leaflet";
import { Map } from "react-leaflet";
import { TileLayer } from "react-leaflet";

function newMap (){
    const Position = [ 2, 39 ]
    return(
        <Map className = 'newmap'
        center={Position}
        zoom={16}
            style={{height:'100%', width:'100%'}}
        >
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

        </Map>
    )
}

// export default newMap;

const MyMap = () => {
    
     <Map className = 'mymap'
        center={[2, 39]}
        zoom={16}
            style={{height:'100%', width:'100%'}}
        >
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </Map>
     
}
 
export default MyMap;