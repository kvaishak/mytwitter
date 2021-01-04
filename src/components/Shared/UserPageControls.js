import {Container, Card, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const UserPageControls = (props) => {
    return (
        <Container className="justify-content-center mt-4" >
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
                <Button>Follow User</Button>
            </ButtonToolbar>
        </Container>
    );
}

export default UserPageControls;