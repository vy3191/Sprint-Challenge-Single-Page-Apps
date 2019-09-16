import React, {useState, useEffect} from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import {Route} from 'react-router-dom';
import axios from 'axios';

export default function App() {
  const [pages, setPages] = useState('');

  useEffect(() => {
     axios.get(`https://rick-api.herokuapp.com/api/`)
          .then( response => {
              console.log(response)
          })
          .catch(error=> {
             console.log(error);
          })
  },[])

  return (
    <main>
      <Header />
      <TabNav />
      <WelcomePage />
     
    </main>
  );
}
