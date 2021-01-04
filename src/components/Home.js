import React from 'react';
import Banner from './Banner';
import CreatePost from './CreatePost';
import Posts from './Posts';
import { connect } from 'react-redux'
import { setPostCards, searchPost } from '../actions';

const Home = ({ showPostCards, setPostCards, searchValue }) => {
    return (<>
        <Banner
            publishPosts={() => setPostCards(true)}
            createPost={() => setPostCards(false)}
            searchPosts={(value) => searchValue(value)}
        />

        {showPostCards ? <Posts /> : <CreatePost />}

    </>);
}

const mapStateToProps = (state) => ({
    showPostCards: state.postReducer?.showPosts
})

const mapDispatchToProps = {
    setPostCards: setPostCards,
    searchValue: searchPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)