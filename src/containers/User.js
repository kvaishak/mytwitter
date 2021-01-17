import React, { useState, useEffect } from 'react';
import {Container} from 'react-bootstrap';

import Tweet from '../components/Posts/Tweet';
import axiosInstance from '../axios/ServerInstance';
import AlertBox from '../components/Shared/AlertBox';
import NavbarComponent from '../components/Shared/Navbar';
import Header from '../components/Shared/Header';
import UserPageControls from '../components/Shared/UserPageControls';
import MyModal from '../components/UI/Modal';
import {useAuth} from '../auth/AuthContext';

function FollowerPost({ match }){

  const { currentUser, currentUserJWT, fetchAndUpdateUserJWT} = useAuth();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [fetchedJWT, setJWT] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const username = match.params.username;

    useEffect(() => {
            axiosInstance.get(`/user/tweets?username=${username}`)
            .then(response => {
                setPosts(response.data);
            }).catch(error => setError({fetchError:true}));

            if(currentUser && !currentUserJWT){
                fetchAndUpdateUserJWT(currentUser)
                    .then(response =>  {
                        setJWT(response);
                    }).catch(error => console.log(error));
            }
    },[]);


    let allPosts = posts.map((tweet) => <Tweet key={tweet.tweetid}  tweetData={tweet}/>);
    let alert = <AlertBox type='danger' message='Error in fetching Post. Refresh the page.'/>;
   
    return ( 
        <React.Fragment>
            <NavbarComponent />
            <Header isLoggedIn={currentUser?true:false} text={`${username}'s Tweets`}/>

            {/*<Button variant="primary" onClick={() => setModalShow(true)}>*/}
            {/*    Launch vertically centered modal*/}
            {/*</Button>*/}

            {(fetchedJWT || currentUserJWT) && <UserPageControls username={username} userToken={currentUserJWT}/>}
            <MyModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Container className="justify-content-center mt-4" >
                {error ? alert : allPosts}
            </Container>
        </React.Fragment>
    );
    
}

export default FollowerPost;