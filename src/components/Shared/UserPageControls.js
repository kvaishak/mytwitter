import {Container, Card, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import {useAuth} from '../../auth/AuthContext';
import axiosInstance from '../../axios/ServerInstance';
import React, {useState} from 'react';


const UserPageControls = (props) => {

    // const { currentUser, logout } = useAuth();
    const { username } = props;
    const [isFollower, setIsFollower] = useState(false);

    const buttonText = isFollower ? 'Following' : 'Follow user';


    const handleUserFollow = function() {

        axiosInstance('user/follow',{

            params: {
                followerName: username
            },
            headers: {
                'Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJpbGx0NTZLU2hxWkFwNFhRbExWWXRMSjNkSEEyIn0.q_QQbo_K254r69hU9xbPhzcppi6aa2PbcZ8_R-cv5Tk'
            },

            credentials: 'include',
        })
        .then(response => {
           setIsFollower(response.data);
        }).catch(error => console.log(error));
    }

    return (
        <Container className="justify-content-center mt-4" >
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
                <Button onClick={handleUserFollow} disabled={isFollower}>{buttonText}</Button>
            </ButtonToolbar>
        </Container>
    );
}

export default UserPageControls;