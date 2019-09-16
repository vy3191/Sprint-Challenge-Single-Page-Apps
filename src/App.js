import React, {useState, useEffect} from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';
import {Route} from 'react-router-dom';
import './style.css';

export default function App() {
  

  return (
    <main>
      <Header />
      <TabNav />      
      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/characters' render={(props) => <CharacterList {...props} /> } />
      </div>
     
    </main>
  );
}
