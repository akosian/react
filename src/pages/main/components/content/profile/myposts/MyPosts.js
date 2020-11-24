import React from "react";
import Post from './post/Post'

const MyPosts = (props) => {
    let posts = props.postsValue.map(value => <Post postObject={value}/>)

    let newPostElement = React.createRef();

    let updateNewPostValue = () => {
        let newText = newPostElement.current.value;
        props.onNewPostChange(newText)
    }

    return (
        <div className='posts'>
            <textarea onChange={updateNewPostValue} placeholder='Enter post text...' ref={newPostElement}
                      value={props.newPostText}/>
            <button onClick={props.onAddPost}>Save</button>
            {posts}
        </div>
    )
}

export default MyPosts;