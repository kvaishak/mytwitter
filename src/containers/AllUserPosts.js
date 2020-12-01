import React, { Component } from 'react';
import {Container, Alert} from 'react-bootstrap';
import AllTweetsHead from '../components/AllTweetsHead';
import Tweet from '../components/Posts/Tweet';
import axiosInstance from '../axios/ServerInstance';
import AlertBox from '../components/AlertBox';

class AllUserPosts extends Component {

    state = { posts:[], fetchError: false};

    componentDidMount(){        
        axiosInstance.get('/alltweets')
            .then(response => {
                this.setState({ posts : response.data})
            }).catch(error => this.setState({fetchError:true}));
    }

    render() { 
        let allPosts = this.state.posts.map((tweet) => <Tweet key={tweet.tweetid}  tweetData={tweet}/>);
        let alert = <AlertBox type='danger' message='Error in fetching Post. Refresh the page.'/>;

        return ( 
            <Container className="justify-content-center mt-4" >
                <AllTweetsHead />
                { this.state.fetchError ? alert : allPosts}
            </Container>

         );
    }
}
 
export default AllUserPosts;