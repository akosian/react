import React from "react";
import Post from './post/Post'

const MyPosts = (props) => {
    let posts = props.postsValue.map(value => <Post postObject={value}/>)

    let addPost = () => {
        props.postMethods.addPost(newPostElement.current.value)
        newPostElement.current.value = '';
    }

    let newPostElement = React.createRef();

    return (
        <div className='posts'>
            <textarea placeholder='Enter post text...' ref={newPostElement}></textarea>
            <button onClick={addPost}>Save</button>
            {posts}
        </div>
    )
}

export default MyPosts;