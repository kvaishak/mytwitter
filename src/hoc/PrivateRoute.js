import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useAuth} from '../auth/AuthContext';


const PrivateRoute = ({component: Component, redirections: Redirections, ...rest}) => {
    const {currentUser} = useAuth();
    console.log(Redirections);
    return ( 
        <Route {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to={Redirections} />
            }}
            />
     )
}
 
export default PrivateRoute;