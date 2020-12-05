import React, {useState} from 'react';
import {Card, Button, Alert, Container} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../auth/AuthContext';

const Profile = () => {

    const { currentUser, logout } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleLogout(){
        setError('');

        try{
            await logout();
            history.replace('/login');
        }catch(error){
            setError('Failed to Logout');
        }
    }

    return ( 
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
        <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert> }
                        <strong>Email: </strong> {currentUser.email}<br/>
                        <strong>User-name: </strong> {currentUser.displayName}
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                    </Card.Body>

                </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log out</Button>
                </div>
            </div>
        </Container>
        );
}


export default Profile;