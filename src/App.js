import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignIn from './components/signin/sign-in';
import SignUp from './components/signup/sign-up';

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route exact path='/authorization-app/'>
              <SignIn/>
            </Route>
            <Route path='/authorization-app/sign-up'>
              <SignUp/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
