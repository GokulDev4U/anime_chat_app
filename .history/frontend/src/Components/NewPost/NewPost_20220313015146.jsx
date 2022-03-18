import React, { useEffect, useState } from 'react';
import './NewPost.css';
import { Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost } from '../../Actions/Post';

const NewPost = () => {
    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState("");
    const { isLoading, error, message } = useSelector(state => state.likePost);
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);
        Reader.onload = (e) => {
            if (Reader.readyState === 2) {
                setImage(e.target.result);
            }
        };
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(createNewPost(image, caption));
    };

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }
        if (message) {
            alert.success(message);
            dispatch({ type: "clearMessage" });
        }
    }, []);


    return (
        <div className='newPost'>
            <form className='newPostForm' onSubmit={submitHandler}>
                <Typography variant='h3'>New posts</Typography>
                {image && <img src={image} alt="post" />}
                <input type='file' accept='image/*' onChange={handleImageChange} />
                <input type='text' placeholder='Caption...' value={caption} onChange={(e) => setCaption(e.target.value)} />
                <Button disabled={isLoading} type="submit">Post</Button>
            </form>

        </div>
    );
};

export default NewPost;