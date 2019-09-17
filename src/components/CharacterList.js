import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import Loading from './Load';
import axios from 'axios';

export default function CharacterList() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
     const characters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character/');
        console.log(response.data.results);
        setPages(response.data.results);
     }
     characters();      
  },[])
  
  if(pages.length === 0) {
     return (
         <>
           <span className="loading"><h1> Loading Characters <Loading /></h1></span>
          
         </>
     )
      
  }
  return (
    <div className="characters-list">
       { 
         pages.map( (page,index) => {
            return(              
                <section className="character-list grid-view">                 
                  <Card>
                    <Image src={page.image} wrapped ui={false} />
                    <Card.Content>
                      <Card.Header>{page.name}</Card.Header>
                      <Card.Meta>
                        <span className='date'>{page.species}: {page.status}</span>
                      </Card.Meta>
                      <Card.Description>
                        <p>Locations: {page.location.name}</p>
                      </Card.Description>
                      <Card.Description>
                        <p>Origin: {page.origin.name}</p>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <p>Genger: {page.gender}</p>
                    </Card.Content>
                  </Card>
                </section>
             
            )
         })
       }
      </div>
  );
}
