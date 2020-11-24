import React, {useRef, useState } from 'react';
import {Form, Button, Card, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth} from '../auth/AuthContext';


const ForgotPassword = () => {
    const emailRef = useRef();

    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    

    async function handleSubmit(e){
        e.preventDefault();

        try{
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Password Reset Mail Sent');
        }catch(e){
            setError('Failed to Reset Password');
        }
        setLoading(false);
    }

    return ( 
        <React.Fragment>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Forgot Password Reset</h2>

                    {error && <Alert variant="danger">{error}</Alert> }
                    {message && <Alert variant="success">{message}</Alert> }

                    <Form onSubmit={handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>

                        <Button  disabled={loading} type="submit" className="w-100">Reset Password</Button>

                    </Form>

                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account ? <Link to="/signup">Sign-up</Link>
            </div>
        </React.Fragment>
     );
}

export default ForgotPassword;