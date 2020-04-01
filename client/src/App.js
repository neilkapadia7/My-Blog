import React from 'react';
import './App.css';
import Testing from './components/Testing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Navbar from './components/Layout/Navbar';

import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

import {Provider} from 'react-redux';
import store from './store';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  return (
    
    <Provider store={store}>
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/about' component={About} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
