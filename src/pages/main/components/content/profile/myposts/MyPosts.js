import React from "react";
import Post from './post/Post'
import NewPost from "./post/NewPostForm";

const MyPosts = (props) => {
    let posts = props.postsValue.map(value => <Post postObject={value}/>)

    let onAddNewPost = (data) => {
        props.onAddPost(data.postText)
    }

    return (
        <div className='posts'>
            <NewPost onSubmit={onAddNewPost}/>
            {posts}
        </div>
    )
}

export default MyPosts;