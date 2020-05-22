import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
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
    <Route  exact path="/" component={Home} />
    <Route path="/Contact" component={Contact}/>
    </switch>
    
    </div>
  );
}

export default App;
