import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from "axios";

export default function LocationsList() {
   const [locations,setLocations] = useState();
   useEffect( () => {
      const getLocations = async () => {
          const response = await axios.get("https://rickandmortyapi.com/api/location/");
          console.log(response);
          setLocations(response.data.results);
      };
      getLocations();
   },[])
   
   return(
     <>
      {locations.map( (location,index) => {
          return(
             <LocationCard key={index} location={location} />
          )
      })}
     </>
   )
}
