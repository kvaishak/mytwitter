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


function App() {
  return (
  
          <Router>
            <AuthProvider>
              <Switch>
                
                <Route path="/" exact component={Home} />
          
                {/* Authentication */}
                <PrivateRoute path="/profile" component={Profile} redirections="/login"/> 
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} /> 
                
              </Switch>
            </AuthProvider>
          </Router>
      
  );
}

export default App;
