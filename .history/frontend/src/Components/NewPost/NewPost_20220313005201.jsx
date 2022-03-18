import React, { useState } from 'react';
import './NewPost.css';
import { Typography, Button } from '@material-ui/core';

const NewPost = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");



    return (
        <div className='newPost'>
            <form className='newPostForm'>
                <Typography variant='h3'>New posts</Typography>
                <input type='file' accept='image' />
                <input type='text' placeholder='Caption...' value={caption} onChange={(e) => setCaption(e.target.value)} />
                <Button type="submit">Post</Button>
            </form>

        </div>
    );
};

export default NewPost;