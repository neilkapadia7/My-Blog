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
import AllBlogs from './components/Blog/AllBlogs/AllBlogs'; 
import UserBlogs from './components/Blog/AllBlogs/UserBlogs';

import Alert from './components/Layout/Alert';

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
      <Router>
       <Navbar />
       <div className="App">
       <Alert/>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/blog/:id' component={Blog} />
          <PrivateRoute exact path='/newBlog' component={AddBlog} />
          <PrivateRoute exact path='/update' component={UpdateBlog} />
          <PrivateRoute exact path='/allblogs' component={AllBlogs} />
          <PrivateRoute exact path='/user/blogs/:id' component={UserBlogs} />
          <Route exact path='/about' component={About} />
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/home' component={GuestHome} />
          <Route exact path='*' component={NotFound} />
        </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
