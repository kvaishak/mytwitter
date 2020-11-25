import React from 'react';
import {Container} from 'react-bootstrap';
import { AuthProvider } from '../auth/AuthContext';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Signup from '../components/Signup';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ForgotPassword from '../components/ForgotPassword';
import PrivateRoute from '../hoc/PrivateRoute';
import UpdateProfile from '../components/UpdateProfile';


function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
        <div className="w-100" style={{maxWidth:"400px"}}>

          <Router>
            <AuthProvider>

              <Switch>
                <PrivateRoute path="/profile" component={Profile} /> 
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

export default App;
