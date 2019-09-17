import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from "axios";

export default function EpisodesList() {

   const [episodes,setEpisodes] = useState([]);

   useEffect( () => {    
      axios.get("https://rickandmortyapi.com/documentation/#get-all-episodes")
            .then(response => {
                    console.log(response)
                })
             .catch(err => {
                   console.log(err)
                })
      
   
   },[])

  //  if(episodes.length === 0) {
  //      return <h1>Loading Episodes ....</h1>
  //  }

   return(
     <div className="episodes-container">
      {/* {episodes.map( (location, index) => {
          return(
             <EpisodeCard key={index} episode={episode} />
          )
      })} */}
     </div>
   )
}
