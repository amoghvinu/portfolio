import React, { Component } from 'react';
import background from '../../component/Fade-In-Background.svg';
import {useSpring,animated} from 'react-spring';
import '../Demo.css';
import IntroAnim from './IntroAnim';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonComponent from './ButtonComponent';

  



const Home = () => {
    

    
    
        return (
            <div style={{backgroundImage: `url(${background})`,
            height: '100vh', backgroundSize: 'cover',backgroundPosition:'fixed'}}>
               
                       <Grid container>   
                    <Grid item xs={12} lg={12} style={{display:'flex',justifyContent:'center',height:500}}>
                  <div>
                    <div>
                    <IntroAnim />
                    
                    
                    </div>
                    
                   </div>
                   </Grid>
                      </Grid>
                      <div style={{marginTop:0}}>
                        <ButtonComponent />
                      
      </div>
             </div>
         
        );
    }


export default Home;