import React from 'react'
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Landing from './component/Landing';
import Dashboard  from './component/Dashboard';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />

    </Switch>
    </>
  );
}

export default App;


// issues :
// background image position