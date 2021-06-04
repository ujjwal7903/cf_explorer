import React from 'react'
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Landing from './component/Landing';

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
    </>
  );
}

export default App;
