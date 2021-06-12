import React, { Component } from 'react'

const Card = (props) => {

    return (
        <div className="dash-card">
            <h2 style={{ color: 'white' , textAlign: 'center', padding: '10px'}}>{props.show}</h2>
            <div><a href="/VirtualContest">Click here</a></div>
        </div>
    );

}

export default Card;

