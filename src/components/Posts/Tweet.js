import React from 'react';
import {Card, Container} from 'react-bootstrap';

const Tweet = (props) => {
    let {tweet_text, username, firstname, time} = props.tweetData;

    return ( 
        <Container className="justify-content-center mt-4" style={{maxWidth: "50vh"}} >
            <Card>
            <Card.Header>{firstname}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {tweet_text}{' '}
                </p>
                <footer className="blockquote-footer">
                    @{username} • <cite title="Source Title">{time}</cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
        </Container>
     );
     
}
 
export default Tweet;