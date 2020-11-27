import React, { Component } from 'react';
import {Container, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllTweetsHead from '../components/AllTweetsHead';
import Tweet from '../components/Posts/Tweet';

class AllUserPosts extends Component {
    // state = { posts:[] };
    state = { posts:[
        {
            tweetid: 26,
            tweet_text: "welcome to tweeeter @akipaki",
            time: "2020-10-10 20:22:55",
            username: "vaishu",
            firstname: "Vaishak",
        },
        {
            tweetid: 25,
            tweet_text: "hello I am aki",
            time: "2020-10-10 20:20:20",
            username: "akipaki",
            firstname: "akila",
        }
    ] };

    componentDidMount(){
        console.log("Hello there I have been mounted");
    }

    render() { 
        let allPosts = this.state.posts.map((tweet) => <Tweet key={tweet.tweetid}  tweetData={tweet}/>);

        return ( 
            <Container className="justify-content-center mt-4" >
                <AllTweetsHead />
                {allPosts}
            </Container>

         );
    }
}
 
export default AllUserPosts;