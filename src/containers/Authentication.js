import React from 'react';
import {Container} from 'react-bootstrap';
import { AuthProvider } from '../auth/AuthContext';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from '../components/Authentication/Signup';
import Login from '../components/Authentication/Login';
import Profile from '../components/User/Profile';
import ForgotPassword from '../components/Authentication/ForgotPassword';
import UpdateProfile from '../components/User/UpdateProfile';
import PrivateRoute from '../hoc/PrivateRoute';



function Authentication() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
        <div className="w-100" style={{maxWidth:"400px"}}>

          <Router>
            <AuthProvider>

              <Switch>

                <PrivateRoute path="/profile" component={Profile} redirections="/login"/> 
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} /> 
                
              </Switch>
              
            </AuthProvider>
          </Router>


        </div>
      </Container>
  );
}

export default Authentication;
