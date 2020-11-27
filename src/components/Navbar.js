import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavbarComponent = () => {
    return ( 
    <Navbar bg="primary" expand="lg" variant="dark" sticky="top" >
         <Container className="" >
             <Navbar.Brand as={Link} to="/">My Tweeter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                </Nav>
                <Link to="/login">
                    <Button variant="outline-light">Sign-in</Button>
                </Link>
            </Navbar.Collapse>
         </Container>
  </Navbar>
   );
}
 
export default NavbarComponent;