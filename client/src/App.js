import React from 'react';
import './App.css';
import Testing from './components/Testing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

import {Provider} from 'react-redux';
import store from './store';

const App = () => {

  return (
    
    <Provider store={store}>
    <div className="App">
      <h1>Hello</h1>
      <Router>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
