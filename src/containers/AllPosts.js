import React from 'react';
import AllUserPosts from './AllUserPosts';
import NavbarComponent from '../components/Shared/Navbar';
import Header from '../components/Shared/Header';


const Home = () => {

    return ( 
        <React.Fragment>
            <NavbarComponent />
            <Header isLoggedIn='false' />
            <AllUserPosts />
        </React.Fragment>

     );
}
 
export default Home;