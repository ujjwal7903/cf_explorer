import React, { Component } from 'react';
import {Button} from 'react-bootstrap';



const Landing = () =>{
    return(
        <div className="landing-page" >
           <div className="container landing-card">
        
                <input className="user-name" placeholder="user name" type="text" color="white" />
                <Button variant="primary">Submit</Button>
           </div>
        </div>
    );
}

export default Landing;