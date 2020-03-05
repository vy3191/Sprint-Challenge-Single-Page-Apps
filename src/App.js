import React, {useState, useEffect} from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';
import {Route} from 'react-router-dom';
import LocationsList from "./components/LocationsList.js";
import EpisodesList from "./components/EpisodesList";
import './style.css';

export default function App() {
  
  return (
    <main>
      <Header />
      <TabNav />      
      <div>
        <Route exact path='/' render={ (props) => <WelcomePage {...props}/>} />
        <Route path='/characters' render={(props) => <CharacterList {...props} /> } />
        <Route path='/locations' render={(props) => <LocationsList {...props} /> } />
        <Route path="/episodes" render={(props) => <EpisodesList  {...props}/> } />
      </div>
     
    </main>
  );
}
