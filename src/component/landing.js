import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Dashboard from './dashboard';

import { useHistory } from "react-router-dom";

const Landing = () => {

    let history = useHistory();
    return (
        <>
            <div className="landing-page" >
                <div className="container landing-card">

                    <input className="user-name" placeholder="User name..." type="text" id="handleInp" color="white" />
                    <button onclick={()=> {history.push("/dashboard");}} >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Landing;