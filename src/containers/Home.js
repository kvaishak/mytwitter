import React from 'react';
import AllUserPosts from './AllUserPosts';
import NavbarComponent from '../components/Navbar';

const Home = () => {
    return ( 
        <React.Fragment>
            <NavbarComponent />
            <AllUserPosts />
        </React.Fragment>

     );
}
 
export default Home;