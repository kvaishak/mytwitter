import React from 'react';
import { Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const UnknownPage = () => {

    return ( 
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}} >
            <div>
        
                <Card className="p-5 justify-content-center">
                    <Card.Body>
                        <h1 className="text-center mb-4">You have reached the nknown Land</h1>

                        <div>Go back to safetey weary traveller.</div>
                        <div className="w-100 text-center mt-3">
                            <Link to="/">Home</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Need an account ? <Link to="/signup">Sign-up</Link>
                </div>
        
            </div>
        </Container>
     );
}

export default UnknownPage;