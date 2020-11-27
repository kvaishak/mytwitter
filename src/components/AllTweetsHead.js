import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const AllTweetsHead = () => {
    return ( 
        <Card className="text-center">
            <Card.Body>
            <Card.Title as="h2">Latest Tweets</Card.Title>
                <Card.Text>
                    <Link to="/signup">Create an account</Link> to tweet and follow other users. 
                </Card.Text>
        </Card.Body>
        </Card>
     );
}
 
export default AllTweetsHead;