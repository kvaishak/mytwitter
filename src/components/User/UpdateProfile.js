import React, {useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { Link , useHistory} from 'react-router-dom';
import { useAuth} from '../../auth/AuthContext';

const UpdateProfile = () => {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef= useRef();

    const { currentUser, updateEmail, updatePassword, updateUserName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        setError('');
        setLoading(true);

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passoword do not match')
        }

        //handling updation using multiple promises
        const promises = [];
        if(currentUser.email !== emailRef.current.value){
             promises.push(updateEmail(emailRef.current.value));
        }

        if(passwordRef.current.value){
            promises.push(updatePassword(passwordRef.current.value));
        }

        if(currentUser.displayName !== usernameRef.current.value){
            promises.push(updateUserName(usernameRef.current.value));
        }

        Promise.all(promises).then(()=> {
            history.push('/profile');
        }).catch(() =>{
            setError('Error in updation')
        }).finally(()=>{
            setLoading(false);
        });

    }

    return ( 
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>

                    {error && <Alert variant="danger">{error}</Alert> }

                    <Form onSubmit={handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email}></Form.Control>
                        </Form.Group>

                        <Form.Group id="username">
                            <Form.Label>User-name</Form.Label>
                            <Form.Control type="text" ref={usernameRef} required defaultValue={currentUser.displayName}></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}  placeholder="Leave Blank to keep the same password"></Form.Control>
                        </Form.Group>

                        <Form.Group id="password_confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef}  placeholder="Leave Blank to keep the same password"></Form.Control>
                        </Form.Group>

                        <Button  disabled={loading} type="submit" className="w-100">Update</Button>

                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/profile">Cancel</Link>
            </div>
        </React.Fragment>
     );
}

export default UpdateProfile;