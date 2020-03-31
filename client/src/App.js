import React from 'react';
import './App.css';
import Testing from './components/Testing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
