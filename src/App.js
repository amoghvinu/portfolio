import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import About from './component/About/About';
import Project from './component/Project';
import Background from './Images/bg123.jpg';
import Contact from './component/Contact';




function App() {
  return (
    <div className="App">
    <Navbar />
   
    <switch>
    <Route path="/About" component={About} />
    <Route path="/Project" component={Project} />
    <Route path="/Contact" component={Contact}/>
    <Route  exact path="/" component={Home} />
    </switch>
    
    </div>
  );
}

export default App;
