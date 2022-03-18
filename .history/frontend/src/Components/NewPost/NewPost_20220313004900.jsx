import React from 'react';
import './NewPost.css';
import { Typography, Button } from '@material-ui/core';

const NewPost = () => {
    return (
        <div className='newPost'>
            <form className='newPostForm'>
                <Typography variant='h3'>New posts</Typography>
                <input type='file' accept='image' />
                <input type='text' placeholder='Caption...' />
                <Button></Button>
            </form>

        </div>
    );
};

export default NewPost;