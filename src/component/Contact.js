import React, { Component } from 'react';
import background from '../Images/88888.jpg';
import {Grid} from '@material-ui/core';


class Contact extends Component {
    render() {
        return (
          
            
            <div style={{backgroundImage: `url(${background})`,height:'100vh',backgroundSize:'cover',backgroundPosition:'center center'}}>
                Come lets Contact
            </div>
            
        );
    }
}

export default Contact;