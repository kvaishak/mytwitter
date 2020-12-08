import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';

import Tweet from '../components/Posts/Tweet';
import axiosInstance from '../axios/ServerInstance';
import AlertBox from '../components/Shared/AlertBox';
import NavbarComponent from '../components/Shared/Navbar';
import Header from '../components/Shared/Header';
import {useAuth} from '../auth/AuthContext';

function FollowerPost({ match }){

  const { currentUser, logout } = useAuth();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const username = match.params.username;

    useEffect(() => {
            axiosInstance.get(`/user/tweets?username=${username}`)
            .then(response => {
                setPosts(response.data);
            }).catch(error => setError({fetchError:true}));
    },[]);


    let allPosts = posts.map((tweet) => <Tweet key={tweet.tweetid}  tweetData={tweet}/>);
    let alert = <AlertBox type='danger' message='Error in fetching Post. Refresh the page.'/>;
   
    return ( 
        <React.Fragment>
            <NavbarComponent />
            <Header isLoggedIn={currentUser?true:false} text={`${username}'s Tweets`}/>
            <Container className="justify-content-center mt-4" >
                {error ? alert : allPosts}
            </Container>
        </React.Fragment>
    );
    
}

export default FollowerPost;