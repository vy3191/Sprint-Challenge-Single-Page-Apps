import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from "axios";

export default function EpisodesList() {

   const [episodes,setEpisodes] = useState([]);

   useEffect( () => {
      const getEpisodes = async () => {
          const response = await axios.get("https://rick-api.herokuapp.com/api/episode");
          console.log(response.results);
          setEpisodes(response.results);
      };
      getEpisodes();
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
