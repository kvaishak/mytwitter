import React, {useRef, useState } from 'react';
import {Form, Button, Card, Alert, Container} from 'react-bootstrap';
import { Link , useHistory} from 'react-router-dom';
import { useAuth} from '../../auth/AuthContext';


const Signup = () => {
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef= useRef();

    const { signUp, updateUserName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passoword do not match')
        }
        try{
            setError('');
            setLoading(true);

            var currentUser = await signUp(emailRef.current.value, passwordRef.current.value,  usernameRef.current.value);

            console.log("New User = ", currentUser);

            //creating new user in our mysql database
            // axiosInstance.post('/user/new', {
            //         UserId: 'Fred',
            //         Username: '23'
            //     })
            //     .then(response => {
            //         this.setState({ posts : response.data})
            //     }).catch(error => this.setState({fetchError:true}));

            history.push("/profile");
        }catch(e){
            setError('Failed to Create Account');
        }
        setLoading(false);
    }

    return ( 
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
            <div className="w-100" style={{maxWidth:"400px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign-up</h2>

                        {error && <Alert variant="danger">{error}</Alert> }

                        <Form onSubmit={handleSubmit }>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group>

                            <Form.Group id="username">
                                <Form.Label>User-name</Form.Label>
                                <Form.Control type="text" ref={usernameRef} required></Form.Control>
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                            </Form.Group>

                            <Form.Group id="password_confirm">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required></Form.Control>
                            </Form.Group>

                            <Button  disabled={loading} type="submit" className="w-100">Sign Up</Button>

                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account ? <Link to="/login">Log-in</Link>
                </div>
            </div>
        </Container>
     );
}

export default Signup;