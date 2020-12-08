import {Container, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <Container className="justify-content-center mt-4" >
            <Card className="text-center">
                <Card.Body>
                <Card.Title as="h2">Latest Tweets</Card.Title>
                    <Card.Text>
                        <Link to="/signup">Create an account</Link> or <Link to="/login">Login</Link> to tweet and follow other users. 
                    </Card.Text>
            </Card.Body>
            </Card>
        </Container>
     );
}
 
export default Header;