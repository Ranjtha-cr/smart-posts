import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Posts = ({ postCards, searchValue }) => {

    const [posts, setPosts] = useState(postCards)

    useEffect(() => {
        setPosts(postCards)
    }, [postCards])

    useEffect(() => {
        let filteredPosts = searchValue ?
            posts?.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase())) : postCards;
        setPosts(filteredPosts)
    }, [searchValue])

    return (
        <div class="container-fluid content-row p-4">
            <h3 className="d-flex justify-content-center mb-4">Published Posts</h3>
            <div class="row justify-content-center mb-2">
                {posts && posts.length ? posts.map((post, index) => <div key={index} class="col-sm-12 col-lg-4 mb-4">
                    <div class="card h-100">
                        <div class="card-header">
                            <h5>{post?.title}</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">
                                {post?.description}
                            </p>
                        </div>
                    </div>
                </div>
                ) : <h5>No Posts Added/Matched as of Now</h5>}
            </div>
        </div>);
}

const mapStateToProps = (state) => ({
    postCards: state.postReducer?.posts,
    searchValue: state.postReducer?.searchPost,
})


export default connect(mapStateToProps)(Posts)
