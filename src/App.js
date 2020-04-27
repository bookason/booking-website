import React from 'react';

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Switch, Route} from 'react-router-dom'



import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorPage from './pages/ErrorPage'

import NavBar from './Components/NavBar'
// import './App.css';

function App() {
  return (
    <>
    
    <NavBar/>
    <Switch>
    <Route exact path ="/" component ={Home} ></Route>
    <Route exact path ="/rooms" component ={Rooms}></Route>
    <Route exact path ="/rooms/:slug" component ={SingleRoom}></Route>
    <Route exact component ={ErrorPage}></Route>
    </Switch>
    </>
  );
}

export default App;
