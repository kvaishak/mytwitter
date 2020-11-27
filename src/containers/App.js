import React from 'react';
import { AuthProvider } from '../auth/AuthContext';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Authentication from './Authentication';


function App() {
  return (       
    <Router>
      <AuthProvider>

        <Switch>
          <Route path="/" exact component={Home} />


          {/* Authenitcation */}
          <Route component={Authentication} />

        </Switch>
        
      </AuthProvider>
    </Router>
  );
}

export default App;
