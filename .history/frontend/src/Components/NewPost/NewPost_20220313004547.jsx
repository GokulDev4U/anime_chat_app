import React from 'react';
import './NewPost.css';

const NewPost = () => {
    return (
        <div className='newPost'>
            <form className='newPostForm'>
                <Typography variant='h3'>New posts</Typography>
                <input type='text' placeholder='Title' className='newPostTitle' />
            </form>

        </div>
    );
};

export default NewPost;