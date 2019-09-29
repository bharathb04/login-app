import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Notfound from "./pages/Notfound";


function App() {

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="Home"/>
        <Route exact path="/Home" component={Home} />
        <PrivateRoute exact path="/Welcome" component={Welcome} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  /*       
        <Redirect exact from="/" to="Login"/>
        <Route exact path="/Welcom/" component={Welcome} />
        
     
  */
    );
}

export default App;
