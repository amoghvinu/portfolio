import React, { Component } from 'react';
import Anim1 from './trans/Anim1';
import background from '../component/log.svg';
import './Demo.css';
import {Grid} from '@material-ui/core';
 import Card from './trans/Card';



class About extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url(${background})`,
            height: '100vh', backgroundSize: 'cover',backgroundPosition:'right'}}>
               <div>
            <Grid container  >
                <Grid item xs={12} lg={12} style={{display:"flex",justifyContent:"center"}}>
              <Anim1 />
              </Grid>
               
               </Grid>   
            
               <Grid item xs={12} lg={12} style={{display:"flex",justifyContent:"center"}}>
                   <Card />
                   </Grid>
              
               
             
               
               
             </div>
               </div>
               
            
        );
    }
}

export default About;