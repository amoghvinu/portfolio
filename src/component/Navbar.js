import React, { Component } from 'react';
import {link} from "react-router-dom"; 
import './Demo.css';

class Navbar extends Component {
    render() {
        return (
            <div style={{width:'100%'}}>
                <nav class="navbar" >
                    
                <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active " href="/"><i class="fab fa-houzz "></i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="About">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="Contact">Contact</a>
  </li>
  </ul>
                    </nav>
 
            </div>
        );
    }
}

export default Navbar;