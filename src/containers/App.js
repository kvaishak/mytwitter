import React from 'react';
import { AuthProvider } from '../auth/AuthContext';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from '../components/Authentication/Signup';
import Login from '../components/Authentication/Login';
import Profile from '../components/User/Profile';
import ForgotPassword from '../components/Authentication/ForgotPassword';
import UpdateProfile from '../components/User/UpdateProfile';
import PrivateRoute from '../hoc/PrivateRoute';
import Home from './Home';
import UnknownPage from '../components/Shared/UnknownPage';
import User from './User';
import AllPosts from './AllPosts';


function App() {
  return (
  
          <Router>
            <AuthProvider>
              <Switch>
                
                <Route path="/" exact component={Home} />
                <Route path="/all" exact component={AllPosts} />
          
                {/* Authentication */}
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/profile" component={Profile} redirections="/login"/> 
                <PrivateRoute path="/update-profile" component={UpdateProfile} />

                <Route path="/:username" exact component={User} />

                <Route component={UnknownPage} />
                
              </Switch>
            </AuthProvider>
          </Router>
      
  );
}

export default App;
