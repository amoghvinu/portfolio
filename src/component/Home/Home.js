import React, { Component } from 'react';
import background from '../../component/Fade-In-Background.svg';
import {useSpring,animated} from 'react-spring';
import '../Demo.css';
import IntroAnim from './IntroAnim';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ButtonComponent from './ButtonComponent';
import zIndex from '@material-ui/core/styles/zIndex';

  



const Home = () => {
    

    
    
        return (
          <div style={{backgroundImage: `url(${background})`,
          height:'100vh',zIndex:-1,bottom:0,top:0,width:'100%', backgroundSize: 'cover',backgroundPosition:'center',marginLeft:-1,padding:0,paddingBottom:0}}>
          <div >
               
                       <Grid container>   
                    <Grid item xs={12} lg={12} style={{display:'flex',justifyContent:'center',height:500}}>
                 
                    <IntroAnim />
       
                   </Grid>
                      </Grid>
                   
                        <ButtonComponent />
                      
    
             </div>
             </div>
         
        );
    }


export default Home;