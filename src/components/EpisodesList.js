import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import Loading from './Load';
import axios from "axios";

export default function EpisodesList() {

   const [episodes,setEpisodes] = useState([]);

   useEffect( () => {    
      axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(response => {
                    console.log(response.data.results)
                    setEpisodes(response.data.results);
                })
             .catch(err => {
                   console.log(err)
                })   
   },[])

   if(episodes.length === 0) {
      return (
           <span className="loading"><h1> Loading Characters <Loading /></h1></span>
     )
   }
   return(
     <div className="episodes-container">
      {episodes.map( (episode, index) => {
          return(
             <EpisodeCard key={index} episode={episode} />
          )
      })}
     </div>
   )
}
