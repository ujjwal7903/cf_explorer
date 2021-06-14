import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import UpsolveModal from './UpsolveModal';


// Modal not working
// take the help of Mo-Cart app

const Card = (props) => {

    return (
        <>
        <div className="dash-card"  data-toggle="modal" data-target="#UpsolveModal">
            <h2 style={{ color: 'white' , textAlign: 'center', padding: '10px'}}>{props.name}</h2>
        </div>

        <div className="modal fade" id="UpsolveModal" tabindex="-1" role="dialog" aria-labelledby="UpsolveModalLabel" aria-hidden="true">
            <UpsolveModal />
        </div>
        </>
    );

}

export default Card;

