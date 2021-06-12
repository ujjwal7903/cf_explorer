import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Landing from './component/landing';
import Dashboard from './component/dashboard';
import Virtualct from './component/VirtualContest';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/VirtualContest" component={Virtualct} />
        {/* <Route exact path="/dashboard" component={() => 
          <Dashboard  authorized= {false} />}
        /> */}
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;


// issues :
// background image position