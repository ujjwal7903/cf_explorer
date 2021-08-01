import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Landing from './component/landing';
import Dashboard from './component/dashboard';
import VirtualContest from './component/Explore/VirtualContest';
import Cfbot from './component/Explore/Cfbot';
import Ladder from './component/Explore/Ladder';
import Recommender from './component/Explore/Recommender';
import Upsolver from './component/Explore/Upsolver';
import Vizualizer from './component/Explore/Vizualizer';
import Temporary from './component/Explore/Temporary';


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/VirtualContest" component={VirtualContest} />
        <Route exact path="/Cfbot" component={Cfbot} />
        <Route exact path="/Ladder" component={Ladder} />
        <Route exact path="/Recommender" component={Recommender} />
        <Route exact path="/Upsolver" component={Upsolver} />
        <Route exact path="/Vizualizer" component={Vizualizer} />
        <Route exact path="/Temporary" component={Temporary} />
        

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