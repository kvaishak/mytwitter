import React from 'react';
import AllUserPosts from './AllUserPosts';
import NavbarComponent from '../components/Shared/Navbar';
import {useAuth} from '../auth/AuthContext';

import AllTweetsHead from '../components/Shared/AllTweetsHead';

const Home = () => {
    const { currentUser, logout } = useAuth();
    

    return ( 
        <React.Fragment>
            <NavbarComponent />
            
            <AllUserPosts />
        </React.Fragment>

     );
}
 
export default Home;