import React from 'react';
import './App.css';
import Testing from './components/Testing';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Navbar from './components/Layout/Navbar';
import AddBlog from './components/Blog/AddBlog';
import Blog from './components/Blog/Blog';

import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';

import {Provider} from 'react-redux';
import store from './store';
import NotFound from './components/Layout/NotFound';
import UpdateBlog from './components/Blog/UpdateBlog';
import GuestHome from './components/Blog/Guest/GuestHome';

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
          <PrivateRoute exact path='/blog/:id' component={Blog} />
          <PrivateRoute exact path='/newBlog' component={AddBlog} />
          <PrivateRoute exact path='/about' component={About} />
          <PrivateRoute exact path='/update' component={UpdateBlog} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/home' component={GuestHome} />
          <Route exact path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
