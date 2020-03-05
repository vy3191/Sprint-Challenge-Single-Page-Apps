import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import Loading from './Load';
import axios from "axios";

export default function LocationsList() {
   const [locations,setLocations] = useState([]);
   useEffect( () => {
      const getLocations = async () => {
          const response = await axios.get("https://rickandmortyapi.com/api/location/");
          console.log(response.data.results);
          setLocations(response.data.results);
      };
      getLocations();
   },[])
   if(locations.length === 0) {
      return (
         <>
           <span className="loading"><h1> Loading Locations<Loading /></h1></span>          
         </>    
       )
   }
   return(
     <div className="locations-container">
      {locations.map( (location, index) => {
          return(
             <LocationCard key={index} location={location} />
          )
      })}
     </div>
   )
}
