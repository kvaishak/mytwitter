import React, {useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth} from '../auth/AuthContext';


const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const { signIn } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setError('');
            setLoading(true);
            await signIn(emailRef.current.value, passwordRef.current.value );
            history.push("/profile");
        }catch(e){
            setError('Failed to Sign In');
        }
        setLoading(false);
    }

    return ( 
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign-In</h2>

                    {error && <Alert variant="danger">{error}</Alert> }

                    <Form onSubmit={handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>

                        <Button  disabled={loading} type="submit" className="w-100">Sign In</Button>

                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account ? <Link to="/signup">Sign-up</Link>
            </div>
        </React.Fragment>
     );
}

export default Login;