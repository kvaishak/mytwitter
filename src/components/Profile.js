import React, {useState} from 'react';
import {Card, Button, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useAuth} from '../auth/AuthContext';

const Profile = () => {

    const { currentUser } = useAuth();
    const [error, setError] = useState('');

    function handleLogout(){

    }

    return ( 
            <React.Fragment>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert> }
                        <strong>Email: </strong> {currentUser.email}
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                    </Card.Body>

                </Card>
                <div className="w-100 text-center mt-2">
                    <Button variant="link" onClick={handleLogout}>Log out</Button>
                </div>
            </React.Fragment>
        );
}


export default Profile;