import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const Card = (props) => {

    return (
        <Link to={props.link}>
        <div className="dash-card">
            <h2 style={{ color: 'white' , textAlign: 'center', padding: '10px'}}>{props.name}</h2>
        </div>
        </Link>
    );

}

export default Card;

