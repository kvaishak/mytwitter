import {Container, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return ( 
        <Container className="justify-content-center mt-4" >
            <Card className="text-center">
                <Card.Body>
                    <Card.Title as="h2">{props.text ? props.text : "Latest Tweets"}</Card.Title>
                    {!props.isLoggedIn && 
                        <Card.Text>
                            <Link to="/signup">Create an account</Link> or <Link to="/login">Login</Link> to tweet and follow other users. 
                        </Card.Text>
                    }
                    
            </Card.Body>
            </Card>
        </Container>
     );
}
 
export default Header;