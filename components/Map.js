import React from 'react';
import { useState } from 'react';
import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import  getCenter  from 'geolib/es/getCenter';
 function Map({searchResults}) {
   const [selectedLocation,setSelectedLocation]=useState({})
    const coordinates=searchResults.map((result)=>({
        longitude:result.long,
        latitude:result.lat,
    }));
    {console.log(coordinates);}

    const center = getCenter(coordinates);
    
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
        latitude: center.latitude,
        longitude:center.longitude,
        zoom: 11
      });
      return (
     <ReactMapGL 
     {...viewport} 
     center={center}
     mapStyle="mapbox://styles/fatima-seemab2001/ckymy2qx0oc2d14ruzne5ag8z"
     mapboxApiAccessToken={process.env.mapbox_key}
     onViewportChange={(nextViewport)=>{setViewport(nextViewport)}}>
     {searchResults.map(results => (
         <div key={results.long}>
             <Marker longitude={results.long} latitude={results.lat}
             offsetLeft={-20}
             offsetTop={-10}>
                 <p role="img" aria-label="push pin" onClick={()=>{setSelectedLocation(results)}}
                className='curor-pointer text-2xl animate-bounce'>
                 📌
                 </p>
             </Marker>
             {selectedLocation.long===results.long ? (<Popup onClose={()=>setSelectedLocation({})} closeOnClick={true }
             latitude={results.lat}
             longitude={results.long}
             >{results.title}</Popup>):(false)}
             </div>
     ))}
     
     </ReactMapGL>

  );
}

export default Map;
