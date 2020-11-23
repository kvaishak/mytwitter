import React, {useRef} from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import { useAuth} from '../auth/AuthContext';

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef= useRef();
    const { signup } = useAuth();

    function handleSubmit(event){
        event.preventDefault();
        signup(emailRef.current.value, passwordRef.current.value);
    }

    return ( 
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign-up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password_confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required></Form.Control>
                        </Form.Group>

                        <Button type="submit" className="w-100">Submit</Button>

                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account ? Log In
            </div>
        </React.Fragment>
     );
}

export default Signup;