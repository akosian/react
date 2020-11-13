import React from "react";
import Post from './post/Post'
import {UpdateNewPostText, AddPost} from "../../../../../../redux/components/profilepage/posts/PostsActionCreator";

const MyPosts = (props) => {
    let posts = props.postsValue.map(value => <Post postObject={value}/>)

    let addPost = () => {
        let action = AddPost();
        props.dispatch(action)
    }

    let newPostElement = React.createRef();

    let onPostChange = () => {
        let action = UpdateNewPostText(newPostElement.current.value)
        props.dispatch(action)
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