import React from "react";
import Post from './post/Post'

const MyPosts = (props) => {
    let posts = props.postsValue.map(value => <Post postObject={value}/>)

    let addPost = () => {
        props.postMethods.addPost()
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        props.postMethods.fillPost(newPostElement.current.value)
    }

    return (
        <div className='posts'>
            <textarea onChange={onPostChange} placeholder='Enter post text...' ref={newPostElement}
                      value={props.newPostText}/>
            <button onClick={addPost}>Save</button>
            {posts}
        </div>
    )
}

export default MyPosts;