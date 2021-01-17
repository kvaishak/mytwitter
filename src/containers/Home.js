import React, {useEffect} from 'react';
import AllUserPosts from './AllUserPosts';
import NavbarComponent from '../components/Shared/Navbar';
import Header from '../components/Shared/Header';
import {useAuth} from '../auth/AuthContext';


const Home = () => {
    const { currentUser, currentUserJWT,  fetchAndUpdateUserJWT} = useAuth();    

    useEffect(() => {
        if(currentUser && !currentUserJWT){
            fetchAndUpdateUserJWT(currentUser);
        }
    },[]);

    return ( 
        <React.Fragment>
            <NavbarComponent />
            <Header isLoggedIn={currentUser?true:false}/>
            <AllUserPosts />
        </React.Fragment>

     );
}
 
export default Home;