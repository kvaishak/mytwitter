import React from 'react';
import {Card, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Tweet = (props) => {
    const {tweet_text, username, time} = props.tweetData;
    const jsTime = new Date(time);
    const updatedPostTime = 'at ' + jsTime.getDate() + '-' + jsTime.getMonth() + '-' + jsTime.getFullYear() + ' • ' + jsTime.getHours() + ':' + jsTime.getMinutes();

    return ( 
        <Container className="justify-content-center mt-4" style={{maxWidth: "80vh"}} >
            <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {tweet_text}{' '}
                </p>
                <footer className="blockquote-footer">
                    <Link to={`/${username}`}>@{username}</Link> • <cite title="Source Title">{updatedPostTime}</cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
        </Container>
     );
     
}
 
export default Tweet;