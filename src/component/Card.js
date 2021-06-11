import React, { Component } from 'react'

const Card = (props) =>{

    return(
        <div className="dash-card">
            <h1 style={{color:'white'}}>{props.show}</h1>
        </div>
    );

}

export default Card;

