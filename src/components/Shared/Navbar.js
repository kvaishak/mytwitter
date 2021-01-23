import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../auth/AuthContext';


const NavbarComponent = () => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const rightAuthButton = currentUser === null ? 
        <Link to="/login">
            <Button variant="outline-light">Sign-in</Button>
        </Link> :
        <Button  onClick={handleLogout} variant="outline-light">Logout</Button>;
    


    async function handleLogout(){
        // setError('');

        try{
            await logout();
            history.replace('/');
        }catch(error){
            // setError('Failed to Logout');
        }
    }

    console.log(currentUser);
    
    return ( 
    <Navbar bg="primary" expand="sm" variant="dark" sticky="top" >
         <Container className="" >
             <Navbar.Brand as={Link} to="/">My Tweeter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link> */}
                </Nav>
                {/* <Link to="/login"> */}
                    {/* <Button variant="outline-light">Sign-in</Button> */}
                    {rightAuthButton}
                {/* </Link> */}
            </Navbar.Collapse>
         </Container>
  </Navbar>
   );
}
 
export default NavbarComponent;