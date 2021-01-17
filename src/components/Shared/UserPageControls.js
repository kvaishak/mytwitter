import {Container, ButtonToolbar, Button} from 'react-bootstrap';
import {useAuth} from '../../auth/AuthContext';
import axiosInstance from '../../axios/ServerInstance';
import React, {useState, useEffect} from 'react';


const UserPageControls = (props) => {

    const { currentUser } = useAuth();
    const { username, userToken } = props;
    const [isFollower, setIsFollower] = useState();


    useEffect(() => {
        axiosInstance.get('/user/following', {
            params: {
                followerName: username
            },
            headers: {
                'Token': userToken
            },
            credentials: 'include'
        })
        .then(response => {
           setIsFollower(response.data);
        }).catch(error => console.log(error));
    },[]);


    const handleUserFollowToggle = function(follow = true) {

        let url = follow ? 'user/follow': 'user/unfollow';

        axiosInstance(url,{

            params: {
                followerName: username
            },
            headers: {
                'Token': userToken
            },

            credentials: 'include',
        })
        .then(response => {
           setIsFollower(response.data);
        }).catch(error => console.log(error));
    }

    let followerBtn = null;
    if(isFollower !== undefined){
        const buttonText = isFollower ? 'Un Follow' : 'Follow user';
        followerBtn = <Button onClick={() => handleUserFollowToggle(!isFollower)} disabled={!currentUser}>{buttonText}</Button>
    }

    return (
        <Container className="justify-content-center mt-4" >
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
                {followerBtn}
            </ButtonToolbar>
         </Container>
    );
}

export default UserPageControls;