import React from "react";
import Post from './post/Post'

const MyPosts = () => {
    let postsValue = [
        {
            id: 1,
            text: 'My first post',
            likes: 10,
            creator: 'Anton',
            avatar: 'https://img1.ak.crunchyroll.com/i/spire3/3614810e9ada5235038e8deb4adc264c1447729591_large.jpg'
        },
        {
            id: 2,
            text: 'Shit happens',
            likes: 0,
            creator: 'Alex',
            avatar: 'https://avatarfiles.alphacoders.com/527/52773.jpg'
        }
    ]

    let posts = postsValue.map(value => <Post postObject={value}/>)

    return (
        <div className='posts'>
            <textarea placeholder='Enter post text...'></textarea>
            <button>Save</button>
            {posts}
        </div>
    )
}

export default MyPosts;