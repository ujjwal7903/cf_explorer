import React, { Component } from 'react';
import {Button} from 'react-bootstrap';



const Landing = () =>{
    return(
        <div className="landing-page" >
           <div className="container landing-card">
            <form>
                <input placeholder="user name" type="text" color="white" />
                <br/>
                <Button variant="primary">Submit</Button>
            </form>
           </div>
        </div>
    );
}

export default Landing;