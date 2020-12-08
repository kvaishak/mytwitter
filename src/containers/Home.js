import React from 'react';
import AllUserPosts from './AllUserPosts';
import NavbarComponent from '../components/Shared/Navbar';
import Header from '../components/Shared/Header';
import {useAuth} from '../auth/AuthContext';


const Home = () => {
    const { currentUser, logout } = useAuth();    

    return ( 
        <React.Fragment>
            <NavbarComponent />
            <Header isLoggedIn={currentUser?true:false}/>
            <AllUserPosts />
        </React.Fragment>

     );
}
 
export default Home;